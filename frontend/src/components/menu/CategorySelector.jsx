export default function CategorySelector({ categories, active, onChange }) {

    return (
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(({ key, label, color }) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              active === key
                ? `${color} text-white`
                : "bg-white/20 text-gray-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    );
  }
