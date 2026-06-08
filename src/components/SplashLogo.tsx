import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashLogoProps {
  onComplete: () => void;
}

const SplashLogo: React.FC<SplashLogoProps> = ({ onComplete }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Show splash for 3.5 seconds, then transition out
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 800); // Allow fade-out animation to complete
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* EKG / ECG Hospital Pulse Meter Line Animation */}
          <div className="absolute inset-x-0 w-full flex items-center justify-center h-48 pointer-events-none opacity-40">
            <svg
              viewBox="0 0 800 200"
              className="w-full h-full text-emerald-500"
              preserveAspectRatio="none"
            >
              {/* EKG Line Path */}
              <motion.path
                d="M 0 100 L 150 100 L 170 85 L 190 115 L 210 100 L 250 100 L 270 30 L 290 170 L 310 100 L 350 100 L 370 85 L 390 115 L 410 100 L 500 100 L 520 20 L 540 180 L 560 100 L 620 100 L 640 85 L 660 115 L 680 100 L 800 100"
                fill="transparent"
                strokeWidth="3"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              {/* Secondary glowing line overlay */}
              <motion.path
                d="M 0 100 L 150 100 L 170 85 L 190 115 L 210 100 L 250 100 L 270 30 L 290 170 L 310 100 L 350 100 L 370 85 L 390 115 L 410 100 L 500 100 L 520 20 L 540 180 L 560 100 L 620 100 L 640 85 L 660 115 L 680 100 L 800 100"
                fill="transparent"
                strokeWidth="6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="blur-sm opacity-50"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>
          </div>

          {/* Logo Container (No pulse, steady entry) */}
          <div className="relative flex flex-col items-center justify-center z-10 px-6">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-[240px] md:max-w-[300px]"
            >
              <img
                src="/logo.jpeg"
                alt="Adhyayan Logo"
                className="w-full h-auto object-contain block bg-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashLogo;
