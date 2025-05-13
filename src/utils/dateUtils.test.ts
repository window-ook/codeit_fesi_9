import { formatDate } from './dateUtils'

describe('dateUtils 테스트', () => {
    describe('formatDate 테스트', () => {
        test('날짜를 YYYY-MM-DD 형식으로 포맷팅해야 함', () => {
            expect(formatDate(new Date(2023, 0, 1))).toEqual('2023-01-01')
        })

        test('다른 구분자를 사용할 수 있어야 함', () => {
            expect(formatDate(new Date(2023, 0, 1), '/')).toEqual('2023/01/01')
        })

        test('10월 미만의 월과 10일 미만의 날짜는 앞에 0을 붙여야 함', () => {
            expect(formatDate(new Date(2023, 2, 9))).toEqual('2023-03-09');
            expect(formatDate(new Date(2023, 5, 5))).toEqual('2023-06-05');
        })

        test('10월 이상의 월과 10일 이상의 날짜도 올바르게 포맷팅해야 함', () => {
            expect(formatDate(new Date(2023, 10, 14))).toEqual('2023-11-14')
        })

        test('유효하지 않은 날짜는 빈 문자열을 반환해야 함', () => {
            expect(formatDate('2020-04-09')).toEqual('')
            expect(formatDate(2023)).toEqual('')
        })
    })
})