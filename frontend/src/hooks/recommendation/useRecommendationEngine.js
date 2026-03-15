import { useState } from "react";
import { createRecommendationEngine } from "../../recommendation/RecommendationEngineFactory";

export default function useRecommendationEngine() {

  const [recommendation, setRecommendation] = useState(null);

  const engine = createRecommendationEngine("prolog");

  const generateRecommendation = async (answers) => {

    try {

      const result = await engine.generateRecommendation(answers);

      if (result && result.length > 0) {
        setRecommendation(result[0]);
      }

    } catch (error) {
      console.error("Recommendation error:", error);
    }

  };

  const resetRecommendation = () => {
    setRecommendation(null);
  };

  return {
    recommendation,
    generateRecommendation,
    resetRecommendation
  };

}