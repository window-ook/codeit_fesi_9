import useInputs from './useInputs';
import { ChangeEvent } from 'react';
import { renderHook, act } from '@testing-library/react';

describe('useInputs 테스트', () => {
    const initialValues = { username: '', email: '' }

    test('초기값 설정 테스트', () => {
        const { result } = renderHook(() => useInputs(initialValues))
        expect(result.current.values).toEqual(initialValues)
    })

    test('단일 필드 업데이트 테스트', () => {
        const { result } = renderHook(() => useInputs(initialValues))

        const mockEvent = {
            target: { name: 'username', value: '이창욱' },
        } as ChangeEvent<HTMLInputElement>

        act(() => {
            result.current.handleChange(mockEvent)
        });

        expect(result.current.values).toEqual({
            username: '이창욱',
            email: '',
        })
    })

    test('여러 필드가 업데이트되는지 확인', () => {
        const { result } = renderHook(() => useInputs(initialValues))

        const nameEvent = {
            target: { name: 'username', value: '이창욱' },
        } as ChangeEvent<HTMLInputElement>

        const emailEvent = {
            target: { name: 'email', value: 'wook@example.com' }
        } as ChangeEvent<HTMLInputElement>

        act(() => {
            result.current.handleChange(nameEvent)
            result.current.handleChange(emailEvent)
        })

        expect(result.current.values).toEqual({
            username: '이창욱',
            email: 'wook@example.com'
        })
    })

    test('리셋 테스트', () => {
        const { result } = renderHook(() => useInputs(initialValues))

        const resetEvent = {
            target: { name: 'username', value: '이창욱' }
        } as ChangeEvent<HTMLInputElement>

        act(() => {
            result.current.handleChange(resetEvent);
            result.current.reset();
        })

        expect(result.current.values).toEqual(initialValues);
    })

    test('빈 초기값 테스트', () => {
        const { result } = renderHook(() => useInputs({}));

        const mockEvent = {
            target: { name: 'username', value: '이창욱' }
        } as ChangeEvent<HTMLInputElement>

        act(() => {
            result.current.handleChange(mockEvent);
        })

        expect(result.current.values).toEqual({ username: '이창욱' });

        act(() => {
            result.current.reset();
        })

        expect(result.current.values).toEqual({});
    })
})