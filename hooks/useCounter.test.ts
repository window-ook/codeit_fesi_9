import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe('useCounter 훅 테스트', () => {
    test('초기값이 올바르게 설정된다', () => {
        const { result } = renderHook(() => useCounter(10));
        expect(result.current.count).toBe(10);
    })

    test('increment 함수를 호출하면 count가 +1 된다', () => {
        const { result } = renderHook(() => useCounter(10))
        act(() => {
            result.current.increment();
        })
        expect(result.current.count).toBe(11);
    })

    test("decrement 함수를 호출하면 count가 1 감소한다", () => {
        const { result } = renderHook(() => useCounter(1));

        act(() => {
            result.current.decrement();
        });

        expect(result.current.count).toBe(0);
    });

    test("reset 함수를 호출하면 count가 초기값으로 초기화된다", () => {
        const { result } = renderHook(() => useCounter(10));

        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(11);

        act(() => {
            result.current.reset();
        });

        expect(result.current.count).toBe(10);
    });
})