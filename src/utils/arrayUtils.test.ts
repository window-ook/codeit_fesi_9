import { uniqueItems, chunk, intersection } from './arrayUtils';

describe('arrayUtils 테스트', () => {
    describe('uniqueItems 테스트', () => {
        test('중복된 항목이 제거되어야 함', () => {
            expect(uniqueItems([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
        })

        test('중복이 없는 배열은 그대로 반환되어야 함', () => {
            expect(uniqueItems([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
            expect(uniqueItems(['a', 'b', 'c'])).toEqual(['a', 'b', 'c'])
        })

        test('빈 배열은 빈 배열을 반환해야 함', () => {
            expect(uniqueItems([])).toEqual([])
        })

        test('배열이 아닌 입력은 빈 배열을 반환해야 함', () => {
            expect(uniqueItems('not an array')).toEqual([])
            expect(uniqueItems(null)).toEqual([])
            expect(uniqueItems(undefined)).toEqual([])
            expect(uniqueItems(false)).toEqual([])
        })
    })

    describe('chunk 테스트', () => {
        test('배열을 지정된 크기의 청크로 나눠야 함', () => {
            expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
        })

        test('청크 크기가 배열 길이보다 크면 하나의 청크만 반환해야 함', () => {
            expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20)).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]);
        })

        test('크기가 1이면 각 항목이 별도의 청크가 되어야 함', () => {
            expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);
        })

        test('크기가 0 이하면 전체 배열을 하나의 청크로 반환해야 함', () => {
            expect(chunk([1, 2, 3, 4, 5], 0)).toEqual([[1, 2, 3, 4, 5]]);
        })

        test('빈 배열은 빈 배열을 반환해야 함', () => {
            expect(chunk([])).toEqual([]);
        })

        test('배열이 아닌 입력은 빈 배열을 반환해야 함', () => {
            const result = chunk('not an array', 2);
            expect(result).toEqual([]);
        })
    })

    describe('intersection 테스트', () => {
        test('두 배열의 공통 요소를 반환해야 함', () => {
            const result = intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
            expect(result).toEqual([3, 4, 5])
        })

        test('공통 요소가 없으면 빈 배열을 반환해야 함', () => {
            const result = intersection([1, 2, 3], [4, 5, 6])
            expect(result).toEqual([]);
        })

        test('빈 배열은 빈 배열을 반환해야 함', () => {
            expect(intersection([], [1, 2])).toEqual([]);
        })

        test('배열이 아닌 입력은 빈 배열을 반환해야 함', () => {
            expect(intersection([1, 2], null)).toEqual([]);
        })
    })
})