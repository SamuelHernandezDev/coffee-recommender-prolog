import React, { useRef } from "react";
import ChatMessage from "./chatMessage";
import useChatSound from "../../hooks/chat/useChatSound";
import useChatAutoScroll from "../../hooks/chat/useChatAutoScroll";
import "../../styles/features/chatbox/ChatBox.css";

export default function ChatBox({
  messages = [],
  onSelect,
  collapsed,
  onToggleCollapse,
  levelLabel
}) {

  const chatContainerRef = useRef(null);

  useChatSound(messages);
  useChatAutoScroll(messages, chatContainerRef, collapsed);

  return (
    <div className="chatbox-wrapper">

      <div
        className="chatbox-header"
        onClick={onToggleCollapse}
      >
        <span className="chatbox-title">Coffe</span>

        {levelLabel && (
          <span className="chatbox-level">
            Nivel - {levelLabel}
          </span>
        )}

        <span
          className={`chatbox-chevron ${collapsed ? "collapsed" : ""}`}
        >
          ▾
        </span>
      </div>

      <div
        ref={chatContainerRef}
        className={`chatbox-container ${collapsed ? "collapsed" : ""}`}
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