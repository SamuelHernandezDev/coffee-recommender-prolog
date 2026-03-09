import { useEffect, useMemo, useState } from "react";
import { useUserAnswers } from "../context/UserAnswersContext";

// Importa tus bancos de preguntas
import questionsBeginner from "../data/assistant/questionsBeginner";
import questionsIntermediate from "../data/assistant/questionsIntermediate";
import questionsExpert from "../data/assistant/questionsExpert";

export default function useChatFlow() {
  const {
    level,
    answers,
    addAnswer,
    currentQuestionIndex,
    goNextQuestion,
    isFinished,
  } = useUserAnswers();

  // ✔ Seleccionar banco de preguntas según el nivel
  const questionList = useMemo(() => {
    switch (level) {
      case "beginner":
        return questionsBeginner;
      case "intermediate":
        return questionsIntermediate;
      case "expert":
        return questionsExpert;
      default:
        return [];
    }
  }, [level]);

  // Pregunta actual
  const currentQuestion = questionList[currentQuestionIndex] || null;

  // Saber si ya terminó
  const finished = isFinished(questionList.length);
  
  // Guardar respuesta y pasar a la siguiente
  const submitAnswer = (userResponse) => {
    const finalAnswer = {
      questionId: currentQuestion.id,      
      question: currentQuestion.text,
      ...userResponse,                    
    };
  
    addAnswer(finalAnswer);
    goNextQuestion(questionList.length);
  };
  
  return {
    level,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: questionList.length,
    finished,
    answers,
    submitAnswer,
  };
}
