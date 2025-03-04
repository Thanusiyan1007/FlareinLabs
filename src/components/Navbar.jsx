import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "../assets/flareonLabs.svg";

export default function Navbar({ toggleTheme, darkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll to add background to navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Function
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust offset for fixed navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-gray-800 shadow-lg"
            : "bg-white shadow-lg"
          : darkMode
          ? "bg-gray-900"
          : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="FlareonLabs Logo" className="h-12 w-auto" />
        </a>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  id={`${item.toLowerCase()}-link`}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => smoothScroll(e, item.toLowerCase())}
                  className={`font-medium transition ${
                    darkMode
                      ? "text-white hover:text-gray-300"
                      : "text-gray-900 hover:text-gray-600"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="focus:outline-none transition">
            {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} />}
          </button>
          <button
            className="md:hidden focus:outline-none transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center transition-all duration-300 ${
          menuOpen ? "h-auto py-4 bg-gray-900 text-white" : "h-0 overflow-hidden"
        }`}
      >
        {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
          <a
            key={item}
            id={`${item.toLowerCase()}-link-mobile`}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => {
              smoothScroll(e, item.toLowerCase());
              setMenuOpen(false); // Close menu after clicking
            }}
            className="py-2 font-medium transition hover:text-orange-500"
          >
            {item}
          </a>
        ))}
        
        {/* Theme Toggle in Mobile Menu */}
        <button
          onClick={toggleTheme}
          className="mt-4 flex items-center space-x-2 text-white"
        >
          {darkMode ? (
            <>
              <Sun size={24} className="text-yellow-400" /> <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon size={24} /> <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </nav>
  );
}
