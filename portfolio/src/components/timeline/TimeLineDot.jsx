const TimelineDot = ({ active = false }) => {
    return (
        <div className="relative flex items-center justify-center">
            {active && (
                <span className="absolute w-6 h-6 rounded-full bg-purple-500/20 blur-md" />
            )}
            <span
                className={`
          w-3 h-3 rounded-full border
          ${active ? "bg-purple-500 border-purple-400" : "bg-gray-600 border-gray-500"}
        `}
            />
        </div>
    );
};

export default TimelineDot;
