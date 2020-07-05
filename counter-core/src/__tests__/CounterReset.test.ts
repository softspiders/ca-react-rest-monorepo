import { mock, mockReset } from "jest-mock-extended";
import { CounterReset, CounterResetOut } from '../CounterReset'

describe('CounterReset', () => {
  const counterResetOut = mock<CounterResetOut>();

  beforeEach(() => {
    mockReset(counterResetOut)
  })

  describe('CounterResetIn', () => {
    describe('reset()', () => {
      it('should call CounterResetOut.saveReset', async () => {
        const counterReset = new CounterReset(counterResetOut)
        await counterReset.reset()
        expect(counterResetOut.saveReset).toHaveBeenCalled()
      })
    })
  })
})
