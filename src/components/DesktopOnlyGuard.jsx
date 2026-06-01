import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DesktopOnlyGuard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Define mobile layout breakpoint matching your existing canvas rules
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // Activates on tablets and mobile screens
    };

    // Run on initial mounting execution loop
    checkScreenSize();

    // Listen for orientation or browser scaling changes
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <AnimatePresence>
      {isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-primary p-6 text-center select-none"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="max-w-md bg-tertiary border border-secondary/20 p-8 rounded-[24px] shadow-2xl flex flex-col items-center gap-5"
          >
            {/* Elegant Floating Laptop/Desktop Graphical Icon */}
            <div className="w-16 h-16 rounded-full bg-black-100 flex items-center justify-center text-secondary border border-secondary/10 animate-pulse text-2xl">
              💻
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-white text-[22px] font-bold tracking-wide">
                Desktop Experience Recommended
              </h2>
              <p className="text-secondary text-[14px] leading-relaxed max-w-sm">
                To experience the interactive 3D environments, physics-based rendering engines, and full spatial layouts at peak performance, please open this portfolio on a desktop or laptop computer.
              </p>
            </div>

            {/* Optional elegant subtle indicator link */}
            <div className="text-[11px] text-secondary/40 tracking-widest uppercase mt-2">
              richardpius.me
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesktopOnlyGuard;