// src/components/system/Loader.jsx
const Loader = ({ size = 40 }) => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div
                className="animate-spin rounded-full border-2 border-gray-600 border-t-indigo-500"
                style={{ width: size, height: size }}
            />
        </div>
    );
};

export default Loader;
