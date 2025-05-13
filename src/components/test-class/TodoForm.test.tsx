import TodoForm from './TodoForm';
import { fireEvent, render, screen } from '@testing-library/react';

test('input에 할 일을 입력하면 상태가 업데이트 되어야 함', () => {
    render(<TodoForm />)

    const input = screen.getByLabelText('할 일:')
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: '빨래하기' } })
    expect(input).toHaveValue('빨래하기')
})