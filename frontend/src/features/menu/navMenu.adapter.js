// src/features/menu/navMenu.adapter.js

import coffees from "../../data/domain/coffees";
import { CATEGORY_MAP, MENU_CATEGORIES } from "./menu.constants";

export function buildNavMenu() {
  const items = {
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

  return {
    categories: MENU_CATEGORIES,
    items,
  };
}
