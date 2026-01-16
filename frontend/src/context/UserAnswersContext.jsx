// src/context/UserAnswersContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const UserAnswersContext = createContext();

export function UserAnswersProvider({ children }) {
  const [level, setLevel] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

// Agregar respuesta, reemplazando si ya existe
const addAnswer = (answer) => {
  setAnswers((prev) => {
    // si ya existe una respuesta para esta pregunta → reemplazar
    const filtered = prev.filter(a => a.questionId !== answer.questionId);
    return [...filtered, answer];
  });
};

  // goNextQuestion seguro (evita pasarte del total)
  const goNextQuestion = (totalQuestions) => {
    setCurrentQuestionIndex((prev) =>
      prev + 1 < totalQuestions ? prev + 1 : prev
    );
  };

  // Reiniciar cuestionario manteniendo el nivel
  const restartQuestionnaire = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
  };

  // Reiniciar flujo completo
  const resetFlow = () => {
    setLevel(null);
    setAnswers([]);
    setCurrentQuestionIndex(0);
  };

  // Saber si ya terminó correctamente
  const isFinished = (totalQuestions) => {
    return currentQuestionIndex >= totalQuestions - 1;
  };

  // Reset automático al cambiar nivel
  useEffect(() => {
    if (level !== null) {
      setAnswers([]);
      setCurrentQuestionIndex(0);
    }
  }, [level]);

  return (
    <UserAnswersContext.Provider
      value={{
        level,
        setLevel,
        answers,
        addAnswer,
        currentQuestionIndex,
        goNextQuestion,
        restartQuestionnaire,
        resetFlow,
        isFinished,
      }}
    >
      {children}
    </UserAnswersContext.Provider>
  );
}

export function useUserAnswers() {
  return useContext(UserAnswersContext);
}
