// frontend\src\hooks\assistant\useAssistantModeManager.js
import { useState, useCallback } from "react";

export default function useAssistantModeManager() {

  const [mode, setMode] = useState(null);

  const setAssistantMode = useCallback((newMode) => {
    console.log("MODE CHANGED:", newMode);
    setMode(newMode);
  }, []);

  const resetMode = useCallback(() => {
    setMode(null);
  }, []);

  return {
    mode,
    setAssistantMode,
    resetMode
  };
}