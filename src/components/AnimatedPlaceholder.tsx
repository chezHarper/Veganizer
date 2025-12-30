import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface AnimatedPlaceholderProps {
  placeholders: string[];
  className?: string;
}
export function AnimatedPlaceholder({
  placeholders,
  className = ''
}: AnimatedPlaceholderProps) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [placeholders.length]);
  return <div className={`absolute inset-0 flex items-center pointer-events-none pl-6 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span key={index} initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 0.5,
        y: 0
      }} exit={{
        opacity: 0,
        y: -10
      }} transition={{
        duration: 0.3
      }} className="text-gray-500 text-lg truncate">
          Try: "{placeholders[index]}"
        </motion.span>
      </AnimatePresence>
    </div>;
}