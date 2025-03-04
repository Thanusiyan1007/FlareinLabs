import React from "react";

export default function Service({ darkMode }) {
  return (
    <section
    id="services"
      className={`py-10 sm:py-16 lg:py-24 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            We provide innovative solutions in UI/UX design, Web & App
            development, and Branding & Identity.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className={`w-full ${darkMode ? "hidden" : "block"}`}
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
            <img
              className={`w-full ${darkMode ? "block" : "hidden"}`}
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line-dark.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            {[
              {
                title: "UI/UX Design",
                desc: "Crafting seamless and engaging user experiences with intuitive and visually stunning designs.",
              },
              {
                title: "Web & App Development",
                desc: "Building high-performance, responsive, and scalable web and mobile applications.",
              },
              {
                title: "Branding & Identity",
                desc: "Helping businesses establish a strong brand presence with unique and impactful branding strategies.",
              },
            ].map((service, index) => (
              <div key={index}>
                <div
                  className={`flex items-center justify-center w-16 h-16 mx-auto border-2 rounded-full shadow transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-gray-300"
                      : "bg-white border-gray-200 text-gray-700"
                  }`}
                >
                  <span className="text-xl font-semibold">{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight md:mt-10">
                  {service.title}
                </h3>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
