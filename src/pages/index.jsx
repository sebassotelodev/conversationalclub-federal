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
  Sparkles,
  Star,
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

  const handleLogoClick = () => {
    setVerChat((prev) => !prev);
  };

  const VideoModal = () => {
    if (!showVideoModal) return null;

    return (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fadeIn">
        <div className="relative rounded-3xl p-4 md:p-6 max-w-xs sm:max-w-md w-full border border-[#EE7203]/30 bg-gradient-to-br from-[#112C3E]/90 to-[#0C212D]/90 backdrop-blur-xl shadow-2xl animate-scaleIn">
          <button
            onClick={() => setShowVideoModal(false)}
            className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF3816] to-[#EE7203] text-white rounded-full p-3 hover:shadow-xl hover:scale-110 transition-all duration-300 z-10 border-2 border-white/20"
            aria-label="Cerrar video"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="aspect-[9/16] bg-gradient-to-br from-[#112C3E] to-[#0C212D] rounded-2xl overflow-hidden mx-auto max-h-[70vh] border border-white/10 shadow-inner">
            <iframe
              src="https://www.youtube.com/embed/jNw2LFNI1zc"
              title="Meet Morgan Robinson - Your English Coach"
              className="w-full h-full rounded-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#112C3E] via-[#0C212D] to-[#112C3E] relative overflow-hidden">
      {/* Enhanced Background with floating particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#EE7203] to-[#FF3816] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-[#495463] to-[#112C3E] rounded-full blur-3xl animate-slowBounce"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-[#FF3816] to-[#EE7203] rounded-full blur-3xl animate-float"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-gradient-to-r from-[#EE7203]/20 to-[#FF3816]/20 rounded-full blur-2xl animate-slowFloat"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-r from-[#495463]/30 to-[#112C3E]/30 rounded-full blur-xl animate-float delay-1000"></div>
        
        {/* Sparkle effects */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-[#EE7203] rounded-full animate-twinkle"></div>
        <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-[#FF3816] rounded-full animate-twinkle delay-500"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-white rounded-full animate-twinkle delay-1000"></div>
      </div>

      {/* Enhanced Navigation with glassmorphism */}
      <nav
        ref={homeRef}
        className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto"
      >
        <button 
          onClick={handleLogoClick}
          className="rounded-xl flex items-center justify-center overflow-hidden hover:scale-110 transition-all duration-500 hover:rotate-6 cursor-pointer group"
        >
          <div className="relative">
            <Image
              src="/logo-further.png"
              alt="Further Academy Logo"
              width={150}
              height={150}
              priority
              className="object-contain transition-all duration-300"
            />
            <div className="absolute inset-0 0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </button>

        <div className="hidden md:flex space-x-8 text-white/90 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/10">
          {[
            { label: "Home", ref: homeRef },
            { label: "About", ref: aboutRef },
            { label: "FAQ", ref: faqRef },
            { label: "Contact", ref: contactRef }
          ].map((item, index) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.ref)}
              className="hover:text-white transition-all duration-300 hover:scale-105 font-medium relative group"
            >
              {item.label}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#EE7203] to-[#FF3816] group-hover:w-full transition-all duration-300"></div>
            </button>
          ))}
        </div>

        <button
          onClick={handleRegisterClick}
          className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] text-white px-6 py-2 rounded-full font-semibold hover:shadow-2xl hover:shadow-[#EE7203]/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group border border-white/20"
        >
          <span className="relative z-10">Register 👇</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF3816] to-[#EE7203] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </nav>

      {/* Enhanced Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-full text-white/90 text-sm border border-white/20 hover:border-[#EE7203]/30 transition-all duration-300 shadow-lg">
              <MessageCircle className="w-4 h-4 mr-2 text-[#EE7203]" />
              <Sparkles className="w-3 h-3 mr-1 animate-pulse" />
              PRACTICE ENGLISH WITH CONFIDENCE
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Conversational
              <span className="block bg-gradient-to-r from-[#EE7203] via-[#FF3816] to-[#EE7203] bg-clip-text text-transparent animate-gradient bg-300% drop-shadow-lg">
                English Club
              </span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed drop-shadow-sm">
              Join our free online workshop and practice English in an immersive
              way with Morgan Robinson, a native speaker from London. Boost your
              confidence through real conversations!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRegisterClick}
                className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#EE7203]/30 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group border border-white/10"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Register with Bot
                  <span className="ml-2 animate-bounce group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF3816] to-[#EE7203] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </button>
              
              <button
                onClick={() => setShowVideoModal(true)}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:border-[#EE7203]/50 transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Learn More
              </button>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: "FREE", label: "Workshop", icon: <Award className="w-6 h-6" /> },
                { value: "8", label: "Sessions", icon: <Calendar className="w-6 h-6" /> },
                { value: "10", label: "Max per Group", icon: <Users className="w-6 h-6" /> }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-default">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-[#EE7203]/30 transition-all duration-300 hover:scale-105">
                    <div className="text-[#EE7203] mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white group-hover:text-[#EE7203] transition-colors duration-300">{stat.value}</div>
                    <div className="text-white/70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl hover:shadow-[#EE7203]/10 transition-all duration-500 hover:scale-[1.02]">
              {/* Enhanced Morgan's Image - Large */}
              <div className="w-full h-80 bg-gradient-to-br from-[#495463] to-[#112C3E] rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative border border-white/10 shadow-inner">
                <Image
                  src="/morgan.jpg"
                  alt="Morgan Robinson"
                  fill
                  className="object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                  style={{ zIndex: 1 }}
                />
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              <div className="flex items-center mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#EE7203] to-[#FF3816] rounded-full flex items-center justify-center mr-4 overflow-hidden relative border-2 border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/morgan.jpg"
                    alt="Morgan Robinson"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg flex items-center">
                    Meet Morgan Robinson
                    <Star className="w-4 h-4 ml-2 text-[#EE7203] animate-pulse" />
                  </h3>
                  <p className="text-white/70">
                    Native English Speaker from London
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Business English Specialist",
                  "Intercultural Communication Expert", 
                  "Dynamic & Fun Teaching Style"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-white/90 group hover:text-white transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-[#EE7203] mr-3 group-hover:scale-110 transition-transform duration-300" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-[#112C3E]/60 to-[#0C212D]/60 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[#EE7203]/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <div className="w-2 h-2 bg-[#EE7203] rounded-full animate-pulse"></div>
                </div>
                <p className="text-white/90 italic relative z-10">
                  "Join me for dynamic, fun sessions focused on real-life
                  language use. You'll love learning with me!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced About Section */}
      <div
        ref={aboutRef}
        className="relative z-10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-[#EE7203] animate-pulse" />
            About the Conversational Club
            <Sparkles className="w-8 h-8 text-[#FF3816] animate-pulse" />
          </h2>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-[#EE7203]/30 transition-all duration-300">
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Our Conversational Club is designed to bridge the gap between
              classroom English and real-world communication. Through guided
              conversations, interactive activities, and personalized feedback,
              you'll gain the confidence to speak English naturally in any
              situation.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced FAQ Section */}
      <div
        ref={faqRef}
        className="relative z-10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-t border-white/10"
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
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 hover:border-[#EE7203]/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] p-3 rounded-xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {faq.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-[#EE7203] transition-colors duration-300">
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

      {/* Enhanced CTA Section */}
      <div
        ref={contactRef}
        className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center"
      >
        <div className="bg-gradient-to-r from-[#EE7203]/20 via-[#FF3816]/20 to-[#EE7203]/20 rounded-3xl p-12 border border-white/20 backdrop-blur-lg hover:border-[#EE7203]/40 transition-all duration-300 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-r from-[#EE7203]/10 to-[#FF3816]/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-r from-[#FF3816]/10 to-[#EE7203]/10 rounded-full blur-xl"></div>
          
          <h2 className="text-4xl font-bold text-white mb-6 relative z-10">
            Ready to Start Speaking English with Confidence?
          </h2>
          <p className="text-xl text-white/80 mb-8 relative z-10">
            Register now using the chat bot and secure your spot in Morgan's
            conversational club!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <button
              onClick={handleRegisterClick}
              className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#EE7203]/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group border border-white/20 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="ml-2">Register Now with Bot</span>
                <span className="ml-2 animate-bounce group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF3816] to-[#EE7203] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <div className="flex items-center gap-2 text-white/80 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <span className="w-2 h-2 bg-[#EE7203] rounded-full animate-pulse shadow-lg shadow-[#EE7203]/50"></span>
              Completely FREE 
              <span className="w-2 h-2 bg-[#FF3816] rounded-full animate-pulse shadow-lg shadow-[#FF3816]/50"></span> 
              Part of your Further experience
            </div>
          </div>
        </div>
      </div>

      {/* Chat Component */}
      <Chat isVisible={verChat} onToggle={handleChatToggle} />

      <VideoModal />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes slowFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(-5px) translateX(-10px); }
        }
        @keyframes slowBounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slowFloat { animation: slowFloat 8s ease-in-out infinite; }
        .animate-slowBounce { animation: slowBounce 4s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
        .animate-gradient { animation: gradient 3s ease infinite; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
        .bg-300% { background-size: 300% 300%; }
      `}</style>
    </div>
  );
};

export default ConversationalClubLanding;