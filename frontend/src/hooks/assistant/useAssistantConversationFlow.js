// frontend\src\hooks\assistant\useAssistantConversationFlow.js
import { useRef } from "react";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function useAssistantConversationFlow({
  sendAssistantMessage,
  sendOptions,
  clearTyping,
  timing
}) {
  const introDoneRef = useRef(false);
  const lastQuestionIdRef = useRef(null);

  const runIntro = async () => {
    if (introDoneRef.current) return;

    const introMessages = [
      "Hola, soy Coffe ☕😽",
      "Te haré unas preguntas para encontrar tu café ideal.",
      "Vamos a ello 🔥",
    ];

    for (let message of introMessages) {
      clearTyping();
      await sendAssistantMessage(message);
      await delay(timing.appearDelay);
    }

    introDoneRef.current = true;
  };

  const runQuestion = async (question) => {
    if (!question) return;

    if (lastQuestionIdRef.current === question.id) return;
    lastQuestionIdRef.current = question.id;

    await sendAssistantMessage(question.question);

    await sendOptions(
      question.options.map(op => ({
        label: op.text,
        value: op.value
      }))
    );
  };

  const resetFlow = () => {
    introDoneRef.current = false;
    lastQuestionIdRef.current = null;
  };

  return {
    runIntro,
    runQuestion,
    resetFlow
  };
}
