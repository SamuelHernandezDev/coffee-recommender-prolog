import { useEffect, useMemo, useState } from "react";
import { useUserAnswers } from "../context/UserAnswersContext";

// Importa tus bancos de preguntas
import questionsBeginner from "../data/assistant/questionsBeginner";
import questionsIntermediate from "../data/assistant/questionsIntermediate";
import questionsExpert from "../data/assistant/questionsExpert";

// Hook del backend Prolog
import usePrologApi from "./usePrologAPI";

export default function useChatFlow() {
  const {
    level,
    answers,
    addAnswer,
    currentQuestionIndex,
    goNextQuestion,
    resetFlow,
    isFinished,
  } = useUserAnswers();

  // Aquí se guardará la recomendación real de Prolog
  const [recommendation, setRecommendation] = useState(null);
  // Hook de Prolog
  const { sendAnswersToProlog } = usePrologApi();

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
  const shouldCollapseChat = finished || Boolean(recommendation);

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
  
  // Paso clave: cuando termine → enviar respuestas a Prolog
  useEffect(() => {
    if (!finished) return;
    if (answers.length === 0) return;

    const runProlog = async () => {
      try {
        const result = await sendAnswersToProlog(answers);

        if (result && result.length > 0) {
          setRecommendation(result[0]); // tomamos la primera recomendación
        }
      } catch (error) {
        console.error("Error al obtener recomendación de Prolog:", error);
      }
    };

    runProlog();
  }, [finished]);

  // Resetear todo
  const restartChatFlow = () => {
    resetFlow();
    setRecommendation(null);
  };

  return {
    level,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: questionList.length,
    finished,
    answers,
    submitAnswer,
    recommendation, 
    restartChatFlow,
    shouldCollapseChat,
  };
}
