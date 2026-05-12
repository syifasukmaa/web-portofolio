import { motion } from 'framer-motion';

function FloatingBadge({ icon, label, className, delay, duration, distance }) {
  return (
    <motion.div
      className={`absolute ${className} flex items-center gap-2 
        bg-white dark:bg-dark700 
        shadow-lg shadow-blue/10
        border border-gray-100 dark:border-dark500
        rounded-xl px-3 py-2 z-20`}
      animate={{ y: [0, distance, 0] }}
      transition={{
        duration,
        ease: 'easeInOut',
        repeat: Infinity,
        delay,
      }}
    >
      {icon}
      <span className='text-sm font-medium text-gray-700 dark:text-ygPurple whitespace-nowrap'>{label}</span>
    </motion.div>
  );
}

export default FloatingBadge;
