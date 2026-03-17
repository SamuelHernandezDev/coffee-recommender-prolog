// frontend\src\hooks\assistant\useAssistantController.js
import { useEffect, useState } from "react";
import { useUserAnswers } from "../../context/UserAnswersContext";

import useConversationEngine from "../conversation/useConversationEngine";
import useChatFlow from "../flow/useChatFlow";
import useAssistantMessages from "./useAssistantMessages";
import useAssistantConversationFlow from "./useAssistantConversationFlow";
import useRecommendationEngine from "../recommendation/useRecommendationEngine";

export default function useAssistantController() {

  const {
    currentQuestion,
    finished,
    submitAnswer,
    answers,
    mode,
    level
  } = useChatFlow();

  const {
    recommendation,
    generateRecommendation,
  } = useRecommendationEngine();

  const {
    restartQuestionnaire,
    resetFlow
  } = useUserAnswers();

  const {
    messages,
    sendAssistantMessage,
    sendUserMessage,
    sendOptions,
    clearTyping,
    clearOptions,
    resetMessages,
    CHAT_TIMING
  } = useAssistantMessages();

  const flow = useAssistantConversationFlow({
    sendAssistantMessage,
    sendOptions,
    clearTyping,
    timing: CHAT_TIMING
  });
  

  const { step, runStep, next, finish, reset } = useConversationEngine({ flow });

  const [isChatCollapsed, setIsChatCollapsed] = useState(false);

  // -----------------------
  // Conversation 
  // -----------------------

  useEffect(() => {

    if (finished) {
      finish();
      return;
    }

    if (!currentQuestion) return;
  
    runStep({
      currentQuestion
    });
  
  }, [step, currentQuestion, finished]);

  // -----------------------
  // Recommendation
  // -----------------------

  useEffect(() => {

    if (!finished) return;
    if (!answers || answers.length === 0) return;

    if (mode === "recommendation") {
      generateRecommendation(answers);
    }

  }, [finished, answers]);

  // -----------------------
  // Collapse chat
  // -----------------------

  useEffect(() => {

    if (finished) {
      setTimeout(() => setIsChatCollapsed(true), 150);
    }

  }, [finished]);

  // -----------------------
  // Handlers
  // -----------------------

  function handleSelect(value, label) {

    if (!currentQuestion) return;
  
    console.log("USER SELECTED:", {
      questionId: currentQuestion.id,
      value,
      label
    });
  
    clearOptions();
    sendUserMessage(label);
  
    submitAnswer({
      value,
      label
    });

    next();
  
    console.log("NEXT STEP TRIGGERED");  
  }

  function handleRestart() {

    restartQuestionnaire();

    resetMessages();

    flow.resetFlow();

    reset();

  }

  function toggleCollapse() {
    setIsChatCollapsed(prev => !prev);
  }

  return {
    messages,
    handleSelect,
    handleRestart,
    toggleCollapse,
    isChatCollapsed,
    recommendation,
    finished,
    level,
    resetFlow
  };
}