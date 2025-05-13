import clsx from 'clsx'

type InputProps = {
    id?: string;
    type?: string;
    placeholder?: string;
    label?: string;
    error?: string;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "filled" | "outlined";
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
    id,
    type = "text",
    placeholder,
    label,
    error,
    size = "md",
    variant = "default",
    fullWidth = false,
    disabled = false,
    className,
    onChange,
    ...props
}: InputProps) {
    // clsx를 각 태그별로 생성해서 만들어 놓을 수 있다
    const inputWrapperClasses = clsx(
        fullWidth && 'w-full',
    )

    const labelClasses = clsx(
        "block mb-2 font-medium",
        {
            "text-sm": size === "sm",
            "text-base": size === "md",
            "text-xl": size === "lg",
        },
        error && 'text-red-500',
        disabled && 'text-gray-400',
    )

    const inputClasses = clsx(
        'w-full rounded-md border transition-colors focus:outline-none focus:ring-2',
        {
            "p-2 text-sm": size === "sm",
            "p-3 text-base": size === "md",
            "p-4 text-xl": size === 'lg'
        },
        {
            "border-gray-300": variant === "default" && !error,
            "border-transparent bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring": variant === "default" && !error,
            "border-gray-300 bg-transparent focus:border-blue focus:ring-blue-200": variant === "default" && !error,
        },
        error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
        disabled && 'bg-gray-100 text-gray-400 cursor-not-allowed',
        className,
    )

    const errorClasses = "mt-1 text-sm text-red-600"

    return (
        <div className={inputWrapperClasses}>
            {label && (<label htmlFor={id} className={labelClasses}>{label}</label>)}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                className={inputClasses}
                {...props}
            />
            {error && (<p className={errorClasses}>{error}</p>)}
        </div>
    );
}

