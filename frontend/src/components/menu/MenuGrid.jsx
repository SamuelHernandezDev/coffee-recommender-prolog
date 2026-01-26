import MenuCard from "./MenuCard";


export default function MenuGrid({ items = [], onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 overflow-x-hidden sm:overflow-visible">
      {items.map((item) => (
        <MenuCard key={item.id} item={item} onSelect={onSelect} />
      ))}
    </div>
  );
}
