import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted data:", formData);

        // clear form
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <section id="contact" className="py-28">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader title="Get in Touch" subtitle="Contact" />

                <div className="mt-16 grid gap-14 md:grid-cols-2">

                    {/* ================= LEFT CONTENT ================= */}
                    <div>
                        <p className="text-gray-300 leading-relaxed max-w-lg">
                            I’m always interested in discussing new projects, backend challenges,
                            system design problems, or full-stack opportunities. Whether you have
                            a question or just want to connect, feel free to reach out.
                        </p>

                        <div className="mt-10 space-y-6">
                            {/* Email */}
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary">
                                    ✉
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="text-white font-medium">
                                        mishraaditya6001@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary">
                                    📞
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p className="text-white font-medium">
                                        +91 7763979170
                                    </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary">
                                    📍
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">
                                        Location & Availability
                                    </p>
                                    <p className="text-white font-medium">
                                        Ranchi (Permanent)
                                    </p>
                                    <p className="mt-1 text-sm text-gray-400">
                                        Open to work in Noida, Pune, Bangalore, Kolkata, Indore,
                                        Gurugram, Ahmedabad — anywhere in India and worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ================= SOCIAL LINKS ================= */}
                        <div className="mt-10">
                            <p className="text-sm text-gray-400 mb-4">
                                Connect on Social
                            </p>

                            <div className="flex gap-4 flex-wrap">
                                <a
                                    href="https://www.linkedin.com/in/aditya-mishra-468197208/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    px-4 py-2 rounded-lg
                    bg-white/5 border border-white/10
                    text-sm text-gray-300
                    transition-all duration-300
                    hover:text-white
                    hover:border-primary/50
                    hover:shadow-[0_0_18px_-8px_rgba(99,102,241,0.6)]
                  "
                                >
                                    LinkedIn
                                </a>

                                <a
                                    href="https://github.com/adityamishra1006"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    px-4 py-2 rounded-lg
                    bg-white/5 border border-white/10
                    text-sm text-gray-300
                    transition-all duration-300
                    hover:text-white
                    hover:border-primary/50
                    hover:shadow-[0_0_18px_-8px_rgba(99,102,241,0.6)]
                  "
                                >
                                    GitHub
                                </a>

                                <a
                                    href="https://x.com/learnandcode06"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    px-4 py-2 rounded-lg
                    bg-white/5 border border-white/10
                    text-sm text-gray-300
                    transition-all duration-300
                    hover:text-white
                    hover:border-primary/50
                    hover:shadow-[0_0_18px_-8px_rgba(99,102,241,0.6)]
                  "
                                >
                                    Twitter (X)
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ================= CONTACT FORM ================= */}
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <form className="space-y-6" onSubmit={handleSubmit}>

                            {/* Name */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="
                    w-full px-4 py-3 rounded-lg
                    bg-black/40 border border-white/10
                    text-white placeholder-gray-500
                    focus:outline-none focus:border-primary/60
                  "
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="
                    w-full px-4 py-3 rounded-lg
                    bg-black/40 border border-white/10
                    text-white placeholder-gray-500
                    focus:outline-none focus:border-primary/60
                  "
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    className="
                    w-full px-4 py-3 rounded-lg
                    bg-black/40 border border-white/10
                    text-white placeholder-gray-500
                    focus:outline-none focus:border-primary/60
                    resize-none
                  "
                                />
                            </div>

                            {/* PURPLE BUTTON */}
                            <Button
                                className="
                  w-full
                  bg-primary
                  text-white
                  hover:bg-primary/90
                  shadow-[0_0_25px_-8px_rgba(99,102,241,0.8)]
                "
                            >
                                Send Message →
                            </Button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
