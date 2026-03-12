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
    answers
  } = useChatFlow();

  const {
    recommendation,
    generateRecommendation,
  } = useRecommendationEngine();

  const {
    restartQuestionnaire,
    resetFlow,
    level
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

  const conversation = useConversationEngine({ flow });

  const [isChatCollapsed, setIsChatCollapsed] = useState(false);

  // -----------------------
  // Conversation step
  // -----------------------

  useEffect(() => {

    if (finished) {
      conversation.finish();
      return;
    }

    conversation.runStep({
      currentQuestion
    });

  }, [conversation.step, currentQuestion, finished]);

  // -----------------------
  // Recommendation
  // -----------------------

  useEffect(() => {

    if (!finished) return;
    if (!answers || answers.length === 0) return;

    generateRecommendation(answers);

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

    clearOptions();

    sendUserMessage(label);

    conversation.next();

    submitAnswer({
      questionId: currentQuestion.id,
      questionText: currentQuestion.question,
      value,
      label
    });

  }

  function handleRestart() {

    restartQuestionnaire();

    resetMessages();

    flow.resetFlow();

    conversation.reset();

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