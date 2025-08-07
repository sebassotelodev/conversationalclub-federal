import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Users,
  Calendar,
  Clock,
  Globe,
  Award,
  CheckCircle,
  Play,
  X,
} from "lucide-react";
import { Chat } from "@/componentes/chat";

const ConversationalClubLanding = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);

  const [verChat, setVerChat] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRegisterClick = () => {
    setVerChat(!verChat);
  };

  const handleChatToggle = () => {
    setVerChat(!verChat);
  };

  // Reemplazo: Click en el logo abre/cierra el chat
  const handleLogoClick = () => {
    setVerChat((prev) => !prev);
  };

  const VideoModal = () => {
    if (!showVideoModal) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="relative  rounded-2xl p-4 md:p-6 max-w-xs sm:max-w-md w-full border border-[#EE7203]/30">
          {/* Botón de cierre */}
          <button
            onClick={() => setShowVideoModal(false)}
            className="absolute -top-3 -right-3 bg-[#FF3816] text-white rounded-full p-2 hover:bg-[#FF3816]/80 transition-colors shadow-lg"
            aria-label="Cerrar video"
          >
            <X className="w-5 h-5" />
          </button>
          {/* Caja vertical 9:16 (short) */}
          <div className="aspect-[9/16] bg-black rounded-xl overflow-hidden mx-auto max-h-[70vh]">
            <iframe
              src="https://www.youtube.com/embed/jNw2LFNI1zc"
              title="Meet Morgan Robinson - Your English Coach"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#112C3E] via-[#0C212D] to-[#112C3E] relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#EE7203] to-[#FF3816] rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-[#495463] to-[#112C3E] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-[#FF3816] to-[#EE7203] rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav
        ref={homeRef}
        className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto"
      >
        <div className=" rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition">
          <Image
            src="/logo-further.png"
            alt="Further Academy Logo"
            width={60}
            height={60}
            priority
            className="object-contain"
          />
        </div>
        <div className="hidden md:flex space-x-8 text-white/90">
          <button
            onClick={() => scrollToSection(homeRef)}
            className="hover:text-white transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(faqRef)}
            className="hover:text-white transition-colors"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>
        <button
          onClick={handleRegisterClick}
          className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Register 👇
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm border border-white/20">
              <MessageCircle className="w-4 h-4 mr-2" />
              PRACTICE ENGLISH WITH CONFIDENCE
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Conversational
              <span className="block bg-gradient-to-r from-[#EE7203] to-[#FF3816] bg-clip-text text-transparent">
                English Club
              </span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed">
              Join our free online workshop and practice English in an immersive
              way with Morgan Robinson, a native speaker from London. Boost your
              confidence through real conversations!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRegisterClick}
                className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative"
              >
                {verChat ? (
                  <>
                    Register with Bot
                    <span className="ml-2 animate-bounce">→</span>
                  </>
                ) : (
                  <>
                    Register with Bot
                    <span className="ml-2 animate-bounce">→</span>
                  </>
                )}
              </button>
              <button
                onClick={() => setShowVideoModal(true)}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Learn More
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">FREE</div>
                <div className="text-white/70">Workshop</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">8</div>
                <div className="text-white/70">Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10</div>
                <div className="text-white/70">Max per Group</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Morgan's Image - Large */}
              <div className="w-full h-80 bg-gradient-to-br from-[#495463] to-[#112C3E] rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative">
                {/* Reemplazá el src por la foto real de Morgan */}
                <Image
                  src="/morgan.jpg" // Cambia este src por la foto de Morgan
                  alt="Morgan Robinson"
                  fill
                  className="object-cover rounded-2xl"
                  style={{ zIndex: 1 }}
                />
                {/* Si querés un placeholder, descomentá el bloque de abajo */}
                {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 text-center z-0">
                  <Users className="w-16 h-16 mx-auto mb-2" />
                  <p>Morgan's Photo</p>
                </div> */}
              </div>

              <div className="flex items-center mb-6">
                {/* Morgan's Image - Circle */}
                <div className="w-12 h-12 bg-gradient-to-r from-[#EE7203] to-[#FF3816] rounded-full flex items-center justify-center mr-4 overflow-hidden relative">
                  <Image
                    src="/morgan.jpg" // Cambia este src por la foto de Morgan (versión mini)
                    alt="Morgan Robinson"
                    fill
                    className="object-cover rounded-full"
                  />
                  {/* Placeholder: 
                  <Users className="w-6 h-6 text-white absolute" />
                  */}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Meet Morgan Robinson
                  </h3>
                  <p className="text-white/70">
                    Native English Speaker from London
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 text-[#EE7203] mr-3" />
                  Business English Specialist
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 text-[#EE7203] mr-3" />
                  Intercultural Communication Expert
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 text-[#EE7203] mr-3" />
                  Dynamic & Fun Teaching Style
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-[#112C3E]/40 to-[#0C212D]/40 rounded-xl border border-white/10">
                <p className="text-white/90 italic">
                  "Join me for dynamic, fun sessions focused on real-life
                  language use. You'll love learning with me!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        ref={aboutRef}
        className="relative z-10 bg-white/5 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            About the Conversational Club
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Our Conversational Club is designed to bridge the gap between
            classroom English and real-world communication. Through guided
            conversations, interactive activities, and personalized feedback,
            you'll gain the confidence to speak English naturally in any
            situation.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div
        ref={faqRef}
        className="relative z-10 bg-white/5 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <MessageCircle className="w-6 h-6" />,
                question: "What is the Conversational Club?",
                answer:
                  "It's a free online workshop designed to help you practice English in an immersive way with a native speaker – Morgan Robinson, straight from London! You'll have real conversations, discuss current topics, and boost your confidence.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                question: "Who can join?",
                answer:
                  "Anyone who is currently taking part in Further or has been invited through their company. All levels are welcome – we'll match you with the right group.",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                question: "When does it start?",
                answer:
                  "The first session is on Wednesday, August 20th. There are 8 weekly sessions, 1 hour each, over the course of two months.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                question: "What platform will be used?",
                answer:
                  "We'll meet on Teams. You'll receive the link and schedule details by email before the first session.",
              },
              {
                icon: <Award className="w-6 h-6" />,
                question: "How many spots are available?",
                answer:
                  "Each group has a maximum of 10 participants to ensure quality and personalized interaction.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                question: "What if I miss a session?",
                answer:
                  "You can miss one session only. If you miss more than one, your spot may be given to someone on the waiting list.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] p-3 rounded-xl text-white flex-shrink-0">
                    {faq.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        ref={contactRef}
        className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center"
      >
        <div className="bg-gradient-to-r from-[#EE7203]/20 to-[#FF3816]/20 rounded-3xl p-12 border border-white/20 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Speaking English with Confidence?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Register now using the chat bot and secure your spot in Morgan's
            conversational club!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleRegisterClick}
              className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              {verChat ? (
                <>
                 <MessageCircle className="w-5 h-5" />
                  Register Now with Bot <span className="ml-2 animate-bounce">→</span>
                </>
              ) : (
                <>
                  <MessageCircle className="w-5 h-5" />
                  Register Now with Bot <span className="ml-2 animate-bounce">→</span>
                </>
              )}
            </button>
            <div className="flex items-center gap-1.5 text-white/80">
              <span className="w-2 h-2 bg-[#EE7203] rounded-full mr-2 animate-pulse"></span>
              Completely FREE <span className="w-2 h-2 bg-[#EE7203] rounded-full mr-2 animate-pulse"></span> Part of your Further experience
            </div>
          </div>
        </div>
      </div>

      {/* Chat Component */}
      <Chat isVisible={verChat} onToggle={handleChatToggle} />

      <VideoModal />
    </div>
  );
};

export default ConversationalClubLanding;
