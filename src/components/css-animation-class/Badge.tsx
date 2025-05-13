import clsx from 'clsx'

type BadgeProps = {
    children: React.ReactNode;
    variant?: "primary" | "success" | "warning" | "danger" | "info";
    size?: "xs" | "sm" | "md";
    outlined?: boolean;
    rounded?: boolean;
    withDot?: boolean;
    className?: string;
};

export default function Badge(
    {
        children,
        variant,
        size,
        outlined,
        rounded,
        withDot,
        className
    }
        : BadgeProps) {
    const badgeClasses = clsx(
        'inline-flex items-center font-medium',
        {
            'text-xs px-1.5 py-0.5': size === "xs",
            'text-sm px-2.5 py-0.5': size === 'sm',
            'text-base px-3 py-1': size === 'md',
        },
        {
            'bg-white-500 text-black': variant === "primary" && !outlined,
            'bg-green-100 text-green-700': variant === "success" && !outlined,
            'bg-yellow-100 text-yellow-700': variant === "warning" && !outlined,
            'bg-red-100 text-red-700': variant === "danger" && !outlined,
            'bg-blue-100 text-blue-700': variant === "info" && !outlined,
            'bg-transparent border': outlined,
            "border-gray-100 text-gray-700": variant === 'primary' && outlined,
            "border-blue-500 text-blue-500": variant === "primary" && outlined,
            "border-green-500 text-green-500": variant === "success" && outlined,
            "border-yellow-500 text-yellow-500": variant === "warning" && outlined,
            "border-red-500 text-red-500": variant === "danger" && outlined,
            "border-blue-400 text-blue-400": variant === "info" && outlined,
        },
        {
            'rounded': !rounded,
            'rounded-full': rounded,
        },
        className,
    )

    const dotColorClasses = {
        "bg-blue-500": variant === "primary",
        "bg-green-500": variant === "success",
        "bg-yellow-500": variant === "warning",
        "bg-red-500": variant === "danger",
        "bg-blue-400": variant === "info",
    };

    return (
        <span className={badgeClasses}>
            {withDot && (
                <span
                    className={clsx("mr-1.5 h-2 w-2 rounded-full", dotColorClasses)}
                ></span>
            )}
            {children}
        </span>
    );
}
