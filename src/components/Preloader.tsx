"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0F1014] overflow-hidden"
        >

          {/* Background glow pulse */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-72 h-72 bg-purple-600 blur-[120px] rounded-full"
          />

          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-24 h-24 border-4 border-purple-500/30 rounded-full"
          />

          {/* Inner spinner */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
          />

          {/* Brand text animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 text-xl font-semibold tracking-wide text-white"
          >
            Trades Global FX
          </motion.h1>

        </motion.div>
      )}
    </AnimatePresence>
  );
}