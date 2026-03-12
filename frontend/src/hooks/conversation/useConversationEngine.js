// frontend\src\hooks\conversation\useConversationEngine.js
import { useState, useCallback } from "react";

export default function useConversationEngine({ flow }) {

  const [step, setStep] = useState("intro");

  const runStep = useCallback(async (context) => {

    if (step === "intro") {
      await flow.runIntro();
      setStep("asking");
      return;
    }

    if (step === "asking") {
      if (context.currentQuestion) {
        await flow.runQuestion(context.currentQuestion);
        setStep("waiting");
      }
      return;
    }

    if (step === "finished") {
      return;
    }

  }, [step, flow]);

  const next = () => {
    setStep("asking");
  };

  const finish = () => {
    setStep("finished");
  };

  const reset = () => {
    setStep("intro");
  };

  return {
    step,
    runStep,
    next,
    finish,
    reset
  };
}