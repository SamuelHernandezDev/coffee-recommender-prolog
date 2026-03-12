// frontend\src\hooks\assistant\useAssistantMessages.js
import useChatStore from "../chat/useChatStore";
import useChatActions from "../chat/useChatActions";

const CHAT_TIMING = Object.freeze({
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