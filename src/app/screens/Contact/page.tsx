"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  
} from "lucide-react";
import logo from "@/app/assets/navbar/Tradelogo.png";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b1f] via-[#0e0e29] to-[#140a30] text-white">
      {/* Navbar */}
          <div><Navbar /></div>
              

      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact us</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Have a question or need more information? We’re here to help. Get in
          touch with us!
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 bg-[#0f0f25]/70 backdrop-blur-xl rounded-3xl border border-white/10 flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Contact details</h2>
          <p className="text-gray-400 mb-6">
            Fill out the form below, and a member of our team will get back to
            you
          </p>

          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-blue-400" />
            <div>
              <p className="text-gray-400 text-sm">Send us an email</p>
              <p className="text-white font-medium">info@tradesglobalfx.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Phone className="text-blue-400" />
            <div>
              <p className="text-gray-400 text-sm">Give us a call</p>
              <p className="text-white font-medium">+1 805 956 611</p>
            </div>
          </div>

          <div>
            <p className="text-gray-400 mb-2">Follow us on</p>
            <div className="flex gap-4 text-gray-400">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-white transition">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 space-y-5">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <label className="block mb-1 text-gray-300">Full name</label>
              <input
                type="text"
                name="name"
                placeholder="John Carter"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0b0b1f] rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-gray-300">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="example@youremail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0b0b1f] rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Phone number</label>
            <input
              type="text"
              name="phone"
              placeholder="(123) 456 - 7890"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#0b0b1f] rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-[#0b0b1f] rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-white text-black font-semibold rounded-full px-6 py-3 flex items-center gap-2 hover:bg-gray-200 transition"
          >
            Send Message <ArrowRight size={18} />
          </button>
        </form>
      </section>

          {/* Footer */}
            <footer className="py-10 bg-[#0B0C14]">
                  <div className="rounded-2xl bg-[#111526] text-gray-400 py-10 px-6 sm:px-10 md:px-20 w-[90%] md:w-[80%] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-6 items-start text-center sm:text-left">
                      {/* Logo & Socials */}
                      <div className="space-y-5 flex flex-col items-center sm:items-start">
                        <div>
                          <Image src={logo} alt="Company Logo" className="w-24 sm:w-28" />
                        </div>
                        <p>Giving you the best investment opportunities</p>
                        <div className="flex gap-4 mt-4 justify-center sm:justify-start">
                          <FaFacebook className="hover:text-blue-800 cursor-pointer transition" />
                          <FaTwitter className="hover:text-blue-800 cursor-pointer transition" />
                          <FaInstagram className="hover:text-blue-800 cursor-pointer transition" />
                          <FaLinkedin className="hover:text-blue-800 cursor-pointer transition" />
                        </div>
                      </div>
          
                      {/* Useful Links */}
                      <div className="sm:col-span-1 md:col-span-3 space-y-5">
                        <h1 className="text-xl text-white font-bold">Useful Links</h1>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between gap-6 sm:gap-8">
                          <div className="space-y-2">
                            <Link href="/">
                              <li className="list-none hover:text-blue-800 cursor-pointer">
                                Home
                              </li>
                            </Link>
                            <Link href="/screens/About">
                              <li className="list-none hover:text-blue-800 cursor-pointer">
                                About
                              </li>
                            </Link>
                          </div>
                          <div className="space-y-2">
                            <li className="list-none hover:text-blue-800 cursor-pointer">
                              Contact Us
                            </li>
                            <li className="list-none hover:text-blue-800 cursor-pointer">
                              Investment Plans
                            </li>
                          </div>
                          <div className="space-y-2">
                            <Link href="/screens/auth/Signin">
                              <li className="list-none hover:text-blue-800 cursor-pointer">
                                Login
                              </li>
                            </Link>
                            <Link href="/screens/auth/Signup">
                              <li className="list-none hover:text-blue-800 cursor-pointer">
                                Sign up
                              </li>
                            </Link>
                          </div>
                        </div>
                      </div>
          
                      {/* Legal */}
                      <div className="space-y-5">
                        <h1 className="text-xl text-white font-bold">Legal</h1>
                        <div className="space-y-2">
                          <p className="hover:text-blue-800 cursor-pointer transition">
                            Terms of Use
                          </p>
                          <p className="hover:text-blue-800 cursor-pointer transition">
                            Privacy Policy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div className="text-center text-white/85 py-6 text-sm sm:text-base">
                    <p>Copyright © Trades Global FX | {new Date().getFullYear()}</p>
                  </div>
                </footer>
    
    </div>
  );
}
