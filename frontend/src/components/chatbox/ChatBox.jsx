// frontend\src\components\chatbox\ChatBox.jsx
import React, { useRef, useState, useEffect } from "react";
import ChatMessage from "./chatMessage";
import { useUserAnswers } from "../../context/UserAnswersContext";
import useChatSound from "../../hooks/assistant/useChatSound";
import useChatAutoScroll from "../../hooks/assistant/useChatAutoScroll";
import "../../styles/features/chatbox/ChatBox.css";

export default function ChatBox({ messages = [], onSelect, collapse }) {
  const chatContainerRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { level } = useUserAnswers();

  const levelLabelMap = {
    beginner: "Principiante",
    intermediate: "Intermedio",
    expert: "Experto",
  };

  const levelLabel = level ? levelLabelMap[level] : null;

  useEffect(() => {
    if (collapse) {
      setTimeout(() => setIsCollapsed(true), 150);
    }
  }, [collapse]);

  useChatSound(messages);
  useChatAutoScroll(messages, chatContainerRef, isCollapsed);

  return (
    <div className="chatbox-wrapper">

      <div
        className="chatbox-header"
        onClick={() => setIsCollapsed(prev => !prev)}
      >
        <span className="chatbox-title">Coffe</span>

        {levelLabel && (
          <span className="chatbox-level">
            Nivel - {levelLabel}
          </span>
        )}

        <span
          className={`chatbox-chevron ${isCollapsed ? "collapsed" : ""}`}
        >
          ▾
        </span>
      </div>

      <div
        ref={chatContainerRef}
        className={`chatbox-container ${isCollapsed ? "collapsed" : ""}`}
      >
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
