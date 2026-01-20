import clsx from "clsx";

export default function SectionHeader({
                                          title,
                                          subtitle,
                                          center = false,
                                          className,
                                      }) {
    return (
        <div
            className={clsx(
                "mb-12",
                center && "text-center",
                className
            )}
        >
            {subtitle && (
                <p className="text-sm uppercase tracking-widest text-gray-400">
                    {subtitle}
                </p>
            )}

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
                <span className="text-primary">{title}</span>
            </h2>

            <div
                className={clsx(
                    "mt-4 h-[2px] w-16 bg-primary/70 rounded-full",
                    center && "mx-auto"
                )}
            />
        </div>
    );
}
