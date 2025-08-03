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
        "Hola! 👋",
        "Soy el asistente de Sebas Sotelo, ¿en qué te puedo ayudar?",
      ],
      i18n: {
        en: {
          title: "Asistente Virtual",
          subtitle: "Pregúntame lo que necesites sobre Sebas.",
          footer: "",
          getStarted: "Nueva Conversación",
          inputPlaceholder: "Escribe tu pregunta...",
        },
      },
      enableStreaming: false,
    });
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          /* --- ZONA DE PERSONALIZACIÓN DE COLORES --- */
          --chat--color-primary: #000000;
          --chat--color-secondary: #000000;
          --chat--message--bot--background: #f3f4f6;
          --chat--message--bot--color: #111827;
          --chat--message--user--color: #ffffff;
          --chat--color-dark: #111827;
          --chat--color-white: #ffffff;
          --chat--color-light: #f9fafb;
          --chat--color-medium: #e5e7eb;

          /* --- AJUSTES DE DISEÑO MINIMALISTA --- */
          --chat--spacing: 16px;
          --chat--border-radius: 12px;
          --chat--window--width: 360px;
          --chat--window--height: 90vh;
          --chat--window--max-height: 640px;
          --chat--toggle--size: 50px;
          --chat--toggle--background: var(--chat--color-primary);
          --chat--toggle--color: var(--chat--color-white);
          --chat--header--background: var(--chat--color-white);
          --chat--header--color: var(--chat--color-dark);
          --chat--header--padding: 12px 16px;
          --chat--header--border-bottom: 1px solid var(--chat--color-medium);
          --chat--heading--font-size: 1rem;
          --chat--subtitle--font-size: 0.8rem;
          --chat--message--padding: 10px 14px;
          --chat--message--font-size: 0.9rem;
          --chat--message--border-radius: 18px;
          --chat--message--user--border: none;
          --chat--message--bot--border: none;
        }

        /* --- Pequeños ajustes para refinar el look --- */
        #n8n-chat-launcher {
          bottom: 20px !important;
          right: 20px !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
        }
        #n8n-chat-window {
          right: 20px !important;
          bottom: 80px !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1) !important;
        }
        .n8n-chat-message-bot {
          border-bottom-left-radius: 4px !important;
        }
        .n8n-chat-message-user {
          border-bottom-right-radius: 4px !important;
        }

        /* --- **CORRECCIÓN PARA MÓVILES** --- */
        @media (max-width: 600px) {
          #n8n-chat-window {
            /* Se convierte la ventana en un contenedor flexible */
            display: flex !important;
            flex-direction: column !important;

            /* Se mantiene el estilo de pantalla completa */
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

          /* El contenedor principal de los mensajes también se hace flexible */
          .n8n-chat-container {
            display: flex !important;
            flex-direction: column !important;
            height: 100% !important;
          }

          /* El área de mensajes ahora es flexible y se encoge/expande */
          .n8n-chat-messages {
            flex: 1 !important; /* **LA CLAVE ESTÁ AQUÍ** */
            overflow-y: auto !important;
          }

          /* El área de input se mantiene fija en la parte inferior */
          .n8n-chat-input-container {
            flex-shrink: 0; /* Evita que el área de input se encoja */
          }

          #n8n-chat-launcher {
            bottom: 15px !important;
            right: 15px !important;
          }
        }
      `}</style>
      <div id="n8n-chat"></div>
    </>
  );
};
