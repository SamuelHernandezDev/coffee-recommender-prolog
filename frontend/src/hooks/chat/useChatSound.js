// frontend\src\hooks\chat\useChatSound.js
import { useEffect, useRef } from "react";

export default function useChatSound(messages) {
  const audioRef = useRef(
    typeof Audio !== "undefined" ? new Audio("/sounds/pop.mp3") : null
  );

  const lastPlayedId = useRef(null);

  useEffect(() => {
    if (!messages.length) return;

    const assistantTexts = messages.filter(
      m => m.type === "text" && m.role === "assistant"
    );

    if (!assistantTexts.length) return;

    const latestAssistantMessage =
      assistantTexts[assistantTexts.length - 1];

    if (latestAssistantMessage.id !== lastPlayedId.current) {
      audioRef.current?.play().catch(() => {});
      lastPlayedId.current = latestAssistantMessage.id;
    }
  }, [messages]);
}
