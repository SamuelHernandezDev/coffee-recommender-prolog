import { useState } from "react";
import usePrologApi from "./usePrologAPI";

export default function useRecommendationEngine() {

  const [recommendation, setRecommendation] = useState(null);

  const { sendAnswersToProlog } = usePrologApi();

  const generateRecommendation = async (answers) => {

    try {

      const result = await sendAnswersToProlog(answers);

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