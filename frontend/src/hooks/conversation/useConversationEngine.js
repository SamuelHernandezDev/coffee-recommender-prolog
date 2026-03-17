// frontend\src\hooks\conversation\useConversationEngine.js
import { useState, useCallback } from "react";

export default function useConversationEngine({ flow }) {

  const [step, setStep] = useState("intro");

  const runStep = useCallback(async (context) => {

    if (step === "intro") {
      console.log("RUNNING INTRO");
      await flow.runIntro();
      setStep("asking");
      return;
    }

    if (step === "asking") {
      if (context.currentQuestion) {
        console.log("ASKING QUESTION:", context.currentQuestion.id);
        await flow.runQuestion(context.currentQuestion);
        setStep("waiting");
      }
      return;
    }

    if (step === "finished") {
      console.log("FLOW FINISHED");
      return;
    }

  }, [step, flow]);

  const next = () => {
    console.log("ENGINE NEXT → asking");
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