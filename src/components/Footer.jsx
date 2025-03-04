import React from "react";
import { Sun, Moon, Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "../assets/flareonLabs.svg";

export default function Footer({ darkMode, toggleTheme }) {
  return (
    <footer
      className={`py-5 transition-all duration-300 shadow-md border-t ${
        darkMode
          ? "bg-gray-900 text-white shadow-gray-800 border-gray-700"
          : "bg-gray-100 text-gray-900 shadow-gray-300 border-gray-300"
      }`}
    >
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <img className="h-10 w-auto" src={logo} alt="FlareonLabs Logo" />
            <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
              FlareonLabs creates stunning digital experiences through
              cutting-edge design, branding, and product innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <p className="font-semibold uppercase tracking-wide">Quick Links</p>
            <ul className="space-y-1">
              <li>
                <a href="#about" className="hover:text-orange-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Theme Toggle */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:support@flareonlabs.com"
                className="hover:text-orange-500 transition"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 text-sm font-medium transition hover:text-orange-500"
            >
              {darkMode ? (
                <>
                  <Sun size={18} className="text-yellow-400" /> <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={18} /> <span>Dark Mode</span>
                </>
              )}
            </button>

            {/* Copyright */}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              © {new Date().getFullYear()} FlareonLabs. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
