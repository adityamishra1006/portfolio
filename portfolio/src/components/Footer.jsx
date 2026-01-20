import socials from "../data/social.js";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/60 backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Branding */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold">
                            Aditya<span className="text-primary">.dev</span>
                        </h2>
                        <p className="mt-2 text-sm text-gray-400">
                            Java Backend Developer · Building scalable systems
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socials.map(({ id, url, icon: Icon, name }) => (
                            <a
                                key={id}
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={name}
                                className="w-10 h-10 flex items-center justify-center rounded-full
                           bg-white/5 border border-white/10
                           hover:bg-primary hover:border-primary
                           transition"
                            >
                                <Icon className="text-white" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-10 border-t border-white/5 pt-4 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} Aditya Mishra. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
