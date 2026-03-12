"use client";

import { useState } from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  
} from "react-icons/fa";
import logo from "@/app/assets/navbar/Tradelogo.png"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AboutCard from "@/components/AboutCard";
import AboutAccordion from "@/components/AboutAccordion";
import { useRouter } from "next/navigation";
import earth from "@/app/assets/about/earth.png"
import Link from "next/link";

export default function AboutPage() {


const router = useRouter()

  return (
    <div className="bg-[#0B0C14] text-white min-h-screen">
      <div>
        <Navbar />
      </div>
      <section className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-20 py-16 md:py-24 bg-gradient-to-b from-[#14182B] to-[#0B0C14]">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our purpose is to make finance accessible
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-8">
            We are committed to helping our clients harness the potential of
            cryptocurrency to build wealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-white text-black px-6 py-3 rounded-full flex items-center justify-center gap-2 font-medium hover:bg-gray-200 transition">
              Login <FaArrowRight />
            </button>
            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Sign Up
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 w-full md:w-1/2 flex justify-center">
          <Image
            src={earth}
            alt="Globe"
            className="w-3/4 sm:w-2/3 md:w-full h-auto object-contain"
          />
        </div>
      </section>

      <section>
        <AboutCard />
      </section>

      <section className="relative bg-[#0B0C14] px-4 sm:px-10 md:px-20 py-16 md:py-20">
        <div className="bg-[#111526]/80 p-6 sm:p-8 md:p-10 rounded-3xl flex flex-wrap justify-center md:justify-between items-center text-center md:text-left gap-6 sm:gap-8 md:gap-10">
          <div className="flex-1 min-w-[130px] sm:min-w-[150px]">
            <p className="text-gray-400 text-sm sm:text-base">Countries</p>
            <h3 className="text-4xl sm:text-5xl font-bold">20+</h3>
          </div>
          <div className="flex-1 min-w-[130px] sm:min-w-[150px]">
            <p className="text-gray-400 text-sm sm:text-base">Transactions</p>
            <h3 className="text-4xl sm:text-5xl font-bold">$4.75M</h3>
          </div>
          <div className="flex-1 min-w-[130px] sm:min-w-[150px]">
            <p className="text-gray-400 text-sm sm:text-base">Active Users</p>
            <h3 className="text-4xl sm:text-5xl font-bold">1500+</h3>
          </div>
          <div className="flex-1 min-w-[130px] sm:min-w-[150px]">
            <p className="text-gray-400 text-sm sm:text-base">
              Cryptos Supported
            </p>
            <h3 className="text-4xl sm:text-5xl font-bold">20+</h3>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <AboutAccordion />
      </section>
      <section className="py-16 sm:py-20 bg-[#0B0D17]">
        <div>
          <div className="border rounded-3xl bg-[#0D1036]/80 border-[#0D1036] w-[90%] sm:w-[85%] md:w-[80%] mx-auto">
            <div className="space-y-6 sm:space-y-8 md:space-y-9 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
                  Expertise in Crypto
                  <br className="hidden sm:block" />
                  Excellence
                </h1>
              </div>
              <div className="text-center">
                <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                  Experience secure, stress-free investing where risk is
                  mitigated, and profit maximization is a reality.
                </p>
              </div>
              <div className="text-center">
                <button
                  className="text-black hover:text-white bg-white hover:bg-black px-6 py-3 rounded-full transition duration-300"
                  onClick={() => router.push("/screens/auth/Signup")}
                >
                  Invest Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 sm:py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-[#14182B] to-[#0B0C14]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Start your financial freedom with us today
        </h2>
        <p className="text-gray-400 mb-8 max-w-md sm:max-w-lg md:max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Whether you’re new to crypto or a seasoned investor, we welcome you to
          join us on this exciting journey.
        </p>
        <Link href="/screens/auth/Signup">
          <button className="bg-white text-black px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-gray-200 transition">
            Get Started <FaArrowRight />
          </button>
        </Link>
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
