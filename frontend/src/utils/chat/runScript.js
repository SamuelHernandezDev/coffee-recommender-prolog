function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  export async function runScript({
    script,
    sendAssistantMessage,
    sendOptions,
    clearTyping,
    timing
  }) {
  
    for (const step of script) {
  
      switch (step.type) {
  
        case "message": {
          clearTyping();
  
          await sendAssistantMessage(step.text);
  
          await delay(timing.appearDelay);
          break;
        }
  
        case "delay": {
          await delay(step.ms);
          break;
        }
  
        case "options": {
          sendOptions(step.options);
          break;
        }
  
        default:
          console.warn("Unknown script step:", step);
      }
  
    }
  
  }