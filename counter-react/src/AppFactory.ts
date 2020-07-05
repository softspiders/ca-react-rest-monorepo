import {
  CounterIncrement,
  CounterIncrementIn,
  CounterReset,
  CounterResetIn,
} from 'counter-core'
import { CounterIncrementRestGateway, CounterResetRestGateway } from 'counter-rest'

export class AppFactory {
  private readonly counterIncrementIn: CounterIncrementIn
  private readonly counterIncrementOut: CounterIncrementRestGateway

  private readonly counterResetIn: CounterResetIn
  private readonly counterResetOut: CounterResetRestGateway

  constructor() {
    this.counterIncrementOut = new CounterIncrementRestGateway(
      `${process.env.REACT_APP_API_URL}`
    )
    this.counterIncrementIn = new CounterIncrement(this.counterIncrementOut)

    this.counterResetOut = new CounterResetRestGateway(
      `${process.env.REACT_APP_API_URL}`
    )
    this.counterResetIn = new CounterReset(this.counterResetOut)
  }

  getCounterIncrementIn(): CounterIncrementIn {
    return this.counterIncrementIn
  }

  getCounterResetIn(): CounterResetIn {
    return this.counterResetIn
  }
}
