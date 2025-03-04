import React, { useState } from "react";

export default function ContactUs({ darkMode }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div
        id="contact"
            className={`py-12 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
                }`}
        >
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div>
                        <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Get in Touch</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Have questions or need assistance? Reach out to us and we'll respond as soon as possible.
                        </p>

                        <div className="mt-8 space-y-4">
                            <p className="text-lg">📍 <strong>Address:</strong> 123, Business Street, Colombo, Sri Lanka</p>
                            <p className="text-lg">📞 <strong>Phone:</strong> +94 71 234 5678</p>
                            <p className="text-lg">📧 <strong>Email:</strong> support@flareonlabs.com</p>
                        </div>
                    </div>

                    {/* Right: Contact Form with Glass Effect */}
                    <div
                        className={`p-6 rounded-xl shadow-lg backdrop-blur-lg bg-opacity-30 ${darkMode ? "bg-gray-800/30 text-white" : "bg-white/30 text-gray-900"
                            }`}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring focus:ring-blue-500 dark:bg-gray-900/60 dark:border-gray-700 bg-white/40 border-gray-300"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring focus:ring-blue-500 dark:bg-gray-900/60 dark:border-gray-700 bg-white/40 border-gray-300"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring focus:ring-blue-500 dark:bg-gray-900/60 dark:border-gray-700 bg-white/40 border-gray-300"
                                    placeholder="Type your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 text-lg font-bold transition-all duration-200 rounded-lg focus:outline-none 
  hover:bg-orange-500 bg-[#ffa500] text-white dark:bg-orange-700 dark:hover:bg-orange-600"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
