import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategorySelector from "../components/menu/CategorySelector";
import MenuGrid from "../components/menu/MenuGrid";
import MenuItemModal from "../components/menu/MenuItemModal";
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
      <div className="relative z-10 max-w-6xl mx-auto pt-32 sm:pt-32 md:pt-40 pb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-xl">
          Nuestra Carta
        </h1>
        <p className="text-gray-100 mt-2 mb-8">Explora nuestros cafés y frapés</p>

      <CategorySelector
        category={category}
        onChange={setCategory}
      />
      <MenuGrid
        items={items[category]}
        onSelect={setSelectedItem}
      />
      </div>
      <MenuItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
