"use client";

import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import image1 from "@/app/assets/home/card/cardmg.png";
import image2 from "@/app/assets/home/card/cardimg2.png";

import {
  staggerContainer,
  slideInLeft,
  slideInRight,
  fadeIn,
  scaleIn,
  floating,
} from "@/lib/animation";

interface HomeCardProps {
  id: number;
  title: string;
  description: string;
  image: any;
  list: {
    label: string;
    desc?: string;
    icon?: React.ReactNode;
  }[];
  button?: {
    label: string;
    icon: React.ReactNode;
  };
}

const cardData: HomeCardProps[] = [
  {
    id: 1,
    title: "The Future of Finance",
    description:
      "User-friendly solutions to help investors of all levels achieve financial success.",
    image: image1,
    list: [
      { label: "Lowest fees in the market", icon: <FaCheck /> },
      { label: "Fast and secure transactions", icon: <FaCheck /> },
      { label: "256-bit secure encryption", icon: <FaCheck /> },
    ],
    button: { label: "Get Started", icon: <FaCheck /> },
  },
  {
    id: 2,
    title: "Expertise You Can Trust",
    description:
      "User-friendly solutions to help investors of all levels achieve financial success.",
    image: image2,
    list: [
      { label: "20+", desc: "Countries" },
      { label: "$4.75M", desc: "Transactions" },
      { label: "1500+", desc: "Active Users" },
      { label: "6+", desc: "Cryptos Supported" },
    ],
  },
];

function HomeCard() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-24 py-16 px-6 md:px-16 lg:px-24 bg-[#0F1014]"
    >
      {cardData.map((card, index) => (
        <motion.div
          key={card.id}
          variants={fadeIn}
          className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image Section */}
          <motion.div
            variants={index % 2 === 0 ? slideInLeft : slideInRight}
            className="bg-[#14182b] rounded-3xl flex justify-center py-12 px-4 shadow-lg"
          >
                  <motion.div
              variants={floating}
              animate="animate"
              className="flex justify-start items-center z-10"
            >  <Image
              src={card.image}
              alt={card.title}
              className="rounded-lg object-contain"
              width={400}
              height={300}
            /></motion.div>
          
          </motion.div>

          {/* Text Section */}
          <motion.div variants={fadeIn} className="text-white space-y-6">
            <h2 className="text-3xl lg:text-5xl font-semibold">
              {card.title}
            </h2>

            <p className="text-gray-400 text-base lg:text-lg">
              {card.description}
            </p>

            {/* Conditional List Section */}
            {card.id === 2 ? (
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 gap-6 border-t border-gray-700 pt-6"
              >
                {card.list.map((item, i) => (
                  <motion.div key={i} variants={scaleIn}>
                    <p className="text-2xl font-bold">{item.label}</p>
                    <p className="text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.ul variants={staggerContainer} className="space-y-3">
                {card.list.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={slideInLeft}
                    className="flex items-center gap-2 text-gray-200"
                  >
                    {item.icon && (
                      <span className="text-blue-500">{item.icon}</span>
                    )}
                    <span>{item.label}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}

            {/* Button */}
            {card.button && (
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                {card.button.icon}
                {card.button.label}
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default HomeCard;