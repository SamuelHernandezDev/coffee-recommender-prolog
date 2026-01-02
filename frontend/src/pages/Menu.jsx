import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/background.css";

const items = {
  cafes: [ 
    { id: 1, name: "Espresso", img: "/images/espresso.png", desc: "Café concentrado, fuerte y aromático." },
    { id: 2, name: "Latte", img: "/images/latte.png", desc: "Café con leche y espuma cremosa." },
    { id: 3, name: "Capuchino", img: "/images/cappuccino-coffee.png", desc: "Café con leche y espuma cremosa." },

    
  ],
  frapes: [
    { id: 1, name: "Mocha Blanco", img: "/images/frape_vainilla.png", desc: "Bebida fría con leche, hielo y vainilla." },
    { id: 2, name: "Espresso", img: "/images/frape_chocolate.png", desc: "Delicioso chocolate frío y cremoso." },
    { id: 3, name: "Mocha", img: "/images/frape_chocolate.png", desc: "Delicioso chocolate frío y cremoso." },
    { id: 4, name: "Cafe", img: "/images/frape_vainilla.png", desc: "Bebida fría con leche, hielo y vainilla." },
    { id: 5, name: "Caramel", img: "/images/frape_chocolate.png", desc: "Delicioso chocolate frío y cremoso." },
  ],
};

export default function Menu() {
  const [category, setCategory] = useState("cafes");
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="relative min-h-[100dvh] text-center px-4 pb-16 md:pb-0">
      {/* Video de fondo */}
      <video 
        src="/videos/Menu.mp4"
        className="fixed inset-0 w-full h-[100dvh] object-cover"
        autoPlay muted loop playsInline
      />
      <div className="bg-overlay" />
      <div className="bg-bottom-fade" />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-xl">
          Nuestra Carta
        </h1>
        <p className="text-gray-100 mt-2 mb-8">Explora nuestros cafés y frapés</p>

        {/* Selector de categoría */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${
              category === "cafes" ? "bg-amber-400 text-white" : "bg-white/20 text-gray-100"
            }`}
            onClick={() => setCategory("cafes")}
          >
            Cafés
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${
              category === "frapes" ? "bg-emerald-300 text-white" : "bg-white/20 text-gray-100"
            }`}
            onClick={() => setCategory("frapes")}
          >
            Frapés
          </button>
        </div>

        {/* Panel de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-y-auto">
          {items[category].map((item) => (
            <motion.div
              key={item.id}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 cursor-pointer shadow-md border border-white/20 hover:scale-105 transition-transform"
              onClick={() => setSelectedItem(item)}
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-xl mb-2" />
              <h2 className="text-xl font-bold text-white">{item.name}</h2>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detalle expandido */}
      <AnimatePresence>
        {selectedItem && (
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
                onClick={() => setSelectedItem(null)}
              >
                ×
              </button>
              <img src={selectedItem.img} alt={selectedItem.name} className="w-full h-64 object-cover rounded-xl mb-4" />
              <h2 className="text-2xl font-bold mb-2">{selectedItem.name}</h2>
              <p className="text-gray-800">{selectedItem.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
