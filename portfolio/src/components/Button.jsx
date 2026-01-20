import clsx from "clsx";

export default function Button({
                                   children,
                                   variant = "primary",
                                   href,
                                   onClick,
                                   className,
                                   ...props
                               }) {
    const baseStyles =
        "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40";

    const variants = {
        primary:
            "bg-primary text-white hover:bg-primary/90",
        secondary:
            "bg-white/10 text-white hover:bg-white/20",
        outline:
            "border border-white/20 text-white hover:bg-white/10",
        ghost:
            "text-white hover:bg-white/10",
    };

    const classes = clsx(baseStyles, variants[variant], className);

    // If href is provided, render <a>
    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    // Otherwise render <button>
    return (
        <button onClick={onClick} className={classes} {...props}>
            {children}
        </button>
    );
}
