import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white dark:bg-dark200"
    >
      <p className="mb-4 font-jetbrains text-xl font-bold text-ygPurple dark:text-primary100">
        Syifa Sukma
      </p>

      <div className="w-56 h-1.5 bg-gray-200 dark:bg-dark400 rounded-full overflow-hidden">
        <motion.div
          className="h-full gradient-secondary"
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        />
      </div>

      <p className="mt-2 text-sm text-gray-400 dark:text-dark700">
        {Math.min(progress, 100)}%
      </p>
    </motion.div>
  );
};

export default LoadingScreen;
