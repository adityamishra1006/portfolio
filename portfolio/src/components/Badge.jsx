import clsx from "clsx";

export default function Badge({
                                  children,
                                  variant = "default",
                                  className,
                              }) {
    const baseStyles =
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide";

    const variants = {
        default: "bg-white/10 text-gray-200",
        primary: "bg-primary/20 text-primary",
        success: "bg-green-500/20 text-green-400",
        warning: "bg-yellow-500/20 text-yellow-400",
        danger: "bg-red-500/20 text-red-400",
    };

    return (
        <span className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </span>
    );
}
