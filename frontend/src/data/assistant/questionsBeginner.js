const questionsBeginner = [
  {
    id: "b1",
    question: "¿Qué tan fuerte te gusta el café?",
    options: [
      { text: "Suave ☁️", value: "mild" },
      { text: "Medio 🌿", value: "medium" },
      { text: "Fuerte 🔥", value: "strong" },
    ],
    type: "choice",
  },
  {
    id: "b2",
    question: "¿Prefieres bebidas calientes o frías?",
    options: [
      { text: "Calientes 🔥", value: "hot" },
      { text: "Frías ❄️", value: "cold" },
    ],
    type: "choice",
  },
  {
    id: "b3",
    question: "¿Qué tan dulce te gusta tu bebida?",
    options: [
      { text: "Nada dulce 🥲", value: "no_sugar" },
      { text: "Poco dulce 🙂", value: "light_sweet" },
      { text: "Dulce 😋", value: "sweet" },
    ],
    type: "choice",
  },
  {
    id: "b4",
    question: "¿Quieres algo con leche?",
    options: [
      { text: "Sí, con leche 🥛", value: "milk" },
      { text: "Sin leche ❌", value: "no_milk" },
      { text: "Leche vegetal 🌱", value: "plant_milk" },
    ],
    type: "choice",
  },
  {
    id: "b5",
    question: "¿Qué tan cremoso te gusta tu café?",
    options: [
      { text: "Muy cremoso 🥛", value: "very_creamy" },
      { text: "Normal 🙂", value: "normal_creamy" },
      { text: "Nada cremoso 💧", value: "no_creamy" },
    ],
    type: "choice",
  },
  {
    id: "b6",
    question: "¿Prefieres sabores extra?",
    options: [
      { text: "Chocolate 🍫", value: "chocolate" },
      { text: "Caramelo 🍯", value: "caramel" },
      { text: "Vainilla 🌼", value: "vanilla" },
      { text: "Sin sabores extra 🚫", value: "no_flavors" },
    ],
    type: "choice",
  },
  {
    id: "b7",
    question: "¿Qué tamaño prefieres?",
    options: [
      { text: "Pequeño (intenso)", value: "small" },
      { text: "Mediano", value: "medium_size" },
      { text: "Grande (menos fuerte)", value: "large" },
    ],
    type: "choice",
  },
];

export default questionsBeginner;
