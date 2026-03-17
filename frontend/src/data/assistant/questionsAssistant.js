const questionsAssistant = [
  {
    id: "mode",
    question: "¿Cómo puedo ayudarte hoy?",
    options: [
      { text: "☕ Recibir una recomendación de café", value: "recommendation" },
      { text: "📚 Aprender sobre café", value: "knowledge" }
    ]
    // 👈 SIN dependsOn → siempre aparece
  },
  {
    id: "level",
    question: "¿Cuál es tu nivel de experiencia?",
    options: [
      { text: "☕ Principiante", value: "beginner" },
      { text: "🌿 Intermedio", value: "intermediate" },
      { text: "🔥 Experto", value: "expert" }
    ],
    dependsOn: {
      question: "mode",
      value: "recommendation"
    }
  }
];

export default questionsAssistant;