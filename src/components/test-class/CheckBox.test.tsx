import Checkbox from './CheckBox';
import { render, screen, fireEvent } from '@testing-library/react';

test('체크박스 초기에는 체크되어 있지 않아야 함', () => {
    render(<Checkbox />)

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked();
})
