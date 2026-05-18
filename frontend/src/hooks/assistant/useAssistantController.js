// frontend\src\hooks\assistant\useAssistantController.js
import { useEffect, useState, useRef } from 'react';
import { introScript } from '../../scripts/conversation/introScript';
import { runScript } from '../../utils/chat/runScript';
import { useUserAnswers } from '../../context/UserAnswersContext';

import useKnowledgeEngine from '../conversation/knowledge/useKnowledgeEngine';
import useRecommenderEngine from '../conversation/recommender/useRecommenderEngine';

import useChatFlow from '../flow/useChatFlow';
import useAssistantMessages from './useAssistantMessages';
import useRecommendationEngine from '../recommendation/useRecommendationEngine';
import useAssistantModeManager from './useAssistantModeManager';

export default function useAssistantController() {
  // -----------------------
  // Intro
  // -----------------------
  const [introDone, setIntroDone] = useState(false);

  async function runInitialIntro() {
    if (introDone) return;

    await runScript({
      script: introScript,
      sendAssistantMessage,
      sendOptions,
      clearTyping,
      timing: CHAT_TIMING,
    });

    setIntroDone(true);
  }

  // -----------------------
  // Chat Flow (data)
  // -----------------------
  const { currentQuestion, finished, submitAnswer, answers, level } =
    useChatFlow();

  // -----------------------
  // Mode
  // -----------------------
  const { mode, setAssistantMode, resetMode } = useAssistantModeManager();

  // -----------------------
  // Recommendation result
  // -----------------------
  const { recommendation, generateRecommendation } = useRecommendationEngine();
  const [showRecommendationCard, setShowRecommendationCard] = useState(false);

  // -----------------------
  // User answers
  // -----------------------
  const { restartQuestionnaire, resetFlow } = useUserAnswers();

  // -----------------------
  // Chat UI
  // -----------------------
  const {
    messages,
    sendAssistantMessage,
    sendUserMessage,
    sendOptions,
    clearTyping,
    clearOptions,
    resetMessages,
    CHAT_TIMING,
  } = useAssistantMessages();

  // -----------------------
  // Engines
  // -----------------------
  const knowledge = useKnowledgeEngine({
    sendAssistantMessage,
    sendOptions,
    clearTyping,
    timing: CHAT_TIMING,
  });

  const recommender = useRecommenderEngine({
    sendAssistantMessage,
    sendOptions,
    clearTyping,
    timing: CHAT_TIMING,
    getCurrentQuestion: () => currentQuestion,
  });

  // -----------------------
  // UI State
  // -----------------------
  const [isChatCollapsed, setIsChatCollapsed] = useState(false);

  // -----------------------
  // Run Intro
  // -----------------------
  useEffect(() => {
    runInitialIntro();
  }, []);

  // -----------------------
  // Flujo Inicial
  // -----------------------
  const lastAssistantQuestionId = useRef(null);

  useEffect(() => {
    if (!introDone) return;
    if (!currentQuestion) return;

    const isAssistantQuestion = ['mode', 'level'].includes(currentQuestion.id);

    if (!isAssistantQuestion) return;

    // 🚨 EVITA DUPLICADOS
    if (lastAssistantQuestionId.current === currentQuestion.id) return;

    lastAssistantQuestionId.current = currentQuestion.id;

    const run = async () => {
      await sendAssistantMessage(currentQuestion.question);

      sendOptions(
        currentQuestion.options.map((op) => ({
          label: op.text,
          value: op.value,
        }))
      );
    };

    run();
  }, [introDone, currentQuestion]);

  // -----------------------
  // Run recommender flow
  // -----------------------
  useEffect(() => {
    if (mode !== 'recommendation') return;
    if (!currentQuestion) return;

    recommender.run();
  }, [mode, currentQuestion]);

  // -----------------------
  // Generate recommendation
  // -----------------------
  useEffect(() => {
    const runRecommendation = async () => {
      if (!finished || mode !== 'recommendation') return;
      if (!answers || answers.length === 0) return;

      await sendAssistantMessage('Estoy analizando tus preferencias ☕');

      generateRecommendation(answers);
    };

    runRecommendation();
  }, [finished, answers, mode]);

  // -----------------------
  // Collapse chat
  // -----------------------
  useEffect(() => {
    if (mode !== 'recommendation' || !recommendation) return;

    const runTransition = async () => {
      setIsChatCollapsed(true);

      await new Promise((resolve) => setTimeout(resolve, 450));

      setShowRecommendationCard(true);
    };

    runTransition();
  }, [recommendation, mode]);

  // -----------------------
  // Handlers
  // -----------------------

  function handleSelect(value, label) {
    if (!currentQuestion) return;

    const isModeQuestion = currentQuestion.id === 'mode';

    clearOptions();
    sendUserMessage(label);

    submitAnswer({
      value,
      label,
    });

    // -----------------------
    // MODE SELECTION
    // -----------------------
    if (isModeQuestion) {
      setAssistantMode(value);

      if (value === 'knowledge') {
        knowledge.runIntro();
        return;
      }

      if (value === 'recommendation') {
        recommender.runIntro();
        return;
      }
    }

    // -----------------------
    // CONTINUE RECOMMENDER FLOW
    // -----------------------

    if (!isModeQuestion && mode === 'recommendation') {
      recommender.next();
    }
  }

  function handleUserInput(text) {
    if (!text.trim()) return;

    sendUserMessage(text);

    if (mode === 'knowledge') {
      knowledge.ask(text);
    }
  }

  function handleRestart() {
    restartQuestionnaire();

    resetMessages();

    knowledge.reset();
    recommender.reset();

    resetMode();

    setShowRecommendationCard(false);

    setIsChatCollapsed(false);
  }

  function toggleCollapse() {
    setIsChatCollapsed((prev) => !prev);
  }

  return {
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
  };
}
