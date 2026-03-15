import PrologRecommendationEngine from "./engines/PrologRecommendationEngine";
import AIRecommendationEngine from "./engines/AIRecommendationEngine";

export function createRecommendationEngine(type = "prolog") {

  switch (type) {

    case "ai":
      return new AIRecommendationEngine();

    case "prolog":
    default:
      return new PrologRecommendationEngine();

  }

}