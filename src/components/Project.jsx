import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/1.png";
import img2 from "../assets/1.png";
import img3 from "../assets/1.png";

const projects = [
  {
    title: "UI Project Alpha",
    description:
      "A futuristic UI design concept for a dashboard, blending sleek visuals with intuitive navigation for an immersive experience.",
    tools: ["Figma", "React", "Tailwind"],
    image: img1,
  },
  {
    title: "UI Project Beta",
    description:
      "Minimalist eCommerce UI, focusing on a seamless user experience, modern aesthetics, and mobile-first responsive design.",
    tools: ["Adobe XD", "Next.js", "Tailwind"],
    image: img2,
  },
  {
    title: "Branding Project Zeta",
    description:
      "A bold branding identity designed for a tech startup, incorporating color psychology and typography for a striking brand presence.",
    tools: ["Illustrator", "Photoshop"],
    image: img3,
  },
];

export default function Projects({ darkMode }) {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section
      id="projects"
      className={`min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-16 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Side: Project Details */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#ffa500]">{activeProject.title}</h2>
          <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300">
            {activeProject.description}
          </p>
          <h3 className="text-lg md:text-xl font-semibold">Tools Used:</h3>
          <ul className="flex flex-wrap gap-2 md:gap-3 mt-2 justify-center md:justify-start">
            {activeProject.tools.map((tool, index) => (
              <li
                key={index}
                className="px-3 py-1 md:px-4 md:py-2 bg-[#ffa500] text-white rounded-lg text-xs md:text-sm font-medium"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Card Slider */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Swiper
            effect="cards"
            grabCursor={true}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[EffectCards, Navigation, Pagination]}
            className="w-full max-w-xs sm:max-w-sm md:max-w-lg h-[350px] md:h-[450px]"
            onSlideChange={(swiper) => setActiveProject(projects[swiper.activeIndex])}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-md w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
