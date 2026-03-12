// frontend\src\hooks\assistant\useAssistantMessages.js
import useChatStore from "./useChatStore";
import useChatActions from "./useChatActions";

const CHAT_TIMING = Object.freeze({
  typing: 1200,
  appearDelay: 80
});

export default function useAssistantMessages() {

  const store = useChatStore();

  const actions = useChatActions(
    store,
    CHAT_TIMING
  );

  return {
    messages: store.messages,
    resetMessages: store.resetMessages,
    CHAT_TIMING,
    ...actions
  };

}