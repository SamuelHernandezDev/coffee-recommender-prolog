//frontend\src\pages\Menu.jsx
import { useState } from 'react';
import CategorySelector from '../components/menu/CategorySelector';
import MenuGrid from '../components/menu/MenuGrid';
import MenuItemModal from '../components/menu/MenuItemModal';
import '../styles/globals/scroll.css';
import { buildNavMenu } from '../features/menu/navMenu.adapter';
import { motion, AnimatePresence } from 'framer-motion';

const { categories, items } = buildNavMenu();

export default function Menu() {
  const defaultCategory = categories[0]?.key;

  const [category, setCategory] = useState(defaultCategory);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="relative h-full bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-4">
      {/* CONTENT */}
      <div className="max-w-6xl mx-auto pt-16 sm:pt-30 pb-10 h-full flex flex-col">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold">Nuestra Carta</h1>
          <p className="text-gray-400 mt-1 mb-6">
            Explora nuestros cafés y frapés
          </p>
        </motion.div>

        {/* CATEGORIES */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <CategorySelector
            categories={categories}
            active={category}
            onChange={setCategory}
          />
        </motion.div>

        {/* GRID (scroll interno) */}
        <div className="flex-1 overflow-y-auto mt-6 pb-10 scroll-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <MenuGrid
                items={items[category] ?? []}
                onSelect={setSelectedItem}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <MenuItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
