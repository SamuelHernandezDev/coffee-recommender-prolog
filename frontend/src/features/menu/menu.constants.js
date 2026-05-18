// src/features/menu/menu.constants.js

import { Coffee, Snowflake, IceCream, Leaf, Sparkles } from 'lucide-react';

export const CATEGORY_MAP = {
  hot: 'hotCoffees',
  cold: 'coldCoffees',
  frappuccino: 'frappes',
  other: 'nonCoffee',
  seasonal: 'seasonal',
};

export const MENU_CATEGORIES = [
  {
    key: 'hotCoffees',
    label: 'Cafés Calientes',
    color: 'bg-amber-400',
    icon: Coffee,
  },
  {
    key: 'coldCoffees',
    label: 'Cafés Fríos',
    color: 'bg-sky-300',
    icon: Snowflake,
  },
  {
    key: 'frappes',
    label: 'Frapés',
    color: 'bg-emerald-300',
    icon: IceCream,
  },
  {
    key: 'nonCoffee',
    label: 'Sin Café',
    color: 'bg-purple-300',
    icon: Leaf,
  },
  {
    key: 'seasonal',
    label: 'De Temporada',
    color: 'bg-rose-300',
    icon: Sparkles,
  },
];
