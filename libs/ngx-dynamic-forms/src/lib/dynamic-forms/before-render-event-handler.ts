import { Observable } from 'rxjs';

import { RenderInstruction } from '../tdm-model-form/render-instruction';

const asyncUsed = (done: Promise<void> | Observable<void>) => {
  throw new Error('async() was already called once.');
};

export class BeforeRenderEventHandler {
  /**
   * An object whose values are instances of [[RenderInstruction]] and keys are the full static paths of the
   * [[RenderInstruction]] instance they refer to.
   */
  readonly instructions: { [path: string]: RenderInstruction };

  /**
   * When true, this event is the root update / redraw event.
   * When false, this event is the result of a root update event OR an update / redraw event was fired before the root
   * completed.
   */
  readonly isRoot: boolean;

  constructor(
    instructions: { [path: string]: RenderInstruction },
    private notify: (done: Promise<void>) => void,
    isRoot?: boolean
  ) {
    this.instructions = instructions;
    this.isRoot = !!isRoot;
  }

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
      this.notify((<Observable<void>> done).toPromise());
    } else {
      throw new Error('Invalid input');
    }
    Object.defineProperty(this, 'async', { value: asyncUsed });
  }
}
