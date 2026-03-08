import { useEffect } from "react";

export default function useChatAutoScroll(
  messages,
  containerRef,
  isCollapsed
) {
  useEffect(() => {
    if (isCollapsed) return;

    const container = containerRef.current;
    if (!container) return;

    container.scrollTop = container.scrollHeight;
  }, [messages, isCollapsed, containerRef]);
}
