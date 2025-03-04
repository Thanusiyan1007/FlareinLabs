import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import useTheme from "./hooks/useTheme"; // Import the hook
import About from "./components/About";
import Service from "./components/Service";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Project from "./components/Project";

export default function App() {
  const { darkMode, toggleTheme } = useTheme(); // Use theme hook

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Hero toggleTheme={toggleTheme} darkMode={darkMode} />

      {/* ✅ Optimized Section Spacing */}
      <div className="space-y-16 md:space-y-24 px-4 md:px-8">
        <About toggleTheme={toggleTheme} darkMode={darkMode} />
        <Project darkMode={darkMode} toggleTheme={toggleTheme} />
        <Service toggleTheme={toggleTheme} darkMode={darkMode} />
        <ContactUs darkMode={darkMode} />
      </div>

      <Footer darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  );
}
