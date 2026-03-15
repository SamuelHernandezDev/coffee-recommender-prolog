export default class RecommendationEngineInterface {

    async generateRecommendation(answers) {
      throw new Error("generateRecommendation() must be implemented");
    }
  
  }