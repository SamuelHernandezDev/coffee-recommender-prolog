// frontend\src\components\chatbox\ChatBox.jsx
import React, { useRef, useState } from 'react';
import ChatMessage from './chatMessage';
import useChatSound from '../../hooks/chat/useChatSound';
import useChatAutoScroll from '../../hooks/chat/useChatAutoScroll';
import '../../styles/features/chatbox/ChatBox.css';

export default function ChatBox({
  messages = [],
  onSelect,
  onSendText,
  allowTextInput,
  collapsed,
  onToggleCollapse,
  levelLabel,
}) {
  const chatContainerRef = useRef(null);
  const [input, setInput] = useState('');

  useChatSound(messages);
  useChatAutoScroll(messages, chatContainerRef, collapsed);

  function handleSend() {
    if (!input.trim()) return;

    onSendText(input);
    setInput('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="chatbox-wrapper">
      <div className="chatbox-header" onClick={onToggleCollapse}>
        <span className="chatbox-title">Coffe</span>

        {levelLabel && (
          <span className="chatbox-level">Nivel - {levelLabel}</span>
        )}

        <span className={`chatbox-chevron ${collapsed ? 'collapsed' : ''}`}>
          ▾
        </span>
      </div>

      <div
        ref={chatContainerRef}
        className={`chatbox-container ${collapsed ? 'collapsed' : ''}`}
      >
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} onSelect={onSelect} />
        ))}

        {allowTextInput && !collapsed && (
          <div className="chatbox-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu pregunta sobre café..."
              className="chatbox-input-field"
            />
            <button onClick={handleSend} className="chatbox-send-btn">
              Enviar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
