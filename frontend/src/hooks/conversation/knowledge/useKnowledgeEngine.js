// frontend\src\hooks\conversation\knowledge\useKnowledgeEngine.js
import { useState } from 'react';
import { introScriptKnowledge } from '../../../scripts/conversation/introScriptKnowledge';
import { runScript } from '../../../utils/chat/runScript';

import { sendAssistantRequest } from '../../../services/assistantApi';

export default function useKnowledgeEngine({
  sendAssistantMessage,
  sendOptions,
  clearTyping,
  timing,
}) {
  const [isThinking, setIsThinking] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  const runIntro = async () => {
    if (introDone) return;

    await runScript({
      script: introScriptKnowledge,
      sendAssistantMessage,
      sendOptions,
      clearTyping,
      timing,
    });

    setIntroDone(true);
  };

  const ask = async (userText) => {
    try {
      setIsThinking(true);

      console.log('USER QUESTION:', userText);

      const response = await sendAssistantRequest({
        mode: 'knowledge',
        message: userText,
      });

      if (response.type === 'message') {
        await sendAssistantMessage(response.message);
      }
    } catch (err) {
      console.error('Knowledge error:', err);

      await sendAssistantMessage('Ocurrió un error al generar la respuesta ☕');
    } finally {
      setIsThinking(false);
    }
  };

  const reset = () => {
    setIntroDone(false);
  };

  return {
    runIntro,
    ask,
    reset,
    isThinking,
  };
}
