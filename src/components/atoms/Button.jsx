import { motion } from 'framer-motion';

function Button({ styling, click, children }) {
  return (
    <motion.button
      className={`${styling}`}
      onClick={click}
      whileHover={{ scale: 0.8 }}
    >
      {children}
    </motion.button>
  );
}

export default Button;
