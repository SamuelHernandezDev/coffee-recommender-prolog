import { motion } from "framer-motion";

export default function MenuCard({ item, onSelect }) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 cursor-pointer shadow-md border border-white/20 hover:scale-103 transition-transform"
      onClick={() => onSelect(item)}
      whileHover={{ scale: 1.03 }} 
    >
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-40 sm:h-48 md:h-48 object-cover rounded-xl mb-2"
      />
      <h2 className="text-lg sm:text-xl font-bold text-white">{item.name}</h2>
    </motion.div>
  );
}
