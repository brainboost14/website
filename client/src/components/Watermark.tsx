import React from "react";
import { Logo } from "./Logo";
import { motion } from "framer-motion";

export default function Watermark() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-10 opacity-50 hover:opacity-80 transition-opacity duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ rotate: 10 }}
    >
      <Logo size={60} />
    </motion.div>
  );
}
