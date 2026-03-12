// frontend\src\hooks\assistant\useChatStore.js
import { useState, useCallback } from "react";

export default function useChatStore() {

  const [messages, setMessages] = useState([]);

  const addMessage = useCallback((message) => {
    setMessages(prev => [...prev, message]);
  }, []);

  const updateMessage = useCallback((id, updater) => {
    setMessages(prev =>
      prev.map(msg =>
        msg.id === id ? updater(msg) : msg
      )
    );
  }, []);

  const removeByType = useCallback((type) => {
    setMessages(prev =>
      prev.filter(msg => msg.type !== type)
    );
  }, []);

  const resetMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    addMessage,
    updateMessage,
    removeByType,
    resetMessages
  };

}