import TimelineDot from "./timeline/TimelineDot";

export default function TimelineItem({
                                         role,
                                         company,
                                         duration,
                                         type,
                                         description,
                                         responsibilities,
                                         tech,
                                     }) {
    return (
        <div className="relative flex gap-10 pl-12">

            {/* Dot */}
            <TimelineDot />

            {/* Card */}
            <div
                className="
          w-full rounded-2xl
          bg-white/5 border border-white/10
          p-8
          transition-all duration-300
          hover:border-purple-500/40
          hover:shadow-[0_0_40px_-15px_rgba(168,85,247,0.4)]
        "
            >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl font-semibold text-white">
                        {role}
                    </h3>

                    <span className="text-sm text-gray-400">
            {duration}
          </span>
                </div>

                {/* Company */}
                <p className="mt-1 text-purple-400 font-medium">
                    {company}
                </p>

                {/* Type badge */}
                <span
                    className="
            inline-block mt-3
            px-3 py-1 rounded-full text-xs
            bg-white/10 text-gray-300
          "
                >
          {type}
        </span>

                {/* Description */}
                <p className="mt-5 text-gray-300 leading-relaxed">
                    {description}
                </p>

                {/* Responsibilities */}
                {responsibilities?.length > 0 && (
                    <ul className="mt-5 space-y-2 text-gray-400 list-disc list-inside">
                        {responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}

                {/* Tech stack */}
                {tech?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                        {tech.map((t, index) => (
                            <span
                                key={index}
                                className="
                  px-3 py-1 rounded-full text-xs
                  bg-black/40 text-gray-300
                  border border-white/10
                "
                            >
                {t}
              </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
