// frontend\src\hooks\recommendation\useRecommendationEngine.js
import { useState } from 'react';

import { sendAssistantRequest } from '../../services/assistantApi';

import { formatRecommendationAnswers } from '../../utils/formatRecommendationAnswers';

export default function useRecommendationEngine() {
  const [recommendation, setRecommendation] = useState(null);

  const generateRecommendation = async (answers) => {
    try {
      const formattedAnswers = formatRecommendationAnswers(answers);

      console.log('FORMATTED ANSWERS:', formattedAnswers);

      const response = await sendAssistantRequest({
        mode: 'recommendation',
        answers: formattedAnswers,
      });

      if (response.type === 'recommendation' && response.recommendation) {
        setRecommendation(response.recommendation);
      }
    } catch (error) {
      console.error('Recommendation error:', error);
    }
  };

  const resetRecommendation = () => {
    setRecommendation(null);
  };

  return {
    recommendation,
    generateRecommendation,
    resetRecommendation,
  };
}
