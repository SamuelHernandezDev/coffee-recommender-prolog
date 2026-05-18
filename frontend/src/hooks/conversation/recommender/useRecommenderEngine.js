// frontend\src\hooks\conversation\recommender\useRecommenderEngine.js
import { useState } from "react";
import { introScriptRecommendation } from "../../../scripts/conversation/introScriptRecommendation";
import { runScript } from "../../../utils/chat/runScript";

export default function useRecommenderEngine({
  sendAssistantMessage,
  sendOptions,
  clearTyping,
  timing,
  getCurrentQuestion
}) {

  const [step, setStep] = useState("intro");
  const [introDone, setIntroDone] = useState(false);
  const [lastQuestionId, setLastQuestionId] = useState(null);

  const runIntro = async () => {
    if (introDone) return;

    await runScript({
      script: introScriptRecommendation,
      sendAssistantMessage,
      sendOptions,
      clearTyping,
      timing
    });

    setIntroDone(true);
    setStep("asking");
  };

  const run = async () => {

    if (step !== "asking") return;

    const question = getCurrentQuestion();

    if (!question) return;

    if (lastQuestionId === question.id) return;

    setLastQuestionId(question.id);

    await sendAssistantMessage(question.question);

    sendOptions(
      question.options.map(op => ({
        label: op.text,
        value: op.value
      }))
    );

    setStep("waiting");
  };

  const next = () => {
    setStep("asking");
  };

  const reset = () => {
    setStep("intro");
    setIntroDone(false);
    setLastQuestionId(null);
  };

  return {
    runIntro,
    run,
    next,
    reset
  };
}