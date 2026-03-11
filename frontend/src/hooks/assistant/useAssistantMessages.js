// frontend\src\hooks\assistant\useAssistantMessages.js
import { useState, useCallback } from "react";
import { createMessage } from "../../utils/chat/messageFactory";

const CHAT_TIMING = {
  typing: 1200,
  appearDelay: 80
};

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function useAssistantMessages() {
  const [messages, setMessages] = useState([]);

  // ------------------------
  // ASSISTANT MESSAGE
  // ------------------------
  const sendAssistantMessage = useCallback(async (text) => {

    const typingMessage = createMessage({
      role: "assistant",
      type: "typing"
    });

    const id = typingMessage.id;

    setMessages(prev => [...prev, typingMessage]);

    await delay(CHAT_TIMING.typing);

    setMessages(prev =>
      prev.map(msg =>
        msg.id === id
          ? {
              ...msg,
              type: "text",
              content: { text }
            }
          : msg
      )
    );

  }, []);

  // ------------------------
  // OPTIONS
  // ------------------------
  const sendOptions = useCallback((options) => {

    setMessages(prev => [
      ...prev,
      createMessage({
        role: "assistant",
        type: "options",
        content: { options }
      })
    ]);

  }, []);

  // ------------------------
  // USER MESSAGE
  // ------------------------
  const sendUserMessage = useCallback((text) => {

    setMessages(prev => [
      ...prev,
      createMessage({
        role: "user",
        type: "text",
        content: { text }
      })
    ]);

  }, []);

  // ------------------------
  // CLEAR TYPING
  // ------------------------
  const clearTyping = useCallback(() => {
    setMessages(prev => prev.filter(m => m.type !== "typing"));
  }, []);

  // ------------------------
  // CLEAR OPTIONS
  // ------------------------
  const clearOptions = useCallback(() => {
    setMessages(prev => prev.filter(m => m.type !== "options"));
  }, []);

  // ------------------------
  // RESET
  // ------------------------
  const resetMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    sendAssistantMessage,
    sendUserMessage,
    sendOptions,
    clearTyping,
    clearOptions,
    resetMessages,
    CHAT_TIMING
  };
}