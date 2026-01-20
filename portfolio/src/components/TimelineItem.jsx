import Card from "./Card";
import Badge from "./Badge";

export default function TimelineItem({
                                         role,
                                         company,
                                         duration,
                                         type,
                                         description,
                                         responsibilities = [],
                                         tech = [],
                                     }) {
    return (
        <div className="relative flex items-start gap-8">
            {/* Timeline Dot */}
            <div className="relative z-10 mt-2">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
            </div>

            {/* Content Card */}
            <Card className="p-6 w-full">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            {role}
                        </h3>
                        <p className="text-sm text-gray-400">
                            {company}
                        </p>
                    </div>

                    <div className="text-sm text-gray-400">
                        {duration}
                    </div>
                </div>

                {/* Type Badge */}
                {type && (
                    <div className="mt-3">
                        <Badge variant="primary">
                            {type}
                        </Badge>
                    </div>
                )}

                {/* Description */}
                {description && (
                    <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                        {description}
                    </p>
                )}

                {/* Responsibilities */}
                {responsibilities.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-gray-400">
                        {responsibilities.map((item, index) => (
                            <li key={index} className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech Stack */}
                {tech.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                        {tech.map((item, index) => (
                            <Badge key={index}>
                                {item}
                            </Badge>
                        ))}
                    </div>
                )}
            </Card>
        </div>
    );
}
