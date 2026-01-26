import { motion } from "framer-motion";
import coffees from "../../data/coffees";
import OptionButton from "../common/OptionButton";
import { RotateCcw, LogOut } from "lucide-react";

export default function RecommendationCard({
  coffee,
  onRestart,
  onExit,
}) {
  if (!coffee) return null;

  const coffeeId = typeof coffee === "string" ? coffee : coffee.id;
  const finalCoffee = coffees.find(c => c.id === coffeeId);

  if (!finalCoffee) {
    return <p className="text-white">No se encontró la bebida.</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20 shadow-xl text-white"
    >
      <h2 className="text-2xl font-bold mb-2 text-center">
        Tu café ideal es:
      </h2>

      <h3 className="text-3xl font-extrabold text-emerald-300 text-center mb-4">
        {finalCoffee.name}
      </h3>

      {finalCoffee.image && (
        <div className="flex justify-center mb-4">
          <img
            src={finalCoffee.image}
            alt={finalCoffee.name}
            className="w-40 h-40 object-contain drop-shadow-xl"
          />
        </div>
      )}

      <p className="text-white/90 text-center mb-4">
        {finalCoffee.description}
      </p>

      {finalCoffee.ingredients && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2">Ingredientes:</h4>
          <ul className="text-white/80 text-sm space-y-1">
            {finalCoffee.ingredients.map((ing, index) => (
              <li key={index}>• {ing}</li>
            ))}
          </ul>
        </div>
      )}

      {/* --- ACTIONS --- */}
      <div className="mt-6 flex flex-col gap-3">
        <OptionButton
          label="Restart questionnaire"
          icon={RotateCcw}
          onClick={onRestart}
        />

        <OptionButton
          label="Change knowledge level"
          icon={LogOut}
          onClick={onExit}
        />
      </div>
    </motion.div>
  );
}
