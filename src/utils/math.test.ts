import * as math from "./math";

// math 모듈 전체를 Mock으로 대체
jest.mock("./math");

test("모듈의 함수들이 Mock으로 대체되었는지 확인", () => {
    // 모든 함수가 Mock 함수로 대체됨
    expect(jest.isMockFunction(math.add)).toBe(true);
    expect(jest.isMockFunction(math.subtract)).toBe(true);
    expect(jest.isMockFunction(math.multiply)).toBe(true);
    expect(jest.isMockFunction(math.divide)).toBe(true);

    // Mock 함수의 반환값 설정
    // 실제 add가 아니라 그냥 10을 반환하는 mock add
    (math.add as jest.Mock).mockReturnValue(10);

    // 혹은 아래와 같이 타입 단언을 쓰지 않을 수도 있습니다.
    // jest.mocked(math.add).mockReturnValue(10);

    expect(math.add(1, 2)).toBe(10);
});
