import { capitalize, truncate } from './stringUtils';

describe('stringUtils 테스트', () => {
    describe('capitalize 테스트', () => {
        test('capitalize가 문자열의 첫 글자를 대문자로 변환해야 함', () => {
            expect(capitalize('hello')).toBe('Hello');
            expect(capitalize('mEllo')).toBe('Mello');
        })

        test('capitalize가 빈 문자열에 대해 빈 문자열을 반환해야 함', () => {
            expect(capitalize('')).toBe('');
            expect(capitalize(null)).toBe('');
            expect(capitalize(undefined)).toBe('');
        })

        test('한 글자 문자열도 처리해야 함', () => {
            expect(capitalize('a')).toBe('A');
        })
    })

    describe('truncate 테스트', () => {
        test('최대 길이보다 짧은 문자열은 그대로 반환해야 함', () => {
            expect(truncate('hello', 10)).toBe('hello')
        })

        test('최대 길이보다 긴 문자열은 자르고 말줄입표를 추가해야 함', () => {
            expect(truncate('mynameiswook', 3)).toBe('myn...')
        })

        test('사용자 정의 말줄임표를 사용할 수 있어야 함', () => {
            expect(truncate('mynameiswook', 2, '(이하 생략)')).toBe('my(이하 생략)')
        })

        test('빈 문자열, null, undefined에 대해 빈 문자열을 반환해야 함', () => {
            expect(truncate('', 10)).toBe('');
            expect(truncate(null, 10)).toBe('');
            expect(truncate(undefined, 10)).toBe('');
        })
    })
})