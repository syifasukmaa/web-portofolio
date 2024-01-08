import { motion } from 'framer-motion';

function Button({ styling, click, children }) {
  return (
    <motion.button
      className={`${styling}`}
      onClick={click}
      whileHover={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
}

export default Button;
