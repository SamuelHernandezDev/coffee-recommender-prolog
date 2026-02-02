import MenuCard from "./MenuCard";

export default function MenuGrid({ items = [], onSelect }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
      {items.map((item) => (
        <MenuCard key={item.id} item={item} onSelect={onSelect} />
      ))}
    </div>
  );
}

