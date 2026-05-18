//frontend\src\components\menu\CategorySelector.jsx
export default function CategorySelector({ categories, active, onChange }) {
  return (
    <div
      className="
        flex gap-3 mb-5
        overflow-x-auto scroll-hidden
        justify-start sm:justify-center
        px-2
      "
    >
      {categories.map(({ key, label, color, icon: Icon }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`
            group shrink-0 flex items-center gap-2
            px-4 py-2 rounded-full font-semibold transition-all duration-200
            ${
              active === key
                ? `${color} text-white shadow-md`
                : 'bg-white/10 text-gray-200 hover:bg-white/20'
            }
          `}
        >
          {/* ICONO */}
          <Icon
            className={`
              w-4 h-4 transition
              ${
                active === key
                  ? 'scale-110'
                  : 'opacity-80 group-hover:scale-105'
              }
            `}
          />

          {/* TEXTO */}
          <span className="whitespace-nowrap">{label}</span>
        </button>
      ))}
    </div>
  );
}
