import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import InputField from "../components/InputField";
import Button from "../components/Button";
import socials from "../data/social";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for future email integration
        console.log("Form submitted:", form);
    };

    return (
        <section id="contact" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Get In Touch"
                    subtitle="Contact"
                    center
                />

                <div className="grid gap-12 md:grid-cols-2 items-start">

                    {/* Contact Info */}
                    <div>
                        <p className="text-gray-300 leading-relaxed">
                            I’m always open to discussing new opportunities, backend
                            development roles, or interesting projects. If you have something
                            in mind or just want to connect, feel free to reach out.
                        </p>

                        <div className="mt-8 flex gap-4">
                            {socials.map(({ id, url, icon: Icon }) => (
                                <a
                                    key={id}
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-11 h-11 flex items-center justify-center rounded-full
                             bg-white/5 border border-white/10
                             hover:bg-primary hover:border-primary
                             transition"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <InputField
                            label="Your Name"
                            name="name"
                            placeholder="Enter your name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />

                        <InputField
                            label="Your Email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />

                        <InputField
                            label="Message"
                            name="message"
                            placeholder="Write your message"
                            value={form.message}
                            onChange={handleChange}
                            textarea
                            required
                        />

                        <Button type="submit">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
