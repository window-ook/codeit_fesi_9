export type Membership = "regular" | "silver" | "gold" | "vip";

export type Coupon = {
    type: 'fixed' | 'percentage';
    value: number;
}

const applyPriceDiscount = (price: number) => {
    if (price >= 200000) return price * 0.8;
    if (price >= 100000) return price * 0.9;
    if (price >= 50000) return price * 0.95;
    return price;
}

const applyMembershipDiscount = (price: number, membership: Membership) => {
    const discountRates = {
        silver: 0.98,
        gold: 0.95,
        vip: 0.9,
        regular: 1,
    }
    return price * (discountRates[membership] || 1);
}

const applyCouponDiscount = (price: number, coupon?: Coupon) => {
    if (!coupon) return price;
    if (coupon.type === 'fixed') return price - coupon.value;
    if (coupon.type === 'percentage') return price * (1 - coupon.value / 100);
    return price;
}

const applyMinimumPriceLimit = (
    discountedPrice: number,
    originalPrice: number
) => Math.max(discountedPrice, originalPrice * 0.5);


export const calculatePrice = (
    price: number,
    customer: {
        membership: Membership;
        coupon?: Coupon;
    }
) => {
    const priceAfterDiscount = applyPriceDiscount(price);
    const priceAfterMemberShipDiscount = applyMembershipDiscount(priceAfterDiscount, customer.membership as Membership);
    const priceAfterCouponDiscount = applyCouponDiscount(priceAfterMemberShipDiscount, customer.coupon)
    const finalPrice = applyMinimumPriceLimit(priceAfterCouponDiscount, price);
    return finalPrice;
};
