import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="min-h-screen bg-black text-white px-6 py-20">
            <div className="max-w-5xl mx-auto">

                {/* HEADING */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-display text-4xl md:text-5xl mb-4">
                        Get In Touch
                    </h1>
                    <p className="font-primary text-gray-400 max-w-xl mx-auto">
                        I’m always open to discussing new opportunities, projects,
                        or collaborations. Feel free to reach out.
                    </p>
                </motion.div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT: CONTACT INFO */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h2 className="font-display text-2xl">
                            Contact Information
                        </h2>

                        <p className="font-primary text-gray-300 leading-relaxed">
                            Whether you have a question, want to work together,
                            or just want to say hello — my inbox is always open.
                        </p>

                        {/* ICON + TEXT CONTACTS */}
                        <div className="space-y-4 font-mono text-sm text-gray-400">

                            <div className="flex items-center gap-3">
                                <img
                                    src="/images/logos/gmail.png"
                                    alt="Email"
                                    className="h-5 w-5 opacity-80"
                                />
                                <span className="hover:text-white transition">
                                  mishraaditya6001@gmail.com
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <img
                                    src="/images/logos/linkedin.png"
                                    alt="LinkedIn"
                                    className="h-5 w-5 opacity-80"
                                />
                                <a
                                    href="https://www.linkedin.com/in/aditya-mishra-468197208/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-white transition"
                                >
                                    linkedin.com/in/yourusername
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <img
                                    src="/images/logos/github.png"
                                    alt="GitHub"
                                    className="h-5 w-5 opacity-80"
                                />
                                <a
                                    href="https://github.com/adityamishra1006"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-white transition"
                                >
                                    Github
                                </a>
                            </div>

                        </div>
                    </motion.div>

                    {/* RIGHT: CONTACT FORM */}
                    <motion.form
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label className="font-mono text-sm text-gray-400">
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full mt-2 px-4 py-3 bg-transparent border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                            />
                        </div>

                        <div>
                            <label className="font-mono text-sm text-gray-400">
                                Your Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full mt-2 px-4 py-3 bg-transparent border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                            />
                        </div>

                        <div>
                            <label className="font-mono text-sm text-gray-400">
                                Message
                            </label>
                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full mt-2 px-4 py-3 bg-transparent border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="px-6 py-3 bg-white text-black font-mono text-sm rounded-lg hover:bg-gray-200 transition"
                        >
                            Send Message
                        </button>
                    </motion.form>

                </div>
            </div>
        </section>
    );
}
