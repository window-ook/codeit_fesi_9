function Button({
    children,
    variant,
}: {
    children: React.ReactNode;
    variant: "primary" | "secondary" | "outline";
}) {
    // 클래스 배열 생성
    const classArray = [
        "cursor-pointer rounded-md px-4 py-2", // 기본 클래스
        variant === "primary" && "bg-blue-500 hover:bg-blue-600 text-white",
        variant === "secondary" && "bg-gray-500 hover:bg-gray-600 text-white",
        variant === "outline" && "border border-gray-500 hover:bg-gray-100",
    ];

    // filter로 falsy 값 제거 후 join으로 문자열로 변환
    const buttonClass = classArray.filter(Boolean).join(" ");

    return <button className={buttonClass}>{children}</button>;
}

export default Button;
