import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Button({
                                   children,
                                   to,
                                   href,
                                   onClick,
                                   variant = "primary",
                                   size = "md",
                                   className,
                                   type = "button",
                                   disabled = false
                               }) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-lg font-mono transition focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-white text-black hover:bg-gray-200",
        secondary: "border border-white/20 text-white hover:border-white/40",
        ghost: "text-white hover:bg-white/10"
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base"
    };

    const classes = clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        className
    );

    // React Router navigation
    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    // External links
    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
            >
                {children}
            </a>
        );
    }

    // Regular button
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
        >
            {children}
        </button>
    );
}
