// frontend\src\hooks\assistant\useAssistantConversationFlow.js
import { useRef } from "react";
import { introScript } from "../../scripts/conversation/introScript";
import { runScript } from "../../utils/chat/runScript";

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
  
    await runScript({
      script: introScript,
      sendAssistantMessage,
      sendOptions,
      clearTyping,
      timing
    });
  
    introDoneRef.current = true;
  
  };

  const runQuestion = async (question) => {
    if (!question) return;
  
    if (!introDoneRef.current) return;
  
    if (lastQuestionIdRef.current === question.id) return;
    lastQuestionIdRef.current = question.id;
  
    await sendAssistantMessage(question.question);
  
    sendOptions(
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
