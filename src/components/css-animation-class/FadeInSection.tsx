"use client";
import { useEffect, useRef, useState } from "react";

export default function FadeInSection({
    children,
    threshold = 0.1,
}: {
    children: React.ReactNode;
    threshold?: number;
}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // 요소가 화면에 들어오면 isVisible을 true로 설정
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // 한 번만 애니메이션 적용하기 위해 관찰 중단
                    observer.unobserve(entry.target);
                }
            },
            { threshold },
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        // 컴포넌트 언마운트 시 정리
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-1000 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
        >
            {children}
        </div>
    );
}