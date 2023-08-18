import { motion } from 'framer-motion';
function Button({ title, styling, click }) {
  return (
    <motion.button
      className={styling}
      onClick={click}
      whileHover={{ scale: 0.8 }}
    >
      {title}
    </motion.button>
  );
}

export default Button;
