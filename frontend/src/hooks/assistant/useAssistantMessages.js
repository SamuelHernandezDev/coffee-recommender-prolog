import { useState, useCallback } from "react";

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
    const id = crypto.randomUUID();

    setMessages(prev => [
      ...prev,
      { id, sender: "assistant", typing: true }
    ]);

    await delay(CHAT_TIMING.typing);

    setMessages(prev =>
      prev.map(msg =>
        msg.id === id
          ? { id, sender: "assistant", text }
          : msg
      )
    );
  }, []);

  // ------------------------
  // OPTIONS
  // ------------------------
  const sendOptions = useCallback(async (options) => {

    setMessages(prev => [
      ...prev,
      { type: "options", options }
    ]);
  }, []);

  // ------------------------
  // USER MESSAGE
  // ------------------------
  const sendUserMessage = useCallback((text) => {
    setMessages(prev => [...prev, { sender: "user", text }]);
  }, []);

  // ------------------------
  // CLEAR TYPING
  // ------------------------
  const clearTyping = useCallback(() => {
    setMessages(prev => prev.filter(m => !m.typing));
  }, []);

  // ------------------------
  // CLEAR OPTIONS
  // ------------------------
  const clearOptions = useCallback(() => {
    setMessages(prev => prev.filter(m => !m.options));
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
