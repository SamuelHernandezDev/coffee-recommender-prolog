const questionsIntermediate = [
  {
    id: "i1",
    question: "¿Qué textura prefieres en tu café?",
    options: [
      { text: "Espumoso ☁️", value: "foamy" },
      { text: "Cremoso 🥛", value: "creamy" },
      { text: "Ligero 💧", value: "light" },
    ],
    type: "choice",
  },
  {
    id: "i2",
    question: "¿Qué intensidad de espresso prefieres?",
    options: [
      { text: "1 shot", value: "one_shot" },
      { text: "2 shots", value: "two_shots" },
      { text: "Extra fuerte (3+)", value: "three_shots" },
    ],
    type: "choice",
  },
  {
    id: "i3",
    question: "¿Qué ingrediente extra te gusta?",
    options: [
      { text: "Chocolate 🍫", value: "chocolate" },
      { text: "Caramelo 🍯", value: "caramel" },
      { text: "Nada extra", value: "none" },
    ],
    type: "choice",
  },
  {
    id: "i4",
    question: "¿Buscas algo más clásico o algo novedoso?",
    options: [
      { text: "Clásico 🕰️", value: "classic" },
      { text: "Moderno ✨", value: "modern" },
    ],
    type: "choice",
  },

  {
    id: "i5",
    question: "¿Qué temperatura EXACTA prefieres?",
    options: [
      { text: "Caliente normal 🔥", value: "hot_normal" },
      { text: "Muy caliente ♨️", value: "hot_extra" },
      { text: "Tibio 😊", value: "warm" },
      { text: "Frío ❄️", value: "cold" },
    ],
    type: "choice",
  },
  {
    id: "i6",
    question: "¿Qué nivel de espuma te gusta?",
    options: [
      { text: "Mucha espuma ☁️", value: "foam_high" },
      { text: "Espuma ligera 💨", value: "foam_light" },
      { text: "Sin espuma 💧", value: "no_foam" },
    ],
    type: "choice",
  },
  {
    id: "i7",
    question: "¿Qué tan equilibrado quieres tu café?",
    options: [
      { text: "Más café que leche", value: "more_coffee" },
      { text: "Balanceado", value: "balanced" },
      { text: "Más leche que café", value: "more_milk" },
    ],
    type: "choice",
  },
  {
    id: "i8",
    question: "¿Prefieres algo más artístico o simple?",
    options: [
      { text: "Latte art 🐱", value: "latte_art" },
      { text: "Tradicional ☕", value: "traditional" },
    ],
    type: "choice",
  },
];

export default questionsIntermediate;
