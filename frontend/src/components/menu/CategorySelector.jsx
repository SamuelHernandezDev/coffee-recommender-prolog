export default function CategorySelector({ category, onChange }) {
    return (
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-full font-semibold transition ${
            category === "cafes"
              ? "bg-amber-400 text-white"
              : "bg-white/20 text-gray-100"
          }`}
          onClick={() => onChange("cafes")}
        >
          Cafés
        </button>
  
        <button
          className={`px-6 py-2 rounded-full font-semibold transition ${
            category === "frapes"
              ? "bg-emerald-300 text-white"
              : "bg-white/20 text-gray-100"
          }`}
          onClick={() => onChange("frapes")}
        >
          Frapés
        </button>
      </div>
    );
  }
  