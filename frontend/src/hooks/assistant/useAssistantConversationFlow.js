// frontend\src\hooks\assistant\useAssistantConversationFlow.js
import { useRef } from "react";
import { introScript } from "../../scripts/conversation/introScript";
import { introScriptKnowledge } from "../../scripts/conversation/introScriptKnowledge";
import { introScriptRecommendation } from "../../scripts/conversation/introScriptRecommendation";

import { runScript } from "../../utils/chat/runScript";

export default function useAssistantConversationFlow({
  sendAssistantMessage,
  sendOptions,
  clearTyping,
  timing
}) {
  const introDoneRef = useRef(false);
  const modeIntroDoneRef = useRef(false);
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

  const runModeIntro = async (mode) => {

    if (modeIntroDoneRef.current) return;
  
    console.log("RUN MODE INTRO:", mode);
  
    let script = null;
  
    if (mode === "knowledge") {
      script = introScriptKnowledge;
    }
  
    if (mode === "recommendation") {
      script = introScriptRecommendation;
    }
  
    if (!script) return;
  
    await runScript({
      script,
      sendAssistantMessage,
      sendOptions,
      clearTyping,
      timing
    });
  
    modeIntroDoneRef.current = true;
  };

  const runQuestion = async (question) => {
    if (!question) { 
      return;
    }

    if (!introDoneRef.current) {
      return;
    }

    if (lastQuestionIdRef.current === question.id) {
      return;
    }

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
    modeIntroDoneRef.current = false;
    lastQuestionIdRef.current = null;
  };

  return {
    runIntro,
    runModeIntro,
    runQuestion,
    resetFlow
  };
}
