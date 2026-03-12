// frontend\src\utils\chat\calculateTypingDelay.js
export function calculateTypingDelay(text) {

    const base = 350;
    const perChar = 32;
    const max = 2200;
  
    const cleanText = text.replace(/[\u{1F600}-\u{1F64F}]/gu, "");
  
    const delay = base + cleanText.length * perChar;
  
    return Math.min(delay, max);
  
  }