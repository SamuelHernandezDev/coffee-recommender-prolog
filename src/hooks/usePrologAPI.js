// src/hooks/usePrologApi.js
import { useState } from "react";
import { formatPrologPayload } from "../utils/formatPrologPayload";

export default function usePrologApi() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);

  /**
   * Envía respuestas a Prolog.
   */
  async function sendAnswersToProlog(answers) {
    try {
      setLoading(true);
      setError(null);

      // 🟦 LOG 1: Respuestas crudas que llegan desde el frontend
      console.log("📥 Respuestas originales que llegan a Prolog:", answers);

      // 1. Convertimos respuestas → predicados Prolog
      const predicates = formatPrologPayload(answers);

      // 🟪 LOG 2: Predicados generados para Prolog
      console.log("📤 Predicados enviados a Prolog:", predicates);

      // 2. Llamada al backend Prolog
      const response = await fetch("http://localhost:3001/prolog/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ predicates }),
      });

      if (!response.ok) {
        throw new Error("Error comunicándose con Prolog");
      }

      const data = await response.json();

      // 3. Guardamos recomendaciones
      setRecommendations(data.recommendations || []);

      return data.recommendations || [];
    } catch (err) {
      console.error("❌ Error Prolog:", err);
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    recommendations,
    error,
    sendAnswersToProlog,
  };
}
