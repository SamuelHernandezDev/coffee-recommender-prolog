// frontend\src\utils\chat\messageFactory.js
export function createMessage({ role, type, content = {} }) {

    return {
      id: crypto.randomUUID(),
      role,
      type,
      content,
      metadata: {
        timestamp: Date.now()
      }
    };
  
  }