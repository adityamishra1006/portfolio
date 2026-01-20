// src/components/system/EmptyState.jsx
const EmptyState = ({
                        title = "Nothing here",
                        description = "There is no data to display right now.",
                        action = null,
                    }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-gray-400 max-w-sm">
                {description}
            </p>

            {action && <div className="mt-6">{action}</div>}
        </div>
    );
};

export default EmptyState;
