import { sum, multiply } from "./sum";

test("1 + 2는 3이 되어야 함", () => {
    expect(sum(1, 2)).toBe(3);
});

test("2 * 4는 8이 되어야 함", () => {
    expect(multiply(2, 4)).toBe(8);
})