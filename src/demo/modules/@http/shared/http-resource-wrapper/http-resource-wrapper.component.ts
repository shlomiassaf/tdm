import * as hljs from 'highlight.js/lib/highlight';
hljs.registerLanguage('json', require(`highlight.js/lib/languages/json.js`));

import {
  Input,
  Component,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { autoSerialize } from '@tdm/core';
import { TDMModel } from '@tdm/core/tdm';
import { ExtractedCode } from '@webpack-ext/tdm-code-sample/client';
import {
  ResourceControl,
  isResourceEvent,
  ResourceEvent,
  ActionEndResourceEvent,
  ActionErrorResourceEvent
} from '@tdm/data';

type ResourceStatus = 'Idle' | 'In-Flight' | 'Error' | 'Success' | 'Cancel';

interface EventLog {
  date: Date;
  event: ResourceEvent;
}
interface TabStringify {
  label: string;
  html: string;
}
interface ActionData {
  eventLog: EventLog[];
  tabStringify: TabStringify[];
  status: ResourceStatus;
  complete?: boolean;
}

type HttpRequestLike<T extends { [x: string]: any } = HttpRequest<any>, K extends string = keyof HttpRequest<any>> = {
  [P in K]?: T[P];
};

function createLoggableRequest(request: Partial<HttpRequest<any>>): HttpRequestLike {
  const req = new HttpRequest(request.method, request.url, request.body, request);
  const reqLike: HttpRequestLike = {
    method: req.method,
    url: req.urlWithParams || req.url,
    headers: <any> req.headers.keys().reduce( (agg, k) => { agg[k] = req.headers.get(k); return agg; }, {}),
    body: req.body,
    reportProgress: req.reportProgress,
    withCredentials: req.withCredentials,
    responseType: req. responseType
  };
  return reqLike;
}

function isPromise<T>(value: any | Promise<T>): value is Promise<T> {
  return value && typeof (<any> value).subscribe !== 'function' && typeof (value as any).then === 'function';
}

function createCode(obj: any): string {
  return hljs.highlightAuto(JSON.stringify(obj, null, 2), [ 'json' ]).value;
}

@Component({
  selector: 'http-resource-wrapper',
  templateUrl: './http-resource-wrapper.component.html',
  styleUrls: [ './http-resource-wrapper.component.scss' ]
})
export class HttpResourceWrapperComponent implements OnChanges {
  @Input() run: () => TDMModel<any> | Promise<any>;
  @Input() title: string;
  @Input() code: ExtractedCode[];
  @Input() noDashboard: boolean;

  resources: Array<ResourceControl<any>> = [];
  resourceActions: ActionData[] = [];

  inFlight = false;
  ledBlinking: boolean;
  ledColor: 'red' | 'blue' | 'yellow' | 'green';
  status: 'Idle' | 'In-Flight' | 'Error' | 'Success' | 'Cancel' = 'Idle';
  selectedAction: ActionData;
  selectedActionIndex: number;

  invokeAction(): void {
    if (this.inFlight) {
      for (let rc of this.resources) {
        rc.cancel();
      }
      return;
    }

    this.inFlight = true;
    this.resources = [];
    this.resourceActions = [];
    this.ledBlinking = true;
    this.ledColor = 'blue';
    this.status = 'In-Flight';
    this.selectedAction = undefined;
    this.selectedActionIndex = -1;

    const self = this;
    const runResult = this.run();

    const listener = function listener(this: ResourceControl<any>, e: ResourceEvent) {
      if (e.type[0] === '$') {
        return;
      }

      // we need to support DAO and AR.
      // With DAO the ResourceControl (this) will always be different from call to call.
      // With AR it will be the same instance of ResourceControl for all calls, but luckily 2 can't run together (busy)
      // so we can use that.
      let index = self.resources.findIndex( (r, i) => r === this && !self.resourceActions[i].complete);

      if (index === -1) {
        const actionData: ActionData = {eventLog: [], tabStringify: [], status: 'In-Flight'};
        index = self.resources.push(this) - 1;
        self.resourceActions.push(actionData);
        if (self.resources.length === 1) {
          self.selectedAction = actionData;
          self.selectedActionIndex = 0;
        }

        this.next().then( result => {
          actionData.tabStringify.unshift({
            label: 'Result',
            html: createCode(result ? autoSerialize(result) : result)
          });
        });
      }

      const actionData = self.resourceActions[index];
      const isLast = self.handleEvent(e, actionData);

      if (isLast) {
        actionData.complete = true;
        if (!runResult && self.resourceActions.every( ad => ad.complete )) {
          removeListener(); // tslint:disable-line:no-use-before-declare
        }
      }
    };

    ResourceControl.addEventListener(listener);
    const removeListener = () => {
      this.inFlight = false;
      ResourceControl.removeEventListener(listener);
    };

    if (isPromise(runResult)) {
      runResult.then(removeListener, removeListener);
    } else if (runResult) {
      (runResult as  TDMModel<any>).$rc.next().then(removeListener, removeListener);
    }
  }

  actionDataOpen(index: number): void {
    this.selectedActionIndex = index;
    this.selectedAction = this.resourceActions[index];
  }

  actionDataClose(index: number): void {
    if (this.selectedActionIndex === index) {
      this.selectedActionIndex = -1;
      this.selectedAction = undefined;
    }
  }

  ngOnChanges(change: SimpleChanges): void {
    if ('noDashboard' in change) {
      this.noDashboard = coerceBooleanProperty(this.noDashboard);
    }
  }

  private handleEvent(event: ResourceEvent, actionLog: ActionData): boolean {
    let isLast = false;
    if (isResourceEvent('ActionError', event)) {
      actionLog.status = this.status = 'Error';
      this.ledBlinking = true;
      this.ledColor = 'red';
      this.setTabObjects(event, actionLog.tabStringify);
      isLast = true;
    } else if (isResourceEvent('ActionEnd', event)) {
      actionLog.status = this.status = event.result === 'success' ? 'Success' : 'Cancel';
      this.ledBlinking = false;
      this.ledColor = event.result === 'success' ? 'green' : 'yellow';
      this.setTabObjects(event, actionLog.tabStringify);
      isLast = true;
    }
    actionLog.eventLog.push({ date: new Date(), event });
    return isLast;
  }

  private setTabObjects(event: ActionEndResourceEvent | ActionErrorResourceEvent, tabStringify: TabStringify[]) {
    if ( event.request ) {
      tabStringify.push({
        label: 'Request',
        html: createCode(createLoggableRequest(event.request))
      });
    }
    if ( event.response ) {
      tabStringify.push({
        label: 'Response',
        html: createCode(event.response)
      });
    }
    if ( isResourceEvent('ActionError', event) ) {
      if ( event.error ) {
        tabStringify.push({
          label: 'Error',
          html: createCode(event.error)
        });
      }
    }
  }

}
