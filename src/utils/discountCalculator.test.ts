import { calculatePrice, type Membership, type Coupon } from "./discountCalculator";

const BASE_PRICE_100K = 100000;
const BASE_PRICE_50K = 50000;
const BASE_PRICE_30K = 30000;

// 1. 중복된 고객 객체 생성을 개선하기 위해 헬퍼 함수 createCustomer를 추가
// 2. 타입 캐스팅(as)을 개선하기 위해 TypeScript 타입을 명확히 정의
const createCustomer = (
    membership: Membership = "regular",
    coupon?: Coupon
): { membership: Membership; coupon?: Coupon } => ({
    membership,
    coupon,
});

describe("할인 계산기", () => {
    test("기본 가격에 할인이 적용되지 않아야 함 (5만원 미만)", () => {
        const customer = createCustomer();
        const finalPrice = calculatePrice(BASE_PRICE_30K, customer);
        expect(finalPrice).toBe(BASE_PRICE_30K);
    });

    test('5만원 이상 구매 시 5% 할인이 적용되어야 함', () => {
        const customer = createCustomer();
        const finalPrice = calculatePrice(BASE_PRICE_50K, customer);
        expect(finalPrice).toBe(BASE_PRICE_50K * 0.95); // 47500
    });

    test('실버 회원은 추가 2% 할인이 적용되어야 함', () => {
        const customer = createCustomer('silver');
        const finalPrice = calculatePrice(BASE_PRICE_100K, customer);
        expect(finalPrice).toBe(BASE_PRICE_100K * 0.9 * 0.98); // 88200
    });

    test('골드 회원은 추가 5% 할인이 적용되어야 함', () => {
        const customer = createCustomer('gold');
        const finalPrice = calculatePrice(BASE_PRICE_100K, customer);
        expect(finalPrice).toBe(BASE_PRICE_100K * 0.9 * 0.95); // 85500
    });

    test('VIP 회원은 추가 10% 할인이 적용되어야 함', () => {

        const customer = createCustomer('vip');
        const finalPrice = calculatePrice(BASE_PRICE_100K, customer);
        expect(finalPrice).toBe(BASE_PRICE_100K * 0.9 * 0.9); // 81000
    });

    test('정액 쿠폰이 적용되면 고정 금액 할인이 적용되어야 함', () => {

        const customer = createCustomer('regular', { type: 'fixed', value: 5000 })
        const finalPrice = calculatePrice(BASE_PRICE_100K, customer);
        expect(finalPrice).toBe(BASE_PRICE_100K * 0.9 - 5000); // 85500
    });

    test('정률 쿠폰이 적용되어야 함', () => {
        const customer = createCustomer('regular', { type: 'percentage', value: 5 })
        const finalPrice = calculatePrice(BASE_PRICE_100K, customer);
        expect(finalPrice).toBe(BASE_PRICE_100K * 0.9 * 0.95); // 95000
    });

    test('할인 후 가격은 원래 가격의 50% 이하로 내려갈 수 없음', () => {
        const customer = createCustomer('vip', { type: 'percentage', value: 50 })
        const finalPrice = calculatePrice(BASE_PRICE_100K, customer);
        expect(finalPrice).toBe(BASE_PRICE_100K * 0.5); // 50000
    });
});

