"use client";

import * as m from "motion/react-m";

export default function StartPage({ onStart }: { onStart: () => void }) {
    return (
        <m.div className="text-center">
            <m.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                }}
                className="mb-8 text-4xl font-bold">MBTI 테스트</m.h1>
            <m.button
                onClick={onStart}
                className="rounded-lg bg-blue-500 px-6 py-3 text-lg text-white"
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                whileTap={{
                    scale: 0.6
                }}
                transition={{
                    duration: 1,
                }}
            >
                시작하기
            </m.button>
        </m.div>
    );
}
