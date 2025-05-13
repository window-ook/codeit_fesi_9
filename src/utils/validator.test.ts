import { validateEmail } from './vaildator';


test('유효한 이메일 주소 검증', () => {
    expect(validateEmail('test@example.com')).toBeTruthy();
    expect(validateEmail('user.name@domain.co.kr')).toBeTruthy();

})

test('유효하지 않은 이메일 주소 검증', () => {
    expect(validateEmail('invalid)')).toBeFalsy();
    expect(validateEmail('test@')).toBeFalsy();
    expect(validateEmail('')).toBeFalsy();
})

test('선택적 필드를 포함한 유효한 사용자 객체가 주어지면 true를 반환해야 함', () => {

})