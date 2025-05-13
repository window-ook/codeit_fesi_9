import { calculateDiscount } from './discount'

test('정상적인 가격과 할인율에 대한 계산이 이루어져야 함', () => {
    expect(calculateDiscount(1000, 10)).toBe(900);
    expect(calculateDiscount(2000, 50)).toBe(1000);
    expect(calculateDiscount(0, 10)).toBe(0);
})

test('가격이 음수이면 0을 반환해야 함', () => {
    expect(calculateDiscount(-9000, 10)).toBe(0);
    expect(calculateDiscount(-5000, 0)).toBe(0)
})

test('할인율이 100%를 넘거나 음수이면 0을 반환해야 함', () => {
    expect(calculateDiscount(1000, 105)).toBe(0);
    expect(calculateDiscount(1000, -30)).toBe(0);
})

test('숫자가 입력되지 않으면 0을 반환해야 함', () => {
    expect(() => calculateDiscount(2000, '20')).toThrow('숫자가 들어와야 합니다.')
    expect(() => calculateDiscount('5000', 10)).toThrow('숫자가 들어와야 합니다.')
})