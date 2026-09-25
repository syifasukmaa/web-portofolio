import { motion } from "framer-motion";
import iconStack from "../../data/iconStack.json";
import iconTools from "../../data/iconTools.json";

const icons = [...iconStack, ...iconTools];
const mask =
  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)";

export default function StackMarquee({ duration = 40 }) {
  const half = [...icons, ...icons];
  const items = [...half, ...half];

  return (
    <div
      className="w-full overflow-hidden"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <motion.div
        className="flex w-max bg-ygBlue border border-ygBlue dark:bg-dark200 dark:border-dark200 py-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {items.map((icon, i) => (
          <div
            key={`${icon.id}-${i}`}
            title={icon.text}
            className="shrink-0 mr-3 md:mr-4 p-2 md:p-2.5 rounded-xl border-2 shadow-md dark:bg-dark200 shadow-blue/10"
          >
            <img
              src={icon.img}
              alt={icon.alt}
              draggable={false}
              className="object-contain w-8 h-8 md:w-10 md:h-10"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
