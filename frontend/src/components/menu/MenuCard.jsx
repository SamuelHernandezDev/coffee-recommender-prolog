import { motion } from "framer-motion";

export default function MenuCard({ item, onSelect }) {
  return (
    <motion.div
      className="
        bg-white/10 backdrop-blur-sm
        rounded-2xl
        p-3 sm:p-4
        cursor-pointer
        shadow-md
        border border-white/20
        transition-transform
        hover:scale-[1.03]
      "
      onClick={() => onSelect(item)}
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={item.img}
        alt={item.name}
        className="
          w-full
          h-28 sm:h-36 md:h-48
          object-cover
          rounded-lg
          mb-2
        "
      />
      <h2 className="text-sm sm:text-lg font-semibold text-white leading-tight">
        {item.name}
      </h2>
    </motion.div>
  );
}

