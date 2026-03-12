// frontend/src/hooks/assistant/useChatActions.js
import { useCallback } from "react";
import { createMessage } from "../../utils/chat/messageFactory";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function useChatActions(store, timing) {

  const { addMessage, updateMessage, removeByType } = store;

  const typingDelay = timing.typing;

  // ------------------------
  // ASSISTANT MESSAGE
  // ------------------------
  const sendAssistantMessage = useCallback(async (text) => {

    const typingMessage = createMessage({
      role: "assistant",
      type: "typing"
    });

    addMessage(typingMessage);

    await delay(typingDelay);

    updateMessage(typingMessage.id, (msg) => ({
      ...msg,
      type: "text",
      content: { text }
    }));

  }, [addMessage, updateMessage, typingDelay]);

  // ------------------------
  // OPTIONS
  // ------------------------
  const sendOptions = useCallback((options) => {

    addMessage(
      createMessage({
        role: "assistant",
        type: "options",
        content: { options }
      })
    );

  }, [addMessage]);

  // ------------------------
  // USER MESSAGE
  // ------------------------
  const sendUserMessage = useCallback((text) => {

    addMessage(
      createMessage({
        role: "user",
        type: "text",
        content: { text }
      })
    );

  }, [addMessage]);

  // ------------------------
  // CLEAR TYPING
  // ------------------------
  const clearTyping = useCallback(() => {
    removeByType("typing");
  }, [removeByType]);

  // ------------------------
  // CLEAR OPTIONS
  // ------------------------
  const clearOptions = useCallback(() => {
    removeByType("options");
  }, [removeByType]);

  return {
    sendAssistantMessage,
    sendOptions,
    sendUserMessage,
    clearTyping,
    clearOptions
  };

}