import UserProfile from './UserProfile';
import { render, screen } from '@testing-library/react';

test('요소들이 렌더링되는지 확인', () => {
    render(<UserProfile name="Wook" isVerified={true} />)

    const container = screen.getByTestId('profile-container');
    const heading = screen.getByRole('heading', { name: 'Wook님의 프로필' })
    const button = screen.getByRole('button', { name: '프로필 수정' });

    expect(container).toHaveClass('verified');
    expect(heading).toHaveTextContent('Wook님의 프로필');
    expect(button).not.toBeDisabled();
})
