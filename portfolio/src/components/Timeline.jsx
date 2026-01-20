export default function Timeline({ children }) {
    return (
        <div className="relative mt-20">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-px bg-white/10" />

            <div className="space-y-16">
                {children}
            </div>
        </div>
    );
}
