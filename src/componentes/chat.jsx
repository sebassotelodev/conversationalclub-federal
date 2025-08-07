import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

export const Chat = () => {
  useEffect(() => {
  createChat({
    webhookUrl: `${process.env.NEXT_PUBLIC_KEYIA}`,
    webhookConfig: {
      method: "POST",
      headers: {},
    },
    target: "#n8n-chat",
    mode: "window",
    chatInputKey: "chatInput",
    chatSessionKey: "sessionId",
    loadPreviousSession: true,
    metadata: {},
    showWelcomeScreen: false,
    defaultLanguage: "en",
    initialMessages: [
      "Hello! 👋",
      "I'm Further's registration assistant for the Conversational Club.",
      "I'll help you secure your spot with Morgan Robinson!",
    ],
    i18n: {
      en: {
        title: "Conversational Club Registration",
        subtitle: "Let's get you registered with Morgan!",
        footer: "",
        getStarted: "Start Registration",
        inputPlaceholder: "Type your message here...",
      },
    },
    enableStreaming: false,
  });
}, []);


  return (
    <>
      <style jsx global>{`
        :root {
          /* --- COLORES FURTHER ACADEMY --- */
          --chat--color-primary: linear-gradient(135deg, #1e3a8a, #3b82f6);
          --chat--color-secondary: linear-gradient(135deg, #f59e0b, #f97316);
          --chat--color-accent: #f59e0b;
          --chat--message--bot--background: rgba(255, 255, 255, 0.95);
          --chat--message--bot--color: #1e293b;
          --chat--message--user--background: linear-gradient(135deg, #3b82f6, #1e40af);
          --chat--message--user--color: #ffffff;
          --chat--color-dark: #0f172a;
          --chat--color-white: #ffffff;
          --chat--color-light: rgba(255, 255, 255, 0.1);
          --chat--color-medium: rgba(255, 255, 255, 0.2);
          --chat--color-border: rgba(255, 255, 255, 0.15);

          /* --- DISEÑO GLASSMORPHISM --- */
          --chat--spacing: 20px;
          --chat--border-radius: 20px;
          --chat--window--width: 380px;
          --chat--window--height: 85vh;
          --chat--window--max-height: 600px;
          --chat--toggle--size: 60px;
          --chat--toggle--background: linear-gradient(135deg, #f59e0b, #f97316);
          --chat--toggle--color: var(--chat--color-white);
          --chat--header--background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          --chat--header--color: var(--chat--color-white);
          --chat--header--padding: 16px 20px;
          --chat--header--border-bottom: 1px solid var(--chat--color-border);
          --chat--heading--font-size: 1.1rem;
          --chat--subtitle--font-size: 0.85rem;
          --chat--message--padding: 12px 16px;
          --chat--message--font-size: 0.95rem;
          --chat--message--border-radius: 20px;
          --chat--message--user--border: none;
          --chat--message--bot--border: 1px solid rgba(59, 130, 246, 0.1);
        }

        /* --- VENTANA PRINCIPAL DEL CHAT --- */
        #n8n-chat-window {
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.95), rgba(59, 130, 246, 0.95)) !important;
          backdrop-filter: blur(20px) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
          border-radius: var(--chat--border-radius) !important;
          right: 20px !important;
          bottom: 80px !important;
        }

        /* --- BOTÓN LAUNCHER --- */
        #n8n-chat-launcher {
          background: linear-gradient(135deg, #f59e0b, #f97316) !important;
          border: 3px solid rgba(255, 255, 255, 0.3) !important;
          box-shadow: 0 10px 25px rgba(245, 158, 11, 0.4) !important;
          bottom: 20px !important;
          right: 20px !important;
          width: var(--chat--toggle--size) !important;
          height: var(--chat--toggle--size) !important;
          transition: all 0.3s ease !important;
        }

        #n8n-chat-launcher:hover {
          transform: scale(1.1) !important;
          box-shadow: 0 15px 35px rgba(245, 158, 11, 0.6) !important;
        }

        /* --- HEADER DEL CHAT --- */
        .n8n-chat-header {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
          padding: var(--chat--header--padding) !important;
          border-radius: var(--chat--border-radius) var(--chat--border-radius) 0 0 !important;
        }

        .n8n-chat-title {
          color: var(--chat--color-white) !important;
          font-weight: 700 !important;
          font-size: var(--chat--heading--font-size) !important;
        }

        .n8n-chat-subtitle {
          color: rgba(255, 255, 255, 0.8) !important;
          font-size: var(--chat--subtitle--font-size) !important;
        }

        /* --- ÁREA DE MENSAJES --- */
        .n8n-chat-messages {
          background: transparent !important;
          padding: 16px !important;
        }

        /* --- MENSAJES DEL BOT --- */
        .n8n-chat-message-bot {
          background: rgba(255, 255, 255, 0.95) !important;
          color: var(--chat--message--bot--color) !important;
          border: 1px solid rgba(59, 130, 246, 0.2) !important;
          border-radius: var(--chat--message--border-radius) !important;
          border-bottom-left-radius: 6px !important;
          padding: var(--chat--message--padding) !important;
          margin-bottom: 12px !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
          backdrop-filter: blur(10px) !important;
        }

        /* --- MENSAJES DEL USUARIO --- */
        .n8n-chat-message-user {
          background: linear-gradient(135deg, #3b82f6, #1e40af) !important;
          color: var(--chat--message--user--color) !important;
          border-radius: var(--chat--message--border-radius) !important;
          border-bottom-right-radius: 6px !important;
          padding: var(--chat--message--padding) !important;
          margin-bottom: 12px !important;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3) !important;
        }

        /* --- ÁREA DE INPUT --- */
        .n8n-chat-input-container {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
          padding: 16px 20px !important;
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(10px) !important;
          border-top: 1px solid rgba(255, 255, 255, 0.2) !important;
          border-radius: 0 0 var(--chat--border-radius) var(--chat--border-radius) !important;
        }

        #n8n-chat-input {
          flex-grow: 1 !important;
          background: rgba(255, 255, 255, 0.9) !important;
          border: 2px solid rgba(59, 130, 246, 0.3) !important;
          border-radius: 25px !important;
          padding: 12px 18px !important;
          color: var(--chat--color-dark) !important;
          font-size: 0.95rem !important;
          transition: all 0.3s ease !important;
        }

        #n8n-chat-input:focus {
          outline: none !important;
          border-color: #f59e0b !important;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2) !important;
          background: rgba(255, 255, 255, 1) !important;
        }

        #n8n-chat-input::placeholder {
          color: rgba(30, 41, 59, 0.6) !important;
        }

        /* --- BOTÓN DE ENVIAR --- */
        #n8n-chat-send-button {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 44px !important;
          height: 44px !important;
          border-radius: 50% !important;
          background: linear-gradient(135deg, #f59e0b, #f97316) !important;
          color: var(--chat--color-white) !important;
          border: none !important;
          flex-shrink: 0 !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4) !important;
        }

        #n8n-chat-send-button:hover:not([disabled]) {
          transform: scale(1.1) !important;
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6) !important;
        }

        #n8n-chat-send-button[disabled] {
          opacity: 0.5 !important;
          cursor: not-allowed !important;
          transform: none !important;
        }

        /* --- BOTÓN DE CERRAR --- */
        .n8n-chat-close-button {
          background: rgba(255, 255, 255, 0.2) !important;
          color: var(--chat--color-white) !important;
          border-radius: 50% !important;
          width: 32px !important;
          height: 32px !important;
          transition: all 0.3s ease !important;
        }

        .n8n-chat-close-button:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          transform: scale(1.1) !important;
        }

        /* --- SCROLLBAR PERSONALIZADA --- */
        .n8n-chat-messages::-webkit-scrollbar {
          width: 6px !important;
        }

        .n8n-chat-messages::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1) !important;
          border-radius: 3px !important;
        }

        .n8n-chat-messages::-webkit-scrollbar-thumb {
          background: rgba(245, 158, 11, 0.6) !important;
          border-radius: 3px !important;
        }

        .n8n-chat-messages::-webkit-scrollbar-thumb:hover {
          background: rgba(245, 158, 11, 0.8) !important;
        }

        /* --- ANIMACIONES --- */
        @keyframes messageSlideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .n8n-chat-message-bot,
        .n8n-chat-message-user {
          animation: messageSlideIn 0.3s ease-out !important;
        }

        /* --- RESPONSIVE PARA MÓVILES --- */
        @media (max-width: 600px) {
          #n8n-chat-window {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            height: 100% !important;
            max-height: 100% !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            border-radius: 0 !important;
            border: none !important;
          }

          .n8n-chat-container {
            display: flex !important;
            flex-direction: column !important;
            height: 100% !important;
          }

          .n8n-chat-messages {
            flex: 1 !important;
            overflow-y: auto !important;
            padding: 12px !important;
          }

          .n8n-chat-input-container {
            flex-shrink: 0 !important;
            padding: 12px !important;
            gap: 8px !important;
          }

          #n8n-chat-launcher {
            bottom: 15px !important;
            right: 15px !important;
            width: 55px !important;
            height: 55px !important;
          }

          #n8n-chat-input {
            padding: 10px 16px !important;
            font-size: 16px !important; /* Evita zoom en iOS */
          }

          #n8n-chat-send-button {
            width: 40px !important;
            height: 40px !important;
          }

          .n8n-chat-header {
            padding: 12px 16px !important;
          }
        }

        /* --- EFECTOS DE ENTRADA --- */
        #n8n-chat-window {
          animation: chatWindowSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        @keyframes chatWindowSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* --- INDICADOR DE TYPING (si aplica) --- */
        .n8n-chat-typing-indicator {
          background: rgba(255, 255, 255, 0.9) !important;
          border-radius: 20px !important;
          padding: 8px 16px !important;
          margin-bottom: 8px !important;
        }
      `}</style>
      <div id="n8n-chat"></div>
    </>
  );
};