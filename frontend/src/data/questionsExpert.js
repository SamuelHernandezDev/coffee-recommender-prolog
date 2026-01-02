const questionsExpert = [
  {
    id: "e1",
    question: "¿Qué perfil de sabor prefieres?",
    options: [
      { text: "Ácido 🍋", value: "acidic" },
      { text: "Ahumado 🔥", value: "smoky" },
      { text: "Aterciopelado 🎩", value: "smooth" },
      { text: "Afrutado 🍒", value: "fruity" },
    ],
    type: "choice",
  },
  {
    id: "e2",
    question: "¿Qué método de extracción te gusta?",
    options: [
      { text: "Espresso", value: "espresso" },
      { text: "Prensa francesa", value: "french_press" },
      { text: "V60", value: "v60" },
      { text: "Aeropress", value: "aeropress" },
    ],
    type: "choice",
  },
  {
    id: "e3",
    question: "¿Qué nivel de cuerpo buscas?",
    options: [
      { text: "Ligero", value: "light_body" },
      { text: "Medio", value: "medium_body" },
      { text: "Alto", value: "full_body" },
    ],
    type: "choice",
  },
  {
    id: "e4",
    question: "¿Quieres que sea una bebida de temporada?",
    options: [
      { text: "Sí, temporada 🎃🎄", value: "seasonal" },
      { text: "No, algo estándar", value: "regular" },
    ],
    type: "choice",
  },

  // --- NUEVAS PREGUNTAS EXPERT PARA LLEGAR A 10 ---

  {
    id: "e5",
    question: "¿Qué acidez toleras?",
    options: [
      { text: "Baja", value: "low_acidity" },
      { text: "Media", value: "medium_acidity" },
      { text: "Alta", value: "high_acidity" },
    ],
    type: "choice",
  },
  {
    id: "e6",
    question: "¿Qué tostado prefieres?",
    options: [
      { text: "Claro", value: "light_roast" },
      { text: "Medio", value: "medium_roast" },
      { text: "Oscuro", value: "dark_roast" },
    ],
    type: "choice",
  },
  {
    id: "e7",
    question: "¿Qué post-gusto te gusta?",
    options: [
      { text: "Dulce", value: "aftertaste_sweet" },
      { text: "Cacao", value: "aftertaste_cocoa" },
      { text: "Seco", value: "aftertaste_dry" },
      { text: "Limpio", value: "aftertaste_clean" },
    ],
    type: "choice",
  },
  {
    id: "e8",
    question: "¿Qué complejidad buscas?",
    options: [
      { text: "Simple", value: "simple" },
      { text: "Complejo (múltiples notas)", value: "complex" },
    ],
    type: "choice",
  },
  {
    id: "e9",
    question: "¿Qué tan experimental quieres ser?",
    options: [
      { text: "Tradicional", value: "traditional" },
      { text: "Intermedio", value: "intermediate" },
      { text: "Experimental", value: "experimental" },
    ],
    type: "choice",
  },
  {
    id: "e10",
    question: "¿Quieres un café más cafeinado o más ligero?",
    options: [
      { text: "Mucha cafeína ⚡", value: "high_caffeine" },
      { text: "Normal 🙂", value: "normal_caffeine" },
      { text: "Ligero 🌿", value: "light_caffeine" },
    ],
    type: "choice",
  },
];

export default questionsExpert;
