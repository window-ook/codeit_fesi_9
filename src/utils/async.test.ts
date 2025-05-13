
const fetchUserData = async (id: number) => {
    if (id <= 0) {
        throw new Error('Invalid ID');
    }
    return {
        id,
        name: 'User ' + id,
        isActive: true
    };
};

test('유효한 id로 호출 시 올바른 데이터가 반환되어야 함', async () => {
    await expect(fetchUserData(1)).resolves.toEqual(
        expect.objectContaining(
            {
                id: 1,
                name: 'User ' + 1,
                isActive: true
            }
        )
    );
})

test('잘못된 id로 호출 시 올바른 데이터가 반환되어야 함', async () => {
    await expect(fetchUserData(-1)).rejects.toThrow('Invalid ID')
})

test('반환된 객체가 올바른 속성을 가지고 있어야 함', async () => {
    const userData = await fetchUserData(1);
    expect(userData).toHaveProperty('id');
    expect(userData).toHaveProperty('name');
    expect(userData).toHaveProperty('isActive');
})