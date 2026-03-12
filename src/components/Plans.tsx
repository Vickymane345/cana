'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

import {
  fadeIn,
  slideUp,
  staggerContainer,
  scaleIn,
  cardHover,
  buttonMotion
} from '@/lib/animation';

interface Plan {
  id: number;
  title: string;
  price: string;
  list: {
    label: string;
    icon?: React.ReactNode;
  }[];
  btn: string;
}

const plansData: Plan[] = [
  {
    id: 1,
    title: 'Mining',
    price: '$1,000 - $19,999',
    list: [
      { label: '30% ROI', icon: <FaCheck /> },
      { label: '1 month', icon: <FaCheck /> },
      { label: 'Interest + Capital', icon: <FaCheck /> },
    ],
    btn: 'Invest Now',
  },
  {
    id: 2,
    title: 'Premium',
    price: '$20,000 - $99,999',
    list: [
      { label: '40% ROI', icon: <FaCheck /> },
      { label: '1 month', icon: <FaCheck /> },
      { label: 'Interest + Capital', icon: <FaCheck /> },
    ],
    btn: 'Invest Now',
  },
  {
    id: 3,
    title: 'Gold',
    price: '$100,000 - $1,000,000',
    list: [
      { label: '55% ROI', icon: <FaCheck /> },
      { label: '1 month', icon: <FaCheck /> },
      { label: 'Interest + Capital', icon: <FaCheck /> },
    ],
    btn: 'Invest Now',
  },
];

function Plans() {
  const router = useRouter();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#0B0D17] py-20 px-5 text-white"
    >
      {/* Heading */}
      <motion.div variants={slideUp} className="text-center mb-10">
        <motion.h1
          variants={fadeIn}
          className="text-4xl font-bold mb-3"
        >
          Investment Plans
        </motion.h1>

        <motion.p variants={fadeIn} className="text-gray-400">
          Experience secure, stress-free investing where risk is mitigated, and profit
          <br /> maximization is a reality.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {plansData.map((plan) => {
          const isPremium = plan.id === 2;

          return (
            <motion.div
              key={plan.id}
              variants={scaleIn}
              {...cardHover}
              className={`rounded-2xl p-8 shadow-lg relative transition-transform duration-300 ${
                isPremium
                  ? 'bg-gradient-to-b from-[#1a1a40] to-[#000000] border border-blue-700 scale-105'
                  : 'bg-[#141622]'
              }`}
            >
              <motion.h2
                variants={fadeIn}
                className="text-2xl font-semibold mb-4"
              >
                {plan.title}
              </motion.h2>

              <motion.p
                variants={fadeIn}
                className="text-xl font-medium mb-6"
              >
                {plan.price}
              </motion.p>

              <motion.ul
                variants={staggerContainer}
                className="space-y-4 mb-6"
              >
                {plan.list.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeIn}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="text-green-500">{item.icon}</span>
                    {item.label}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                {...buttonMotion}
                className={`w-full py-3 rounded-full font-medium transition ${
                  isPremium
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'border border-gray-500 hover:bg-gray-700'
                }`}
                onClick={() => router.push('/screens/auth/Signup')}
              >
                {plan.btn}
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Plans;