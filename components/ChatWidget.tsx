"use client";

import { useState } from "react";
import { NeuButton } from "@/components/ui/neu-button";

/**
 * ChatWidget - Shell component for n8n integration
 * 
 * This is a placeholder component that will be connected to n8n
 * for AI-powered chat functionality. The integration will be done
 * through n8n webhooks.
 * 
 * TODO: Connect to n8n webhook endpoint
 * TODO: Implement actual chat functionality
 */
export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-[#E0E5EC] rounded-3xl shadow-neu-lg overflow-hidden">
          {/* Header */}
          <div className="bg-primary p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">smart_toy</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">QENAI Assistant</h4>
                  <p className="text-xs text-white/70">AI Powered</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="h-72 p-4 overflow-y-auto">
            {/* Welcome Message */}
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
              </div>
              <div className="bg-white/50 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                <p className="text-sm text-gray-700">
                  Hi! I&apos;m the QENAI assistant. I can help you learn about our AI automation services. 
                  How can I assist you today?
                </p>
              </div>
            </div>

            {/* Placeholder for n8n integration */}
            <div className="text-center py-8">
              <span className="material-symbols-outlined text-gray-300 text-4xl">chat_bubble</span>
              <p className="text-xs text-gray-400 mt-2">
                Chat functionality coming soon
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200/30">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-white/50 rounded-xl px-4 py-2 text-sm shadow-neu-pressed focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled
              />
              <button 
                className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-neu-button opacity-50 cursor-not-allowed"
                disabled
                aria-label="Send message"
              >
                <span className="material-symbols-outlined text-xl">send</span>
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2">
              n8n integration pending
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <span className="material-symbols-outlined text-2xl">
          {isOpen ? "close" : "chat"}
        </span>
      </button>
    </div>
  );
};

export default ChatWidget;
