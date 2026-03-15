import RecommendationEngineInterface from "./RecommendationEngineInterface";
import { formatPrologPayload } from "../../utils/formatPrologPayload";

export default class PrologRecommendationEngine extends RecommendationEngineInterface {

  constructor(api) {
    super();
    this.api = api;
  }

  async generateRecommendation(answers) {

    const predicates = formatPrologPayload(answers);

    const response = await fetch("http://localhost:3001/prolog/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ predicates })
    });

    if (!response.ok) {
      throw new Error("Prolog request failed");
    }

    const data = await response.json();

    return data.recommendations || [];

  }

}