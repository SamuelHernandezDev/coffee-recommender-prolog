// src/components/ChatBox.jsx
import React, { useEffect, useRef, useState } from "react";
import TypingIndicator from "./TypingIndicator";
import OptionButton from "./OptionButton";
import "../styles/ChatBox.css";

export default function ChatBox({ messages = [], onSelect, collapse }) {
  const previousMessages = useRef([]);
  const audioRef = useRef(
    typeof Audio !== "undefined" ? new Audio("/sounds/pop.mp3") : null
  );

  // Estado para manejar animación de colapso
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (collapse) {
      // Un pequeño delay para permitir que termine de renderizar
      setTimeout(() => setIsCollapsed(true), 150);
    } else {
      setIsCollapsed(false);
    }
  }, [collapse]);

  // sonido al cambiar mensaje
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

  return (
    <div className={`chatbox-container ${isCollapsed ? "collapsed" : ""}`}>
      {messages.map((msg, index) => {
        // ---- OPCIONES (sin bubble, limpio) ----
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

        // ---- mensaje normal ----
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
  );
}
