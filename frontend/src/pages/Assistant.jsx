// frontend\src\pages\Assistant.jsx
import { useNavigate } from "react-router-dom";
import ChatBox from "../components/chatbox/ChatBox";
import RecommendationCard from "../components/chatbox/RecommendationCard";
import useAssistantController from "../hooks/assistant/useAssistantController";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals/background.css";

export default function Assistant() {

  const navigate = useNavigate();
  const controller = useAssistantController();

  const {
    messages,
    handleSelect,
    handleRestart,
    toggleCollapse,
    isChatCollapsed,
    recommendation,
    finished,
    level,
    resetFlow
  } = controller;

  const levelLabelMap = {
    beginner: "Principiante",
    intermediate: "Intermedio",
    expert: "Experto",
  };

  const levelLabel = level ? levelLabelMap[level] : null;

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
            onToggleCollapse={toggleCollapse}
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