import Button from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";

test("버튼이 화면에 표시되는지 확인", () => {
    render(<Button onClick={() => { }}>버튼내용</Button>);
    const button = screen.getByText("버튼내용");
    expect(button).toBeInTheDocument();
});

test("버튼을 클릭하면 onClick 함수가 호출되는지 확인", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>버튼 내용</Button>)

    const button = screen.getByText('버튼 내용');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
});

test('버튼이 비활성화 상태인지 확인', () => {
    render(<Button onClick={() => { }} disabled>버튼내용</Button>)

    const button = screen.getByText('버튼내용')
    expect(button).toBeDisabled();
})