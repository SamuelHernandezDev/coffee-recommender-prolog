import { useState } from "react";
import CategorySelector from "../components/menu/CategorySelector";
import MenuGrid from "../components/menu/MenuGrid";
import MenuItemModal from "../components/menu/MenuItemModal";
import "../styles/globals/background.css";
import "../styles/globals/scroll.css"
import { buildNavMenu } from "../features/menu/navMenu.adapter";

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
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-xl">
          Nuestra Carta
        </h1>
        <p className="text-gray-100 mt-1 mb-4">
          Explora nuestros cafés y frapés
        </p>

        <CategorySelector
          categories={categories}
          active={category}
          onChange={setCategory}
        />

        {/* MenuWrapper */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-hidden">
          <div className="pb-16">
            <MenuGrid
              items={items[category] ?? []}
              onSelect={setSelectedItem}
            />
          </div>
        </div>
      </div>

      <MenuItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
