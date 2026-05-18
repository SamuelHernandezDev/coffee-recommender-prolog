//frontend\src\services\assistantApi.js
export async function sendAssistantRequest(payload) {
  const response = await fetch('http://localhost:3001/api/assistant', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Assistant request failed');
  }

  return await response.json();
}
