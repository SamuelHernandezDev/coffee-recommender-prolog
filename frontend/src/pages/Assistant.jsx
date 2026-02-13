// src/pages/Assistant.jsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserAnswers } from "../context/UserAnswersContext";
import ChatBox from "../components/chatbox/ChatBox";
import RecommendationCard from "../components/chatbox/RecommendationCard";
import useChatFlow from "../hooks/useChatFlow";
import "../styles/globals/background.css";
import { motion } from "framer-motion";

export default function Assistant() {
  const {
    currentQuestion,
    finished,
    submitAnswer,
    recommendation,
    answers
  } = useChatFlow();

  const { 
    restartQuestionnaire, 
    resetFlow 
  } = useUserAnswers();

  const handleRestartQuestionnaire = () => {
    restartQuestionnaire();   // reinicia lógica
    setMessages([]);          // limpia chat
    setInitialStep(0);        // reinicia intro
  };
  
  const handleExitToHome = () => {
    resetFlow();              // borra nivel + flujo
    navigate("/");            // vuelve al home
  };
  
  const navigate = useNavigate();

  const TYPING_TIME = 1200;
  const APPEAR_DELAY = 80;

  // mensajes reales del chat
  const [messages, setMessages] = useState([]);

  // secuencia inicial
  const [initialStep, setInitialStep] = useState(0);

  // definimos si el chat debe colapsar
  const shouldCollapseChat = finished === true;

  function clearTyping() {
    setMessages(prev => prev.filter(m => !m.typing));
  }

  // ---- simular mensaje del assistant ----
  function sendAssistantMessage(text) {
    // agregar typing
    setMessages(prev => [
      ...prev,
      { sender: "assistant", typing: true }
    ]);

    // convertir typing → texto
    setTimeout(() => {
      setMessages(prev => {
        const copy = [...prev];
        copy[copy.length - 1] = { sender: "assistant", text };
        return copy;
      });
    }, TYPING_TIME);
  }

  // ---- MENSAJES INICIALES ----
  useEffect(() => {
    clearTyping();

    if (initialStep === 0) sendAssistantMessage("Hola, soy Coffe ☕😽");
    if (initialStep === 1) sendAssistantMessage("Te haré unas preguntas para encontrar tu café ideal.");
    if (initialStep === 2) sendAssistantMessage("Vamos a ello 🔥");

    if (initialStep < 3) {
      const t = setTimeout(
        () => setInitialStep(n => n + 1),
        TYPING_TIME + APPEAR_DELAY
      );
      return () => clearTimeout(t);
    }
  }, [initialStep]);

  // ---- PREGUNTAS DEL CHAT FLOW ----
  useEffect(() => {
    // esperar que terminen los mensajes iniciales
    if (initialStep < 3) return;

    if (!finished && currentQuestion) {

      // mensaje de pregunta
      sendAssistantMessage(currentQuestion.question);

      // mensaje con opciones
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            sender: "assistant",
            options: currentQuestion.options.map(op => ({
              label: op.text,
              value: op.value
            }))
          }
        ]);
      }, TYPING_TIME + 50);
    }
  }, [currentQuestion, finished, initialStep]);

  // ---- USER SELECCIONA RESPUESTA ----
  function handleSelect(value,label) {
    // eliminar el bloque de opciones anterior
    setMessages(prev => prev.filter(m => !m.options));

    // agregar mensaje del usuario
    setMessages(prev => [
      ...prev,
      { sender: "user", text: label }
    ]);

    submitAnswer({
      question: currentQuestion.id,
      question: currentQuestion.question,
      value,
      label
    });
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

        {/* CHAT */}
        <motion.div
          className="backdrop-blur-md bg-black/30 rounded-3xl p-4 border border-white/20 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ChatBox messages={messages} onSelect={handleSelect} collapse={shouldCollapseChat} />
        </motion.div>

        {/* RECOMENDACIÓN FINAL */}
        {finished && recommendation && (
          <div className="mt-10">
            <RecommendationCard
              coffee={recommendation}
              onRestart={handleRestartQuestionnaire}
              onExit={handleExitToHome}
            />
          </div>
        )}
      </div>
    </div>
  );
}
