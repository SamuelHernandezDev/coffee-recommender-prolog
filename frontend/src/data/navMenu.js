import { coffees } from "./coffees";

const CATEGORY_MAP = {
  hot: "hotCoffees",
  cold: "coldCoffees",
  frappuccino: "frappes",
  other: "nonCoffee",
  seasonal: "seasonal",
};

export const items = {
  hotCoffees: [],
  coldCoffees: [],
  frappes: [],
  nonCoffee: [],
  seasonal: [],
};

coffees.forEach((coffee) => {
  const key = CATEGORY_MAP[coffee.category];
  if (!key) return;

  items[key].push({
    id: coffee.id,
    name: coffee.name,
    img: coffee.image,
    desc: coffee.description,
    ingredients: coffee.ingredients,
  });
});

export const categories = [
  { key: "hotCoffees", label: "Cafés Calientes", color: "bg-amber-400" },
  { key: "coldCoffees", label: "Cafés Fríos", color: "bg-sky-300" },
  { key: "frappes", label: "Frapés", color: "bg-emerald-300" },
  { key: "nonCoffee", label: "Sin Café", color: "bg-purple-300" },
  { key: "seasonal", label: "De Temporada", color: "bg-rose-300" },
];
