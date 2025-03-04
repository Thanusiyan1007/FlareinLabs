import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import img22 from "../assets/1.jpg";

export default function About({ darkMode }) {
  const testimonials = [
    {
      quote: "FlareonLabs brought our brand to life with futuristic and immersive designs.",
      name: "Thanam Thavinthu",
      position: "COO, Market specialist",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      quote: "Their expertise in UX/UI helped us create a highly engaging user experience.",
      name: "Sarah Williams",
      position: "Founder, Creative Studio",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      quote: "FlareonLabs delivered beyond expectations, truly next-gen web solutions!",
      name: "David Lee",
      position: "Product Manager, InnovateX",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
    id="about"
      className={`py-20 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
    >
      <div className="max-w-7xl px-6 mx-auto md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left - Main Content */}
          <div className="space-y-10">
            <h2 className="text-4xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Innovating Digital Experiences with FlareonLabs
            </h2>

            <p
              className={`text-lg leading-relaxed font-inter ${darkMode ? "text-gray-300" : "text-gray-600"
                }`}
            >
              At FlareonLabs, we craft cutting-edge digital solutions that elevate brands and engage users.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
              {[
                { count: 2, label: "UI/UX Projects", desc: "Crafting intuitive user experiences" },
                { count: 0, label: "Web & Mobile Apps", desc: "Delivering high-performance solutions" },
                { count: 1, label: "Branding & Identity", desc: "Creating distinct digital brands" },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                      <CountUp start={0} end={item.count} duration={3} />+
                    </span>
                  </h3>
                  <p className="mt-3 text-xl font-semibold">{item.label}</p>
                  <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Testimonial Section */}
          <div className="relative w-full flex justify-center">
            <div
              className="absolute transition-all duration-1000 opacity-70 -inset-px 
              bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-3xl blur-xl 
              group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
            ></div>

            <div
              className={`relative p-12 rounded-3xl shadow-2xl backdrop-blur-md transition-all duration-500 max-w-xl w-full ${darkMode ? "bg-gray-800/90 text-white" : "bg-white/95 text-gray-900"
                }`}
            >
              {/* Profile Image */}
              <div className="flex items-center gap-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full border-4 border-gray-300"
                />
                <div>
                  <p className="text-2xl font-semibold">{testimonials[currentIndex].name}</p>
                  <p className="text-lg text-gray-500">{testimonials[currentIndex].position}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="mt-8 italic text-2xl leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
