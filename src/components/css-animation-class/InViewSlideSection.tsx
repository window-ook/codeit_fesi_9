import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface InViewSlideSectionProps {
    children: React.ReactNode;
    direction: "left" | "top" | "bottom";
    className?: string;
}

export default function InViewSlideSection({
    children,
    direction,
    className = "",
}: InViewSlideSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.8, // 80%가 보일 때 애니메이션 시작
    });

    // animate에 사용할 수 있는 커스텀 객체
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -100 : 0,
            y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        }
    }

    return (
        <motion.div
            ref={ref}
            variants={variants}
            // 초기엔 안보이게
            initial="hidden"
            // isInView에 따라 visible, hidden 속성 달라지게
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

