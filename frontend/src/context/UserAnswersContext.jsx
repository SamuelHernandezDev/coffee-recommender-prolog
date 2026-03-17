// frontend\src\context\UserAnswersContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const UserAnswersContext = createContext();

export function UserAnswersProvider({ children }) {
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

const addAnswer = (answer) => {
  setAnswers((prev) => {
    const filtered = prev.filter(a => a.questionId !== answer.questionId);
    return [...filtered, answer];
  });
};

  const goNextQuestion = () => {
    setCurrentQuestionIndex(prev => prev + 1);
  };

  const restartQuestionnaire = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
  };

  const resetFlow = restartQuestionnaire;

  return (
    <UserAnswersContext.Provider
      value={{
        answers,
        addAnswer,
        currentQuestionIndex,
        goNextQuestion,
        restartQuestionnaire,
        resetFlow,
      }}
    >
      {children}
    </UserAnswersContext.Provider>
  );
}

export function useUserAnswers() {
  return useContext(UserAnswersContext);
}
