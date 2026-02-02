import MenuCard from "./MenuCard";

export default function MenuGrid({ items = [], onSelect }) {
  return (
    <div className="
      relative
      grid
      grid-cols-2 sm:grid-cols-2 md:grid-cols-3
      gap-4 sm:gap-6
      px-2 sm:px-3 md:px-3
      py-2
      overflow-visible
    ">
      {items.map((item) => (
        <MenuCard key={item.id} item={item} onSelect={onSelect} />
      ))}
    </div>
  );
}


