//frontend\src\services\assistantApi.js
export async function sendAssistantRequest(payload) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/assistant`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    throw new Error('Assistant request failed');
  }

  return await response.json();
}
