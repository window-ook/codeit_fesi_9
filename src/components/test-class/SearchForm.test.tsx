import SearchForm from './SearchForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('검색어를 입력하고 폼을 제출하면 onSearch 함수가 호출되어야 함', async () => {
    const user = userEvent.setup();
    const handleSearch = jest.fn();

    render(<SearchForm onSearch={handleSearch} />)

    const input = screen.getByLabelText('검색:')
    const button = screen.getByRole('button', { name: '검색' });

    await user.type(input, '검색하기');
    await user.click(button);

    expect(handleSearch).toHaveBeenCalledWith('검색하기');
})
