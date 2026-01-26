import { motion } from "framer-motion";

export default function MenuCard({ item, onSelect }) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 cursor-pointer shadow-md border border-white/20 hover:scale-105 transition-transform"
      onClick={() => onSelect(item)}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-48 object-cover rounded-xl mb-2"
      />
      <h2 className="text-xl font-bold text-white">{item.name}</h2>
    </motion.div>
  );
}
