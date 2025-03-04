import React from "react";
import { Typewriter } from "react-simple-typewriter";
import figmaLogo from "../assets/Figma-logo.svg";
import htmlLogo from "../assets/html-1.svg";
import cssLogo from "../assets/css-3.svg";
import jsLogo from "../assets/javascript-1.svg";
import tailwindLogo from "../assets/tailwind-css-2.svg";
import reactLogo from "../assets/react.svg";

export default function Hero({ darkMode }) {
  const logos = [figmaLogo, htmlLogo, cssLogo, jsLogo, tailwindLogo, reactLogo];

  return (
    <section
      id="home"
      className={`overflow-x-hidden min-h-screen flex flex-col items-center px-6 md:px-12 transition-all duration-300 pt-24 md:pt-32 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Text Content */}
      <div className="max-w-3xl text-center">
        <p className="inline-flex px-4 py-2 text-base border border-gray-200 rounded-full font-pj">
          Spark Your Vision with Us
        </p>
        <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
        Unlocks Creativity with{" "}
          <span className="text-[#ffa500]">
            <Typewriter
              words={["Flareon Labs", "Innovation", "Futuristic Designs"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <p className="mt-6 text-lg leading-7 text-gray-600 dark:text-gray-300 font-inter">
          Flareon Labs is a creative studio shaping sleek, user-centered digital 
          experiences. We bring ideas to life with a modern, futuristic approach.
        </p>

        {/* Call to Action Button */}
        <div className="relative inline-flex mt-10 group">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="#services"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Explore Our Services
          </a>
        </div>
      </div>

      {/* Infinite Logo Carousel */}
      <div className="w-full overflow-hidden mt-12">
        <div className="relative flex w-[200%] h-[50%] animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <img key={index} src={logo} alt="Tech Logo" className="h-12 mx-8" />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
