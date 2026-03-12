"use client"
import Navbar from "@/components/Navbar";
import React from "react";
import { FaInstagram, FaLinkedin, FaLongArrowAltRight, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import Image from "next/image";

import image3 from "@/app/assets/home/card/cardmg.png";
import image1 from "@/app/assets/home/laptop.png";
import image2 from "@/app/assets/home/phone.png";
import HomeCard from "@/components/HomeCard";
import Plans from "@/components/Plans";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Accordion from "@/components/Accordion";
import Feedback from "@/components/Feedback";
import { fadeIn, staggerContainer, slideUp, slideInLeft, slideInRight, floating, buttonMotion, scaleIn, cardHover } from "@/lib/animation";
import { motion } from "framer-motion";
import { sponsors } from "@/components/Sponsors";

function Home()
{
  const router = useRouter()
    const sample = [
      {
        id: "one",
        title: "Create your account",
        content: (
          <p>
        Sign up in minutes by providing basic details.<br/> Our platform is user-friendly, and setting up your<br/> account is quick and secure
          </p>
        ),
      },
      {
        id: "two",
        title: "Fund your wallet",
        content: (
          <p>Deposit funds using your preferred<br/> currency like Bitcoin, Ethereum, or others.<br/> Our payment options are fast, secure, and flexible<br/> to meet your needs.</p>
        ),
      },
      {
        id: "three",
        title: "Start Investing",
        content: (
          <p>Choose an investment plan, adn watch your assets<br/> grow. You can track your investment in real-time<br/> and withdraw your earnings anytime, hassle-free</p>
        ),
      },
    ];

    
  return (
    <div className="bg-[#0F1014] overflow-hidden">
      <div className="  bg-gradient-to-tr from-[#0F1014] via-[#0F1014] to-[#0F1014] overflow-hidden ">
            <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden bg-[#0F1014]"
    >
      {/* Background Glows */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-purple-500 rounded-full mix-blend-screen blur-3xl opacity-30"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 sm:right-16 md:right-20 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-500 rounded-full mix-blend-screen blur-3xl opacity-30"
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 left-1/3 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-pink-500 rounded-full mix-blend-screen blur-2xl opacity-40"
      />

      {/* Foreground Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-30"
      >
        {/* Navbar */}
        <motion.div variants={fadeIn} className="px-4 sm:px-6 md:px-12">
          <Navbar />
        </motion.div>

        {/* Hero Text Section */}
        <motion.div
          variants={staggerContainer}
          className="text-center space-y-7 px-4 md:px-0"
        >
          <motion.h1
            variants={slideUp}
            className="text-3xl sm:text-5xl lg:text-7xl font-normal text-white"
          >
            Trades Global FX
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-white text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Unlock the potential of your brand new future with Trades Global FX.
            <br className="hidden sm:block" />
            Take control of your financial destiny and embark on a journey
            towards prosperity and success.
          </motion.p>

          <motion.div
            variants={slideUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/screens/auth/Signin">
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-white text-black px-4 py-2 rounded-full cursor-pointer w-full sm:w-auto"
              >
                Login <FaLongArrowAltRight />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/screens/auth/Signup")}
              className="border border-white rounded-full text-white px-4 py-2 w-full sm:w-auto hover:bg-white hover:text-black transition"
            >
              Sign Up
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Images */}
        <motion.div
          variants={fadeIn}
          className="flex justify-center lg:flex items-center mt-10 md:hidden sm:mt-16 md:mt-24 overflow-x-hidden"
        >
          <div className="relative flex justify-center items-center">
            <motion.div
              variants={slideInLeft}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="flex justify-start items-center z-10"
            >
              <motion.div
  variants={floating}
  animate="animate"
  className="flex justify-start items-center z-10"
>
  <Image
    src={image1}
    className="lg:w-[90%] w-[80%] h-auto"
    alt="Laptop"
    priority
  />
</motion.div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="flex justify-start items-center z-20 -ml-40 sm:-ml-32 md:-ml-48 lg:-ml-60"
            >
                  <motion.div
  variants={floating}
  animate="animate"
  className="flex justify-start items-center z-10"
>
 <Image
                src={image2}
                className="w-[70%] h-auto"
                alt="Phone"
                priority
              />
</motion.div>

             
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>

        <section className="z-10 relative bg-[#0F1014] py-50 ">
          <HomeCard />
        </section>
      </div>
      
     <motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="space-y-16 sm:space-y-20 px-4 sm:px-8 md:px-12 lg:px-20"
>
  {/* Heading */}
  <motion.div variants={slideUp} className="text-center">
    <motion.h1
      variants={fadeIn}
      className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight"
    >
      We are empowering traders
      <br className="hidden sm:block" /> globally
    </motion.h1>
  </motion.div>

  {/* Content Block */}
  <motion.div
    variants={fadeIn}
    className="bg-[#14182b] rounded-2xl flex flex-col md:flex-row items-center gap-10 md:gap-16 p-6 sm:p-10 md:p-14 lg:p-20"
  >
    {/* Image Section */}
    <motion.div
      variants={slideInLeft}
      className="w-full md:w-1/2 flex justify-center"
    >
            <motion.div
  variants={floating}
  animate="animate"
  className="flex justify-start items-center z-10"
> <Image
        src={image3}
        alt="Traders illustration"
        className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-xl object-contain"
      /></motion.div>
     
    </motion.div>

    {/* Text Section */}
    <motion.div
      variants={slideInRight}
      className="w-full md:w-1/2 text-white text-sm sm:text-base leading-relaxed"
    >
      <motion.p variants={fadeIn}>
        Trades Global FX Funding was established in 2021 with the goal of
        revolutionizing the trader payout model. It was founded out of
        dissatisfaction with existing funding companies and a desire to adopt a
        more customer-centric approach.
      </motion.p>

      <motion.p variants={fadeIn} className="mt-4">
        As a premier trader funding company, Trades Global FX Funding
        outperforms other futures funding evaluation firms in terms of payouts.
        With a vast global community spanning over 150 countries and tens of
        thousands of members, Trades Global FX Funding, headquartered in
        Austin, Texas, specializes in funding evaluations for futures markets.
      </motion.p>
    </motion.div>
  </motion.div>
</motion.section>

<motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="bg-[#0B0D17] text-white py-24 px-6 md:px-16"
>
  {/* Heading */}
  <motion.div variants={fadeIn} className="text-center mb-16">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
      Trusted by Leading FX Partners
    </h2>

    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      We collaborate with globally recognized financial institutions and
      crypto exchanges to provide secure and reliable investment services.
    </p>
  </motion.div>

  {/* Sponsors */}
  <motion.div
    variants={staggerContainer}
    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center max-w-6xl mx-auto"
  >
    {sponsors.map((sponsor) => (
      <motion.div
        key={sponsor.id}
        variants={scaleIn}
        whileHover={{ scale: 1.08 }}
        className="flex flex-col items-center justify-center gap-3 opacity-80 hover:opacity-100 transition"
      >
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={80}
          height={80}
          className="object-contain grayscale hover:grayscale-0 transition"
        />

        <p className="text-sm text-gray-400">{sponsor.name}</p>
      </motion.div>
    ))}
  </motion.div>
</motion.section>

      <section className="">
        <Plans />
      </section>
      <motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="py-20 bg-[#0B0D17] text-white"
>
  <div className="max-w-5xl mx-auto px-6 sm:px-10">
    
    <motion.div
      variants={scaleIn}
      className="border rounded-3xl bg-[#0D1036]/80 border-[#0D1036] p-8 sm:p-12 md:p-16 text-center backdrop-blur-sm"
    >
      <motion.div
        variants={staggerContainer}
        className="space-y-8"
      >
        {/* Heading */}
        <motion.h1
          variants={slideUp}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
        >
          Expertise in Crypto
          <br className="hidden sm:block" />
          Excellence
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeIn}
          className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
        >
          Experience secure, stress-free investing where risk is mitigated
          and profit maximization is a reality.
        </motion.p>

        {/* Button */}
        <motion.button
          {...buttonMotion}
          variants={fadeIn}
          className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-transparent hover:text-white border border-white transition-all duration-300"
          onClick={() => router.push("/screens/auth/Signup")}
        >
          Invest Now
        </motion.button>
      </motion.div>

    </motion.div>
  </div>
</motion.section>

     <motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="bg-[#0B0D17] text-white"
>
  <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-20">

    {/* Section Header */}
    <motion.div
      variants={staggerContainer}
      className="text-center space-y-6 mb-12"
    >
      <motion.h1
        variants={slideUp}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
      >
        How it Works
      </motion.h1>

      <motion.p
        variants={fadeIn}
        className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
      >
        Getting started with{" "}
        <span className="text-white font-medium">Trades Global FX</span>
        is simple and straightforward. Follow these easy steps to begin
        your investment journey.
      </motion.p>
    </motion.div>

    {/* Accordion Section */}
    <motion.div
      variants={scaleIn}
      className="py-10"
    >
      <Accordion items={sample} multiple={false} />
    </motion.div>

  </div>
</motion.section>

      <section>
        <Feedback/>
      </section>
    
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#0B0D17] text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-4xl mx-auto text-center space-y-10">

        {/* Heading */}
        <motion.div variants={slideUp} className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Stay Updated
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Subscribe to our newsletter and get the latest updates on
            cryptocurrency markets, investment opportunities, and exclusive
            platform insights.
          </p>
        </motion.div>

        {/* Input */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-96 px-5 py-3 rounded-full bg-[#14182b] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-white transition"
          />

          <button
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-transparent hover:text-white border border-white transition-all duration-300"
          >
            Subscribe
          </button>
        </motion.div>

      </div>
    </motion.section>
   <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#0B0D17] text-gray-300 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <motion.div variants={fadeIn} className="space-y-4">
            <h2 className="text-white text-2xl font-semibold">
              Trades Global FX
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed">
              Secure crypto investment platform helping traders grow their
              portfolios with reliable strategies and expert guidance.
            </p>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeIn}>
            <h3 className="text-white font-semibold mb-4">Company</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/plans" className="hover:text-white transition">
                  Investment Plans
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeIn}>
            <h3 className="text-white font-semibold mb-4">Resources</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Security
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeIn}>
            <h3 className="text-white font-semibold mb-4">
              Connect with us
            </h3>

            <div className="flex gap-4 text-xl">
              <a className="hover:text-white transition">
                <FaTwitter />
              </a>

              <a className="hover:text-white transition">
                <FaTelegramPlane />
              </a>

              <a className="hover:text-white transition">
                <FaInstagram />
              </a>

              <a className="hover:text-white transition">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom */}
        <motion.div
          variants={fadeIn}
          className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500"
        >
          © {new Date().getFullYear()} Trades Global FX. All rights reserved.
        </motion.div>

      </div>
    </motion.footer>
    </div>
  );
}

export default Home;
