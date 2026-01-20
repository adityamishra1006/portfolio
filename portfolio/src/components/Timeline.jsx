export default function Timeline({ children }) {
    return (
        <div className="relative">
            {/* Vertical Line */}
            <div
                className="absolute left-4 top-0 h-full w-[2px]
                   bg-gradient-to-b from-primary/80 via-primary/40 to-transparent"
            />

            {/* Timeline Items */}
            <div className="space-y-12 pl-12">
                {children}
            </div>
        </div>
    );
}
