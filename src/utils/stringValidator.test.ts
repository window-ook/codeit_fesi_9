import { validateUsername } from './stringValidator'

test('유효한 사용자 이름이 주어지면 true를 반환해야 함', () => {
    expect(validateUsername('user_name123')).toBeTruthy();
    expect(validateUsername('my_comyi')).toBeTruthy();
})

test('특수문자가 포함된 이름은 false를 반환해야 함', () => {
    expect(validateUsername('user@test')).toBeFalsy();
    expect(validateUsername('hey!!')).toBeFalsy();
})

test('길이 제한을 벗어난 이름은 false를 반환해야 함', () => {
    expect(validateUsername('a'.repeat(22))).toBeFalsy();
    expect(validateUsername('b'.repeat(2))).toBeFalsy();
})

test('null, undefined, number 등 잘못된 타입에 대해서 false를 반환해야 함', () => {
    expect(validateUsername(null)).toBeFalsy();
    expect(validateUsername(undefined)).toBeFalsy();
    expect(validateUsername(123125)).toBeFalsy();
})