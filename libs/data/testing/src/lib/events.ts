import { ARInterface, ResourceEvent } from '@tdm/data';

export class EventConsumer<T extends ARInterface<any, any>> {
  private _data = {
    events: [] as string[],
    timeout: 500 as number,
    loose: false,
    onEvent: undefined as (event: ResourceEvent) => void
  };

  constructor(public ar: T) {}

  events(...events: string[]): this {
    events.forEach(e => this._data.events.push(e));
    return this;
  }

  timeout(value: number): this {
    this._data.timeout = value;
    return this;
  }

  loose(value: boolean): this {
    this._data.loose = value;
    return this;
  }

  onEvent(fn: (event: ResourceEvent) => void): this {
    this._data.onEvent = fn;
    return this;
  }

  run(before?: (ec: EventConsumer<T>) => void): Promise<ResourceEvent[]> {
    return new Promise<ResourceEvent[]>((resolve, reject) => {
      const data = this._data;
      const events = data.events.slice();
      const collectedEvents: ResourceEvent[] = [];

      const timeoutRef = setTimeout(() => {
        try {
          expect(events.join(', ')).toBe('');
          subs.unsubscribe();
          resolve(collectedEvents);
        } catch (err) {
          reject(err);
        }
      }, data.timeout);

      const subs = this.ar.$rc.events$.subscribe(event => {
        try {
          collectedEvents.push(event);
          expect(events.length).toBeGreaterThan(0);
          expect(event.type).toBe(events.shift());

          if (data.onEvent) {
            data.onEvent(event);
          }

          if (data.loose && events.length === 0) {
            clearTimeout(timeoutRef);
            subs.unsubscribe();
            resolve(collectedEvents);
          }
        } catch (err) {
          clearTimeout(timeoutRef);
          subs.unsubscribe();
          reject(err);
        }
      });

      if (before) before(this);
    });
  }
}

export function eventConsumer<T extends ARInterface<any, any>>(
  ar: T
): EventConsumer<T> {
  return new EventConsumer(ar);
}
