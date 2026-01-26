import { motion, AnimatePresence } from "framer-motion";

export default function MenuItemModal({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-3xl max-w-lg w-full p-6 relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 font-bold text-2xl"
              onClick={onClose}
            >
              x
            </button>
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-800">{item.desc}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
