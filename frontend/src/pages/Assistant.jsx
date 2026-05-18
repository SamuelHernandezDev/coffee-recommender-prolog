// frontend\src\pages\Assistant.jsx
import { useNavigate } from 'react-router-dom';
import ChatBox from '../components/chatbox/ChatBox';
import RecommendationCard from '../components/chatbox/RecommendationCard';
import useAssistantController from '../hooks/assistant/useAssistantController';
import { motion, AnimatePresence } from 'framer-motion';

export default function Assistant() {
  const navigate = useNavigate();
  const controller = useAssistantController();

  const {
    messages,
    handleSelect,
    handleUserInput,
    handleRestart,
    toggleCollapse,
    isChatCollapsed,
    recommendation,
    showRecommendationCard,
    finished,
    level,
    resetFlow,
    mode,
  } = controller;

  const levelLabelMap = {
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    expert: 'Experto',
  };

  const levelLabel = level ? levelLabelMap[level] : null;

  function handleExit() {
    resetFlow();
    navigate('/');
  }

  return (
    <div className="relative h-full bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-4">
      {/* CONTENT */}
      <div className="max-w-2xl mx-auto min-h-[80vh] flex flex-col justify-center pt-16 sm:pt-30">
        <motion.div
          className="backdrop-blur-md bg-white/5 rounded-3xl p-4 border border-white/10 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ChatBox
            messages={messages}
            onSelect={handleSelect}
            onSendText={handleUserInput}
            allowTextInput={mode === 'knowledge'}
            collapsed={isChatCollapsed}
            onToggleCollapse={toggleCollapse}
            levelLabel={levelLabel}
          />
        </motion.div>

        <AnimatePresence>
          {mode === 'recommendation' &&
            showRecommendationCard &&
            recommendation && (
              <motion.div
                className="mt-8"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12 }}
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
