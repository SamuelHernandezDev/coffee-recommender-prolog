// frontend\src\hooks\flow\useChatFlow.js
import { useMemo, useEffect } from "react";
import { useUserAnswers } from "../../context/UserAnswersContext";

import questionsAssistant from "../../data/assistant/questionsAssistant";
import questionsBeginner from "../../data/assistant/questionsBeginner";
import questionsIntermediate from "../../data/assistant/questionsIntermediate";
import questionsExpert from "../../data/assistant/questionsExpert";

export default function useChatFlow() {
  const {
    answers,
    addAnswer,
    currentQuestionIndex,
    goNextQuestion
  } = useUserAnswers();

  const allQuestions = useMemo(() => [
    ...questionsAssistant,
    ...questionsBeginner,
    ...questionsIntermediate,
    ...questionsExpert
  ], []);

  const questionList = useMemo(() => {

    return allQuestions.filter((q) => {

      if (!q.dependsOn) return true;

      const dependencyAnswer = answers.find(
        a => a.questionId === q.dependsOn.question
      );

      return dependencyAnswer?.value === q.dependsOn.value;

    });

  }, [answers, allQuestions]);

  useEffect(() => {
    if (currentQuestionIndex >= questionList.length) {
    }
  }, [questionList, currentQuestionIndex]);

  const safeIndex = Math.min(currentQuestionIndex, questionList.length - 1);
  const currentQuestion = questionList[safeIndex] || null;
  
  const finished = safeIndex >= questionList.length;

  const level = answers.find(a => a.questionId === "level")?.value;

  const submitAnswer = (userResponse) => {

    if (!currentQuestion) return;

    const finalAnswer = {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      ...userResponse,
    };

    addAnswer(finalAnswer);
    goNextQuestion();
  };

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: questionList.length,
    finished,
    answers,
    level,
    submitAnswer,
  };
}