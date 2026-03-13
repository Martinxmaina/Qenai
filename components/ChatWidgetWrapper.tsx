"use client";

import dynamic from "next/dynamic";

// Dynamic import for ChatWidget to improve initial load performance
const ChatWidget = dynamic(() => import("@/components/ChatWidget"), {
  ssr: false,
  loading: () => null,
});

export const ChatWidgetWrapper = () => {
  return <ChatWidget />;
};

export default ChatWidgetWrapper;
