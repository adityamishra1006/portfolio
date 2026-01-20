export default function Loader({ label = "Loading..." }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">

            {/* Spinner */}
            <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>

            {/* Text */}
            <p className="mt-4 text-sm text-gray-400 font-mono">
                {label}
            </p>
        </div>
    );
}
