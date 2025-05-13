interface CookieOptions {
    "max-age"?: number;
    expires?: Date;
    secure?: boolean;
    samesite?: "Lax" | "Strict" | "None";
    domain?: string;
    [key: string]: string | number | boolean | Date | undefined;
}

export function setCookie(name: string, value: string, options: CookieOptions = {}) {
    options = {
        path: '/',
        ...options,
    }

    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    for (const optionKey in options) {
        const optionValue = options[optionKey];
        if (optionValue === undefined || optionValue === null || optionValue === false) continue;

        let finalValue = optionValue;
        if (optionValue instanceof Date) {
            finalValue = optionValue.toUTCString()
        }

        cookieString += `; ${optionKey}`;

        if (finalValue !== true) {
            cookieString += `=${finalValue}`;
        }
    }
    document.cookie = cookieString;
}

export function deleteCookie(name: string) {
    document.cookie = encodeURIComponent(name) + "=; Max-age=0"
}

export function isCookieExists(name: string) {
    const encodedName = encodeURIComponent(name);
    return document.cookie.split('; ').find((cookie) => cookie.startsWith(encodedName + '=')) ? true : false;
}

export function getCookieValue(name: string) {
    const encodedName = encodeURIComponent(name);
    const cookie = document.cookie.split('; ').find((cookie) => cookie.startsWith(encodedName + '='));
    if (cookie) return decodeURIComponent(cookie.split('=')[1]); // Decoded Value (by Cursor)
    return undefined;
}

