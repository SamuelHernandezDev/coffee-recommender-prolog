import { motion } from "framer-motion";

export default function OptionButton({ label, onClick, icon: Icon, active }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        w-full flex items-center gap-3 p-4 rounded-3xl
        transition-all cursor-pointer select-none
        backdrop-blur-xl
        border 
        shadow-md
        ${active
          ? "bg-white/30 border-white/40 shadow-lg text-white"
          : "bg-white/10 border-white/20 text-white hover:bg-white/20"
        }
      `}
      style={{
        WebkitBackdropFilter: "blur(20px)",
        backdropFilter: "blur(20px)",
      }}
    >
      {Icon && <Icon className="w-6 h-6 opacity-90" />}
      <span className="text-lg font-medium tracking-wide drop-shadow-sm">
        {label}
      </span>
    </motion.button>
  );
}
