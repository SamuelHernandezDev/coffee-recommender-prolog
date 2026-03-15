import RecommendationEngineInterface from "./RecommendationEngineInterface";

export default class AIRecommendationEngine extends RecommendationEngineInterface {

  async generateRecommendation(answers) {

    console.log("AI engine placeholder", answers);

    return [];

  }

}