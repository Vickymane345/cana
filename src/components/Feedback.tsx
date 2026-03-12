"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import image1 from "@/app/assets/feedback/man.png";
import image2 from "@/app/assets/feedback/woman.png";
import image3 from "@/app/assets/feedback/feed.png";
import { FaQuoteRight } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  staggerContainer,
  slideUp,
  fadeIn,
  scaleIn,
  cardHover,
  buttonMotion
} from "@/lib/animation";

interface FeedbackProps {
  id: number;
  image: StaticImport;
  icon: React.ReactNode;
  title: string;
  desc: string;
  name: string;
}

const feedbackData: FeedbackProps[] = [
  {
    id: 1,
    image: image1,
    icon: <FaQuoteRight />,
    title: "The perfect platform",
    desc: "Since joining Trades Global FX, my portfolio has grown significantly. The expert advice and 24/7 support really set them apart. Highly recommended for anyone serious about crypto investing.",
    name: "John Carter",
  },
  {
    id: 2,
    image: image2,
    icon: <FaQuoteRight />,
    title: "Reliable and transparent",
    desc: "I was new to cryptocurrency, but Trades Global FX made everything so simple. Their customer support team was incredibly helpful, and now I'm seeing consistent returns on my investments.",
    name: "Sophie Moore",
  },
  {
    id: 3,
    image: image3,
    icon: <FaQuoteRight />,
    title: "They exceeded my expectations",
    desc: "I started with the Starter Plan just to test the waters, and I was blown away by the returns. The platform is super easy to use, and I love being able to withdraw my earnings anytime without any issues.",
    name: "Mett Cannon",
  },
];

function Feedback() {
  const router = useRouter();

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#0B0D17] text-white py-20 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16"
      >
        <motion.h1
          variants={slideUp}
          className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-center md:text-left"
        >
          What our users say
        </motion.h1>

        <motion.button
          {...buttonMotion}
          variants={fadeIn}
          className="bg-white text-black rounded-full px-6 py-3 font-semibold transition hover:bg-gray-200"
          onClick={() => router.push("/screens/auth/Signup")}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Feedback Cards */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {feedbackData.map((item) => (
          <motion.div
            key={item.id}
            variants={scaleIn}
            {...cardHover}
            className="bg-[#0F1224] rounded-2xl p-8 flex flex-col justify-between transition-transform duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <motion.div variants={fadeIn}>
                <Image
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  src={item.image}
                  alt={item.name}
                />
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="text-5xl sm:text-6xl text-blue-400 opacity-70"
              >
                {item.icon}
              </motion.div>
            </div>

            <motion.div variants={staggerContainer} className="space-y-5">
              <motion.h3
                variants={slideUp}
                className="text-xl sm:text-2xl font-semibold"
              >
                {item.title}
              </motion.h3>

              <motion.p
                variants={fadeIn}
                className="text-gray-300 text-sm sm:text-base leading-relaxed"
              >
                {item.desc}
              </motion.p>

              <motion.p
                variants={fadeIn}
                className="text-blue-400 font-medium"
              >
                {item.name}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Feedback;