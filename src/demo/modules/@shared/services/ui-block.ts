import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, ComponentType } from '@angular/material';

interface ActiveStream {
  subs: Subscription,
  ref?: UiBlockRef<any>
}

export interface UiBlockOptions {
  block?: boolean;
  timeout?: number;
  promise?: Promise<any>;
}

export type UiBlockRef<T> =  MdDialogRef<T> & { blocking: BlockingRef };


export class BlockingRef implements UiBlockOptions {
  private closed: boolean;

  get isClosed(): boolean {
    return this.closed;
  }

  constructor(private dialogRef: MdDialogRef<any>, private options: UiBlockOptions) {

    if (this.options.timeout > 0) {
      setTimeout(() => this.onTimeout(), this.options.timeout);
    }

    if (this.options.promise && typeof this.options.promise.then === 'function') {
      this.options.promise
        .then( () => this.onPromise() )
        .catch( () => this.onPromise() );
    }

    dialogRef.afterClosed().subscribe( () => this.onClose() );
  }

  close(): void {
    if (this.closed === true) {
      return;
    }
    this.dialogRef.close();
  }

  private onTimeout(): void {
    if (this.closed === true) {
      return;
    }
    this.dialogRef.close();
  }

  private onPromise(): void {
    if (this.closed === true) {
      return;
    }
    this.dialogRef.close();
  }

  private onClose(): void {
    if (this.closed === true) {
      return;
    }
    this.closed = true;
  }
}

@Injectable()
export class UiBlockService {
  private activeStreams = new Map<Observable<boolean>, ActiveStream>();
  private options: UiBlockOptions = {} as any;

  constructor(protected dialog: MdDialog) {

  }

  block(value: boolean): this {
    this.options.block = value;
    return this;
  }

  closeWithTimeout(seconds: number): this {
    this.options.timeout = seconds * 1000;
    return this;
  }

  closeWithPromise(promise: Promise<any>): this {
    this.options.promise = promise;
    return this;
  }

  fromObservable<T>(obs$: Observable<boolean> ,component: ComponentType<T>,
                 config?: MdDialogConfig): void {
    const next = value => {
      if (value && !this.activeStreams.get(obs$).ref ) {
        const ref = this.open(component, config);
        this.activeStreams.get(obs$).ref = ref;
        ref.afterClosed().subscribe( () => this.activeStreams.get(obs$).ref = undefined );
      } else {
        const ref = this.activeStreams.get(obs$).ref;
        if (ref) {
          this.activeStreams.get(obs$).ref = undefined; // to prevent async re-call
          ref.close();
        }
      }
    };

    const error = err => this.disconnectObservable(obs$);
    const complete = () => this.disconnectObservable(obs$);

    const activeStream: ActiveStream = <any>{};
    this.activeStreams.set(obs$, activeStream);

    activeStream.subs = obs$.subscribe(next, error, complete);

  }

  disconnectObservable(obs$): void {
    const obsStore = this.activeStreams.get(obs$);
    if (obsStore) {
      if (!obsStore.subs.closed) {
        obsStore.subs.unsubscribe();
      }
      if (obsStore.ref) {
        obsStore.ref.close();
      }
      this.activeStreams.delete(obs$);
    }
  }

  open<T>(component: ComponentType<T>,
          config?: MdDialogConfig): UiBlockRef<T> {

    if (config && !config.hasOwnProperty('disableClose')) {
      config.disableClose = !this.options.block;
    }

    const dialogRef = this.dialog.open(component, config);

    const blocking = new BlockingRef(dialogRef, this.options);

    this.options = {} as any;

    return Object.create(dialogRef, { blocking: { value: blocking } });
  }

}
