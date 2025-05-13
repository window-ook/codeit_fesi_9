import Message from './Message';
import { render, screen } from '@testing-library/react';

test('에러가 없는 경우 에러 메시지가 보이지 않아야 함', () => {
    render(<Message isError={false} />)

    const errorMessage = screen.queryByText('오류가 발생했습니다')
    expect(errorMessage).not.toBeInTheDocument();
})

test('에러가 있는 경우 에러 메시지가 보이고, error 클래스가 적용되어야 함', () => {
    render(<Message isError={true} />)

    const errorMessage = screen.getByText('오류가 발생했습니다')
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('error');
})