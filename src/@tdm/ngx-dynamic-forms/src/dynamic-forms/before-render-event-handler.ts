import { Observable } from 'rxjs/Observable';
import { toPromise } from 'rxjs/operator/toPromise';

import { RenderInstruction } from '../tdm-model-form';

const asyncUsed = (done: Promise<void> | Observable<void>) => {
  throw new Error('async() was already called once.');
};

export class BeforeRenderEventHandler {


  constructor(public instruction: RenderInstruction,
              private notify: (done: Promise<void>) => void) { }

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
