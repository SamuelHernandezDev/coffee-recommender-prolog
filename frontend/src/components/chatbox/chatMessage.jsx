import TypingIndicator from "./TypingIndicator";
import OptionButton from "../common/OptionButton";

export default function ChatMessage({ message, onSelect }) {

  if (message.type === "options") {
    return (
      <div className="w-full mt-3 flex flex-col gap-3 items-start">
        {message.options.map((opt, i) => (
          <OptionButton
            key={i}
            label={opt.label}
            onClick={() => onSelect(opt.value, opt.label)}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`chat-bubble ${
        message.role === "user" ? "user" : "assistant"
      }`}
    >
      {message.type === "typing"
        ? <TypingIndicator />
        : message.text}
    </div>
  );
}
