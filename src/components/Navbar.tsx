"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/app/assets/navbar/Tradelogo.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-4 py-6 sm:px-10 md:px-14 relative z-50"
    >
      {/* Navbar Container */}
      <div className="bg-[#14182b]/80 backdrop-blur-md border border-white/10 max-w-[1400px] mx-auto text-white flex justify-between items-center rounded-full px-6 py-4">

        {/* Logo */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="flex items-center"
        >
          <Image
            src={logo}
            alt="Logo"
            className="w-28 sm:w-32 md:w-36 h-auto"
            priority
          />
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-12 text-base font-medium">
          <motion.li variants={navItem} whileHover={{ y: -2 }}>
            <Link href="/" className="relative hover:text-gray-300 transition">
              Home
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 hover:w-full"></span>
            </Link>
          </motion.li>

          <motion.li variants={navItem} whileHover={{ y: -2 }}>
            <Link href="/screens/About" className="relative hover:text-gray-300 transition">
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 hover:w-full"></span>
            </Link>
          </motion.li>

          <motion.li variants={navItem} whileHover={{ y: -2 }}>
            <Link href="/screens/Contact" className="relative hover:text-gray-300 transition">
              Contact
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 hover:w-full"></span>
            </Link>
          </motion.li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">

          {/* Login */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/screens/auth/Signin")}
            className="border border-white px-5 py-2 rounded-full font-medium hover:bg-white hover:text-black transition"
          >
            Login
          </motion.button>

          {/* Signup */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/screens/auth/Signup")}
            className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Sign Up
          </motion.button>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="absolute top-24 left-0 w-full bg-[#14182b]/95 backdrop-blur-md text-white rounded-2xl shadow-lg z-50 md:hidden flex flex-col items-center space-y-6 py-8 text-lg"
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <p className="hover:text-gray-300 cursor-pointer">Home</p>
            </Link>

            <Link href="/screens/About" onClick={() => setMenuOpen(false)}>
              <p className="hover:text-gray-300 cursor-pointer">About</p>
            </Link>

            <Link href="/screens/Contact" onClick={() => setMenuOpen(false)}>
              <p className="hover:text-gray-300 cursor-pointer">Contact</p>
            </Link>

            {/* Login */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setMenuOpen(false);
                router.push("/screens/auth/Signin");
              }}
              className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition"
            >
              Login
            </motion.button>

            {/* Signup */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setMenuOpen(false);
                router.push("/screens/auth/Signup");
              }}
              className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
            >
              Sign Up
            </motion.button>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;