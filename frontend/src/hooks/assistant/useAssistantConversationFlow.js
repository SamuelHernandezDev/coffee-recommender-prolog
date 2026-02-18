import { useEffect, useRef, useState } from "react";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function useAssistantConversationFlow({
  finished,
  currentQuestion,
  sendAssistantMessage,
  sendOptions,
  clearTyping,
  timing,
  resetTrigger
}) {

  const sessionRef = useRef(0);
  const lastQuestionId = useRef(null);

  const [introDone, setIntroDone] = useState(false);

  const introMessages = [
    "Hola, soy Coffe ☕😽",
    "Te haré unas preguntas para encontrar tu café ideal.",
    "Vamos a ello 🔥",
  ];

  // ------------------------
  // RESET MOTOR
  // ------------------------
  useEffect(() => {
    if (resetTrigger === 0) {
      sessionRef.current += 1;
      lastQuestionId.current = null;
      setIntroDone(false);
    }
  }, [resetTrigger]);

  // ------------------------
  // INTRO SECUENCIAL
  // ------------------------
  useEffect(() => {
    if (introDone) return;

    const runIntro = async () => {
      const currentSession = sessionRef.current;

      for (let message of introMessages) {
        if (currentSession !== sessionRef.current) return;

        clearTyping();
        await sendAssistantMessage(message);
        await delay(timing.appearDelay);
      }

      if (currentSession !== sessionRef.current) return;

      setIntroDone(true);
    };

    runIntro();
  }, [introDone, sendAssistantMessage, clearTyping, timing]);

  // ------------------------
  // QUESTIONS
  // ------------------------
  useEffect(() => {
    if (!introDone) return;
    if (finished) return;
    if (!currentQuestion) return;

    if (lastQuestionId.current === currentQuestion.id) return;

    lastQuestionId.current = currentQuestion.id;

    const runQuestion = async () => {
      const currentSession = sessionRef.current;

      await sendAssistantMessage(currentQuestion.question);

      if (currentSession !== sessionRef.current) return;

      await sendOptions(
        currentQuestion.options.map(op => ({
          label: op.text,
          value: op.value
        }))
      );
    };

    runQuestion();

  }, [
    introDone,
    currentQuestion,
    finished,
    sendAssistantMessage,
    sendOptions
  ]);
}
