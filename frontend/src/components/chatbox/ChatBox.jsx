// src/components/ChatBox.jsx
import React, { useEffect, useRef, useState } from "react";
import TypingIndicator from "./TypingIndicator";
import OptionButton from "../common/OptionButton";
import { useUserAnswers } from "../../context/UserAnswersContext";
import "../../styles/ChatBox.css";

export default function ChatBox({ messages = [], onSelect, collapse }) {
  const previousMessages = useRef([]);
  const chatContainerRef = useRef(null);
  const audioRef = useRef(
    typeof Audio !== "undefined" ? new Audio("/sounds/pop.mp3") : null
  );

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

  useEffect(() => {
    if (!messages.length) return;

    const lastIndex = messages.length - 1;
    const last = messages[lastIndex];
    const old = previousMessages.current[lastIndex];

    if (!old && last.sender === "assistant" && !last.typing) {
      audioRef.current?.play().catch(() => {});
    }
    if (old && old.typing && !last.typing && last.sender === "assistant") {
      audioRef.current?.play().catch(() => {});
    }

    previousMessages.current = messages;
  }, [messages]);

  useEffect(() => {
    if (isCollapsed) return;

    const container = chatContainerRef.current;
    if (!container) return;

    container.scrollTop = container.scrollHeight;
  }, [messages, isCollapsed]);

  return (
    <div className="chatbox-wrapper">
      
      {/* HEADER */}
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

      {/* BODY */}
      <div
        ref={chatContainerRef}
        className={`chatbox-container ${isCollapsed ? "collapsed" : ""}`}
      >
        {messages.map((msg, index) => {
          // ---- OPCIONES ----
          if (msg.options) {
            return (
              <div
                key={index}
                className="w-full mt-3 flex flex-col gap-3 items-start"
              >
                {msg.options.map((opt, i) => (
                  <OptionButton
                    key={i}
                    label={opt.label}
                    onClick={() => onSelect(opt.value, opt.label)}
                  />
                ))}
              </div>
            );
          }

          // ---- MENSAJE NORMAL ----
          return (
            <div
              key={index}
              className={`chat-bubble ${
                msg.sender === "user" ? "user" : "assistant"
              }`}
            >
              {msg.typing ? <TypingIndicator /> : msg.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
