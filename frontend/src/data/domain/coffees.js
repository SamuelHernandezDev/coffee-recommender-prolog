//frontend\src\data\domain\coffees.js
export const coffees = [
    /* ------------------------------ CAFÉS CALIENTES ------------------------------ */
    {
      id: "espresso",
      name: "Espresso",
      category: "hot",
      level: "strong",
      season: "all",
      image: "src/assets/images/coffees/espresso.png",
      description:
        "Un shot de café concentrado con un sabor intenso y aroma profundo. Base de la mayoría de bebidas de cafetería.",
      ingredients: ["Espresso 30ml"]
    },
    {
      id: "americano",
      name: "Americano",
      category: "hot",
      level: "easy",
      season: "all",
      image: "src/assets/images/coffees/americano.png",
      description:
        "Espresso rebajado con agua caliente para un sabor suave y equilibrado. Perfecto para quienes prefieren algo ligero.",
      ingredients: ["Espresso", "Agua caliente"]
    },
    {
      id: "latte",
      name: "Latte",
      category: "hot",
      level: "easy",
      season: "all",
      image: "/src/assets/images/coffees/latte.png",
      description:
        "Café espresso combinado con abundante leche al vapor y una ligera capa de espuma. Cremoso y suave.",
      ingredients: ["Espresso", "Leche al vapor", "Espuma ligera"]
    },
    {
      id: "cappuccino",
      name: "Cappuccino",
      category: "hot",
      level: "medium",
      season: "all",
      image: "src/assets/images/coffees/cappuccino.png",
      description:
        "Equilibrio perfecto entre espresso, leche al vapor y espuma densa. Más intenso que un latte.",
      ingredients: ["Espresso", "Leche al vapor", "Espuma densa"]
    },
    {
      id: "mocha",
      name: "Mocha",
      category: "hot",
      level: "easy",
      season: "all",
      image: "src/assets/images/coffees/mocha.png",
      description:
        "Una mezcla deliciosa de espresso, chocolate y leche vaporizada. Dulce y perfecto para principiantes.",
      ingredients: ["Espresso", "Chocolate", "Leche al vapor", "Crema batida opcional"]
    },
    {
      id: "flatwhite",
      name: "Flat White",
      category: "hot",
      level: "medium",
      season: "all",
      image: "src/assets/images/coffees/flatwhite.png",
      description:
        "Dos shots de espresso con leche microespumada. Más fuerte que un latte pero más suave que un cappuccino.",
      ingredients: ["Doble Espresso", "Leche microespumada"]
    },
    {
      id: "macchiato",
      name: "Macchiato",
      category: "hot",
      level: "strong",
      season: "all",
      image: "src/assets/images/coffees/macchiato.png",
      description:
        "Espresso ‘manchado’ con una cucharada de espuma de leche. Intenso, para paladares fuertes.",
      ingredients: ["Espresso", "Espuma de leche"]
    },
  
    /* ------------------------------ CAFÉS FRÍOS ------------------------------ */
    {
      id: "iced_latte",
      name: "Iced Latte",
      category: "cold",
      level: "easy",
      season: "all",
      image: "src/assets/images/coffees/iced_latte.png",
      description:
        "Latte frío con hielo. Suave, refrescante y menos dulce que un frappuccino.",
      ingredients: ["Espresso", "Leche fría", "Hielo"]
    },
    {
      id: "iced_americano",
      name: "Iced Americano",
      category: "cold",
      level: "easy",
      season: "all",
      image: "src/assets/images/coffees/iced_americano.png",
      description:
        "Espresso rebajado con agua fría y servido con hielo. Ligero y muy fresco.",
      ingredients: ["Espresso", "Agua fría", "Hielo"]
    },
    {
      id: "cold_brew",
      name: "Cold Brew",
      category: "cold",
      level: "strong",
      season: "all",
      image: "src/assets/images/coffees/cold_brew.png",
      description:
        "Café extraído en frío por 12–24 horas. Sabor suave pero con alta cafeína.",
      ingredients: ["Café molido", "Agua fría", "12–24h de extracción"]
    },
    {
      id: "nitro_cold_brew",
      name: "Nitro Cold Brew",
      category: "cold",
      level: "strong",
      season: "all",
      image: "src/assets/images/coffees/cold_brew.png",
      description:
        "Cold brew infusionado con nitrógeno para una textura cremosa tipo cerveza stout. Sin azúcar.",
      ingredients: ["Cold Brew", "Nitrógeno"]
    },
  
    /* ------------------------------ FRAPPUCCINOS ------------------------------ */
    {
      id: "frappuccino_mocha",
      name: "Mocha Frappuccino",
      category: "frappuccino",
      level: "easy",
      season: "all",
      image: "src/assets/images/coffees/frappuccino_mocha.png",
      description:
        "Frappe de café con chocolate, hielo y crema batida. Dulce y cremoso.",
      ingredients: ["Café", "Chocolate", "Leche", "Hielo", "Crema batida"]
    },
    {
      id: "frappuccino_caramel",
      name: "Caramel Frappuccino",
      category: "frappuccino",
      level: "easy",
      season: "all",
      image: "src/assets/images/coffees/frappuccino_caramel.png",
      description:
        "Mezcla de café, leche, hielo y salsa de caramelo. Popular y perfecto para calor.",
      ingredients: ["Café", "Leche", "Hielo", "Salsa de caramelo", "Crema batida opcional"]
    },
    {
      id: "frappuccino_java_chip",
      name: "Java Chip Frappuccino",
      category: "frappuccino",
      level: "medium",
      season: "all",
      image: "src/assets/images/coffees/frappuccino_java_chip.png",
      description:
        "Café frappé con trozos de chocolate y crema batida. Uno de los más pedidos.",
      ingredients: ["Café", "Leche", "Hielo", "Chispas de chocolate", "Chocolate", "Crema batida"]
    },
  
    /* ------------------------------ SIN CAFÉ ------------------------------ */
    {
      id: "matcha_latte",
      name: "Matcha Latte",
      category: "other",
      level: "medium",
      season: "all",
      image: "src/assets/images/coffees/matcha_latte.png",
      description:
        "Té verde matcha con leche caliente. Terroso, energético y cremoso.",
      ingredients: ["Matcha", "Leche", "Agua caliente"]
    },
    {
      id: "chai_latte",
      name: "Chai Latte",
      category: "other",
      level: "easy",
      season: "all",
      image: "src/assets/images/coffees/chai_latte.png",
      description:
        "Mezcla de especias, té negro y leche. Dulce, cálido y aromático.",
      ingredients: ["Concentrado de chai", "Leche", "Especias"]
    },
  
    /* ------------------------------ TEMPORADA ------------------------------ */
  
    // 🎃 Halloween
    {
      id: "pumpkin_spice_latte",
      name: "Pumpkin Spice Latte",
      category: "seasonal",
      level: "easy",
      season: "halloween",
      image: "src/assets/images/coffees/pumpkin_spice_latte.png",
      description:
        "Latte con especias de calabaza, canela, jengibre y nata. Ícono del otoño.",
      ingredients: ["Espresso", "Leche", "Syrup pumpkin spice", "Canela", "Nata"]
    },
  
    // 🎄 Navidad
    {
      id: "peppermint_mocha",
      name: "Peppermint Mocha",
      category: "seasonal",
      level: "easy",
      season: "christmas",
      image: "src/assets/images/coffees/peppermint_mocha.png",
      description:
        "Mocha con menta y crema batida. Dulce, refrescante y navideño.",
      ingredients: ["Espresso", "Chocolate", "Syrup de menta", "Leche", "Crema batida"]
    },
    {
      id: "gingerbread_latte",
      name: "Gingerbread Latte",
      category: "seasonal",
      level: "medium",
      season: "christmas",
      image: "src/assets/images/coffees/gingerbread_latte.png",
      description:
        "Latte con jarabe de galleta de jengibre. Aromático y perfecto para invierno.",
      ingredients: ["Espresso", "Leche", "Jarabe gingerbread", "Especias"]
    },
  
    // 🌸 Primavera
    {
      id: "sakura_latte",
      name: "Sakura Latte",
      category: "seasonal",
      level: "easy",
      season: "spring",
      image: "src/assets/images/coffees/sakura_latte.png",
      description:
        "Latte con esencia floral de cerezo. Popular en Japón durante primavera.",
      ingredients: ["Espresso", "Leche", "Syrup de sakura"]
    }
  ];
  
  export default coffees;
  