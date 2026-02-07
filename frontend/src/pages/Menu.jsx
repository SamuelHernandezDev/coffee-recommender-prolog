import { useState } from "react";
import CategorySelector from "../components/menu/CategorySelector";
import MenuGrid from "../components/menu/MenuGrid";
import MenuItemModal from "../components/menu/MenuItemModal";
import "../styles/globals/background.css";
import "../styles/globals/scroll.css"
import { buildNavMenu } from "../features/menu/navMenu.adapter";
import { motion } from "framer-motion";

const { categories, items } = buildNavMenu();

export default function Menu() {
  const defaultCategory = categories[0]?.key;

  const [category, setCategory] = useState(defaultCategory);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="relative h-[100dvh] text-center px-4">
      {/* Background */}
      <video
        src="/videos/Menu.mp4"
        className="fixed inset-0 w-full h-[100dvh] object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="bg-overlay" />
      <div className="bg-bottom-fade" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto pt-32 sm:pt-32 md:pt-40 h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-xl">
            Nuestra Carta
          </h1>
          <p className="text-gray-100 mt-1 mb-4">
            Explora nuestros cafés y frapés
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
        >
          <CategorySelector
            categories={categories}
            active={category}
            onChange={setCategory}
          />
        </motion.div>

        {/* MenuWrapper */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-hidden relative scroll-fade-vertical">
          <motion.div
            className="pb-16 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          >
             <MenuGrid
             items={items[category] ?? []}
             onSelect={setSelectedItem}
            />
          </motion.div>

        </div>
      </div>

      <MenuItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
