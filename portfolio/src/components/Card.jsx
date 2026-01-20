import clsx from "clsx";

export default function Card({ children, className }) {
    return (
        <div
            className={clsx(
                "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md",
                "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_10px_40px_rgba(124,58,237,0.15)]",
                className
            )}
        >
            {children}
        </div>
    );
}
