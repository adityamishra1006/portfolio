const TimelineDot = ({ active = false }) => {
    return (
        <div
            className={`
        relative z-10 flex items-center justify-center
        w-3 h-3 rounded-full
        ${active ? "bg-indigo-500" : "bg-gray-500"}
      `}
        >
            {active && (
                <span className="absolute w-6 h-6 rounded-full bg-indigo-500/20 animate-ping" />
            )}
        </div>
    );
};

export default TimelineDot;
