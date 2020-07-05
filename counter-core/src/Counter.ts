export class Counter {
  private readonly _counter: number

  constructor(counter: number = 0) {
    this._counter = counter
  }

  get counter(): number {
    return this._counter
  }
}
