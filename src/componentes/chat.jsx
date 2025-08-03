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
          /* --- ZONA DE PERSONALIZACIÓN DE COLORES ---
            Aquí puedes cambiar los colores principales para que coincidan con tu marca.
            He dejado una paleta minimalista en blanco y negro como base.
          */

          /* Color principal para elementos interactivos (botón de inicio) */
          --chat--color-primary: #000000;

          /* Color de fondo para los mensajes del USUARIO */
          --chat--color-secondary: #000000;

          /* Color de fondo para los mensajes del BOT */
          --chat--message--bot--background: #f3f4f6; /* Un gris muy claro */

          /* Color del texto del BOT */
          --chat--message--bot--color: #111827; /* Negro suave */

          /* Color del texto del USUARIO */
          --chat--message--user--color: #ffffff; /* Blanco */

          /* Color del texto principal y encabezados */
          --chat--color-dark: #111827;

          /* Color de fondos generales y bordes */
          --chat--color-white: #ffffff;
          --chat--color-light: #f9fafb; /* Fondo del área de mensajes */
          --chat--color-medium: #e5e7eb; /* Bordes */

          /* --- AJUSTES DE DISEÑO MINIMALISTA (Generalmente no necesitas tocar esto) --- */

          /* Tamaños y Espaciado */
          --chat--spacing: 16px;
          --chat--border-radius: 12px;
          --chat--window--width: 360px;
          --chat--window--height: 90vh; /* Usa altura relativa para adaptarse mejor */
          --chat--window--max-height: 640px; /* Un máximo para pantallas grandes */

          /* Botón de Inicio */
          --chat--toggle--size: 50px;
          --chat--toggle--background: var(--chat--color-primary);
          --chat--toggle--color: var(--chat--color-white);

          /* Encabezado */
          --chat--header--background: var(--chat--color-white);
          --chat--header--color: var(--chat--color-dark);
          --chat--header--padding: 12px 16px;
          --chat--header--border-bottom: 1px solid var(--chat--color-medium);
          --chat--heading--font-size: 1rem;
          --chat--subtitle--font-size: 0.8rem;

          /* Mensajes */
          --chat--message--padding: 10px 14px;
          --chat--message--font-size: 0.9rem;
          --chat--message--border-radius: 18px;
          --chat--message--user--border: none;
          --chat--message--bot--border: none;
        }

        /* --- Pequeños ajustes para refinar el look --- */

        /* Posicionamiento y sombra */
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

        /* Estilo de "cola" en las burbujas de chat */
        .n8n-chat-message-bot {
          border-bottom-left-radius: 4px !important;
        }

        .n8n-chat-message-user {
          border-bottom-right-radius: 4px !important;
        }

        /* --- Diseño Adaptable (Responsive) --- */
        @media (max-width: 600px) {
          #n8n-chat-window {
            /* En móviles, el chat ocupa toda la pantalla para una mejor experiencia */
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

          #n8n-chat-launcher {
            bottom: 15px !important;
            right: 15px !important;
          }
        }
      `}</style>
      {/* Este div es el objetivo donde n8n montará el chatbot. */}
      <div id="n8n-chat"></div>
    </>
  );
};
