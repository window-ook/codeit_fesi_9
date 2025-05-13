import NavBar from './NavBar';
import { render, screen } from "@testing-library/react";

test('네비게이션의 요소가 존재하는지 검증하는 테스트', () => {
    render(<NavBar />)

    const logo = screen.getByRole('heading', { name: '웹사이트 로고' });
    const searchInput = screen.getByRole('searchbox', { name: '검색' });
    const loginButton = screen.getByRole('button', { name: '로그인' });

    expect(logo).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
})