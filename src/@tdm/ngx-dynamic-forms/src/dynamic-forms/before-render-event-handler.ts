import { Observable } from 'rxjs/Observable';
import { toPromise } from 'rxjs/operator/toPromise';

import { RenderInstruction } from '../interfaces';

const asyncUsed = (done: Promise<void> | Observable<void>) => {
  throw new Error('async() was already called once.');
};

export class BeforeRenderEventHandler {


  constructor(public instruction: RenderInstruction,
              private notify: (done: Promise<void>) => void) { }

  /**
   * Mark this render operation as asynchronous, providing a notifier to signal when the rendering can
   * proceed.
   *
   * For example, when a render instruction of type select requires the options of the select to be
   * fetched from a remote server.
   *
   * @param done
   */
  async(done: Promise<void> | Observable<void>): void {
    if (typeof done['then'] === 'function') {
      this.notify(<any>done);
    } else if (typeof done['subscribe'] === 'function') {
      this.notify( toPromise.call(<Observable<void>>done) );
    } else {
      throw new Error('Invalid input');
    }
    Object.defineProperty(this, 'async', { value: asyncUsed });
  }

}
