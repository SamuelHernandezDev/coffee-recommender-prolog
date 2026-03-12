// frontend\src\pages\Assistant.jsx
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useUserAnswers } from "../context/UserAnswersContext";
import ChatBox from "../components/chatbox/ChatBox";
import RecommendationCard from "../components/chatbox/RecommendationCard";
import useConversationEngine from "../hooks/assistant/useConversationEngine";
import useChatFlow from "../hooks/useChatFlow";
import useAssistantMessages from "../hooks/assistant/useAssistantMessages";
import useAssistantConversationFlow from "../hooks/assistant/useAssistantConversationFlow";
import useRecommendationEngine from "../hooks/useRecommendationEngine";
import "../styles/globals/background.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Assistant() {
  const navigate = useNavigate();

  const { level } = useUserAnswers();

  const levelLabelMap = {
    beginner: "Principiante",
    intermediate: "Intermedio",
    expert: "Experto",
  };

  const levelLabel = level ? levelLabelMap[level] : null;

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
  
  const [isChatCollapsed, setIsChatCollapsed] = useState(false);

  const conversation = useConversationEngine({ flow });

  useEffect(() => {

    if (finished) {
      conversation.finish();
      return;
    }
  
    conversation.runStep({
      currentQuestion
    });
  
  }, [conversation.step, currentQuestion, finished]);

  useEffect(() => {

    if (!finished) return;
    if (!answers || answers.length === 0) return;
  
    generateRecommendation(answers);
  
  }, [finished, answers]);

  useEffect(() => {
    if (finished) {
      setTimeout(() => setIsChatCollapsed(true), 150);
    }
  }, [finished]);
    
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
  
  function handleExit() {
    resetFlow();
    navigate("/");
  }

  return (
    <div className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 pb-20">

      <video
        src="/videos/Barra.mp4"
        className="fixed inset-0 w-full h-[100dvh] object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="bg-overlay" />
      <div className="bg-bottom-fade" />

      <div className="relative z-10 w-full max-w-2xl mt-32 mb-10">

        <motion.div
          className="backdrop-blur-md bg-black/30 rounded-3xl p-4 border border-white/20 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
        <ChatBox
          messages={messages}
          onSelect={handleSelect}
          collapsed={isChatCollapsed}
          onToggleCollapse={() =>
            setIsChatCollapsed(prev => !prev)
          }
          levelLabel={levelLabel}
        />
        </motion.div>
        <AnimatePresence>
          {finished && recommendation && (
            <motion.div
              className="mt-10"
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <RecommendationCard
                coffee={recommendation}
                onRestart={handleRestart}
                onExit={handleExit}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
