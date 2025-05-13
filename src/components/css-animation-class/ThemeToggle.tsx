"use client";

import { useTheme } from "@/layouts/theme-provider";

export function ThemeToggle() {
    const { toggleDarkMode } = useTheme();

    return (
        <>
            <button
                className="rounded-md border border-gray-300 p-2 dark:text-white"
                onClick={() => toggleDarkMode("system")}
            >
                시스템
            </button>
            <button
                className="rounded-md border border-gray-300 p-2 dark:text-white"
                onClick={() => toggleDarkMode("dark")}
            >
                다크
            </button>
            <button
                className="rounded-md border border-gray-300 p-2 dark:text-white"
                onClick={() => toggleDarkMode("light")}
            >
                라이트
            </button>
        </>
    );
}
