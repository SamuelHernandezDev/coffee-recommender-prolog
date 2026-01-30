export default function CategorySelector({ categories, active, onChange }) {
  return (
    <div className="
      flex gap-3 mb-5
      overflow-x-auto scroll-hidden
      justify-start sm:justify-center
      px-2
    ">
      {categories.map(({ key, label, color }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`
            shrink-0 px-3 py-2 rounded-full font-semibold transition
            ${active === key
              ? `${color} text-white`
              : "bg-white/20 text-gray-100"}
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
