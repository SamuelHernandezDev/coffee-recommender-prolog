//frontend\src\components\common\OptionButton.jsx
import { motion } from 'framer-motion';

export default function OptionButton({ label, onClick, icon: Icon, active }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        inline-flex items-center gap-2
        px-4 py-2
        rounded-full
        text-sm font-medium
        transition-all cursor-pointer select-none
        backdrop-blur-md
        border
        shadow-sm
        whitespace-nowrap

        ${
          active
            ? 'bg-emerald-400/20 border-emerald-300/40 text-emerald-200 shadow-md'
            : 'bg-white/10 border-white/10 text-gray-200 hover:bg-white/20 hover:border-white/20'
        }
      `}
    >
      {Icon && <Icon className="w-4 h-4 opacity-80" />}
      <span>{label}</span>
    </motion.button>
  );
}
