import clsx from "clsx";

export default function InputField({
                                       label,
                                       type = "text",
                                       name,
                                       value,
                                       onChange,
                                       placeholder,
                                       required = false,
                                       textarea = false,
                                       className,
                                   }) {
    const baseStyles =
        "w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition";

    return (
        <div className={clsx("flex flex-col gap-2", className)}>
            {label && (
                <label
                    htmlFor={name}
                    className="text-sm text-gray-300"
                >
                    {label}
                    {required && <span className="text-primary"> *</span>}
                </label>
            )}

            {textarea ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={5}
                    className={baseStyles}
                    required={required}
                />
            ) : (
                <input
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={baseStyles}
                    required={required}
                />
            )}
        </div>
    );
}
