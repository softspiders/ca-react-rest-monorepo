import { mock, mockReset } from "jest-mock-extended";
import { Counter } from "../Counter";
import { CounterIncrement, CounterIncrementOut } from "../CounterIncrement";

describe("CounterIncrement", () => {
  const COUNTER_VALUE = 99;
  describe("CounterIncrementIn", () => {
    const counterIncrementOut = mock<CounterIncrementOut>();

    beforeEach(() => {
      mockReset(counterIncrementOut)
    })

    describe("getCounter()", () => {
      beforeEach(() => {
        counterIncrementOut.getCounter.mockReturnValue(Promise.resolve(new Counter(COUNTER_VALUE))) // to prevent counterIncrement.getCounter() failing
      })

      it("should call counterIncrementOut.getCounter", async () => {
        const counterIncrement = new CounterIncrement(counterIncrementOut)
        await counterIncrement.getCounter()
        expect(counterIncrementOut.getCounter).toHaveBeenCalled()
      });

      it("should return right value", async () => {
        const counterIncrement = new CounterIncrement(counterIncrementOut)
        expect(await counterIncrement.getCounter()).toBe(COUNTER_VALUE)
      });
    });

    describe('increment()', () => {
      beforeEach(() => {
        counterIncrementOut.getCounter.mockReturnValue(Promise.resolve(new Counter(COUNTER_VALUE))) // to prevent counterIncrement.getCounter() failing
        counterIncrementOut.updateCounter.mockReturnValue(Promise.resolve(new Counter(COUNTER_VALUE + 1))) // to prevent counterIncrement.updateCounter() failing
      })
      it("should call counterIncrementOut.getCounter", async () => {
        const counterIncrement = new CounterIncrement(counterIncrementOut)
        await counterIncrement.increment()
        expect(counterIncrementOut.getCounter).toHaveBeenCalled()
      });
      it("should call counterIncrementOut.updateCounter", async () => {
        const counterIncrement = new CounterIncrement(counterIncrementOut)
        await counterIncrement.increment()
        expect(counterIncrementOut.updateCounter).toHaveBeenCalled()
      });
      it('should call updateCounter with right parameter value', async () => {
        const counterIncrement = new CounterIncrement(counterIncrementOut)
        await counterIncrement.increment()
        expect(counterIncrementOut.updateCounter).toBeCalledWith(new Counter(COUNTER_VALUE + 1))
      })
      it('should return right value', async () => {
        const counterIncrement = new CounterIncrement(counterIncrementOut)
        expect(await counterIncrement.increment()).toBe(COUNTER_VALUE + 1)
      })
    })
  });
});
