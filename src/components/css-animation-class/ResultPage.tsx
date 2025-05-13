"use client";

import * as m from "motion/react-m";

export default function ResultPage({ answers }: { answers: string[] }) {
    return (
        <m.div className="text-center">
            <m.h2 className="mb-6 text-3xl font-bold"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
                테스트 결과
            </m.h2>
            <m.div className="rounded-lg bg-white p-6 shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}>
                {answers.map((answer, index) => (
                    <m.p key={index} className="mb-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.2, duration: 0.3 }}
                    >
                        질문 {index + 1}: {answer}
                    </m.p>
                ))}
            </m.div>
        </m.div>
    );
}
