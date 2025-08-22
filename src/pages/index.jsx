import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  Users,
  Calendar,
  Clock,
  Award,
  CheckCircle,
  Play,
  X,
  Sparkles,
  Star,
  TrendingUp,
  Target,
  Zap,
  MapPin,
  Building,
  ArrowRight,
  Globe,
  BookOpen,
  Mic,
  Heart,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import { Chat } from "@/componentes/chat";
import Image from "next/image";

const ConversationalClubLanding = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [verChat, setVerChat] = useState(false);

  // NUEVO: overlay guía para “hacer click en el bot”
  const [showGuide, setShowGuide] = useState(false);

  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  // NO se cambia el funcionamiento existente: sigue toggling del chat
  const handleRegisterClick = () => {
    setVerChat(!verChat);
    // Muestra la capa guía para indicarle que use el bot
    setShowGuide(true);
  };

  const handleChatToggle = () => setVerChat(!verChat);
  const handleLogoClick = () => setVerChat((prev) => !prev);

  // NUEVO: cerrar con Escape tanto el modal como la guía
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowVideoModal(false);
        setShowGuide(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const VideoModal = () => {
    if (!showVideoModal) return null;

    // Cerrar si se hace click en el fondo (fuera del modal)
    const handleBackdropClick = () => setShowVideoModal(false);
    const stop = (e) => e.stopPropagation();

    return (
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fadeIn"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-label="Video modal"
      >
        <div
          className="relative rounded-3xl p-4 md:p-6 max-w-xs sm:max-w-md lg:max-w-4xl w-full border border-[#EE7203]/30 bg-gradient-to-br from-[#112C3E]/95 to-[#0C212D]/95 backdrop-blur-xl shadow-2xl animate-scaleIn"
          onClick={stop}
        >
          <button
            onClick={() => setShowVideoModal(false)}
            className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF3816] to-[#EE7203] text-white rounded-full p-3 hover:shadow-xl hover:scale-110 transition-all duration-300 z-10 border-2 border-white/20"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="aspect-video bg-gradient-to-br from-[#112C3E] to-[#0C212D] rounded-2xl overflow-hidden mx-auto border border-white/10 shadow-inner">
            <iframe
              src="https://www.youtube.com/embed/OeMEoSp6drM?autoplay=1&playsinline=1&rel=0&modestbranding=1"
              title="Further Corporate — Conversational Club Presentation"
              className="w-full h-full rounded-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  };

  // NUEVO: overlay guía con blur + texto + flecha hacia abajo a la derecha
  const GuideOverlay = () => {
    if (!showGuide) return null;

    const handleClose = () => setShowGuide(false);
    const stop = (e) => e.stopPropagation();

    // 🔒 Lock scroll while overlay is open
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);

    return (
      <div
        className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm animate-fadeIn"
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
        aria-label="Guide overlay"
      >
        {/* Central message box (click inside does not close) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-[90%] sm:w-[480px] bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 text-white shadow-2xl"
          onClick={stop}
        >
          <div className="flex items-start gap-3">
            <div className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] rounded-xl p-2 shrink-0">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">One more step! ✨</h3>
              <p className="text-white/90">
                Please{" "}
                <span className="font-semibold text-[#EE7203]">click</span> on
                the <span className="font-semibold">bot</span> at the bottom
                right to start your registration.
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="mt-4 w-full bg-gradient-to-r from-[#EE7203] to-[#FF3816] text-white font-semibold rounded-full py-2.5 hover:shadow-2xl hover:shadow-[#EE7203]/30 transition-all duration-300"
          >
            OK, go to the bot
          </button>

          <p className="text-center text-xs text-white/60 mt-2">
            (You can also press <span className="font-semibold">Esc</span> or
            click outside to close)
          </p>
        </div>

        {/* Arrow and label pointing to bottom right */}
        <div className="pointer-events-none absolute bottom-24 right-24 hidden sm:block">
          {/* Floating label */}
          <div className="mb-2 px-3 py-1 rounded-full text-sm font-semibold bg-white/10 border border-white/20 backdrop-blur-sm inline-block">
            Here is the bot 👇
          </div>
          {/* Animated diagonal arrow */}
          <div className="w-40 h-40 relative">
            <div className="absolute inset-0 rotate-45 animate-slowBounce flex items-center">
              <ArrowRight className="w-40 h-40 text-white/80" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Cities with improved descriptions
  const cities = [
    {
      name: "Mar del Plata",
      room: "Bristol Room",
      icon: "🏖️",
      description: "Coastal learning experience",
    },
    {
      name: "Rosario",
      room: "Pichincha Room",
      icon: "🏙️",
      description: "Urban conversation practice",
    },
    {
      name: "Córdoba",
      room: "Córdoba Room",
      icon: "🎡",
      description: "Historic city setting",
    },
    {
      name: "Salta",
      room: "Cafayate Room",
      icon: "⛰️",
      description: "Mountain town atmosphere",
    },
  ];

  const faqData = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      question: "What is the Conversational Club?",
      answer:
        "Our Conversational Club is a complementary in-person workshop exclusively designed for intermediate to advanced English learners (B1+ level). Led by qualified instructors, you'll engage in meaningful conversations, explore current topics, and build genuine confidence through In person interactions in a supportive environment.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      question: "How can I join?",
      answer:
        "You need a B1 (intermediate) level or higher. This means you can handle everyday conversations, understand intermediate English content, and you're ready to focus on developing fluency and natural communication skills rather than basic grammar.",
    },

    {
      icon: <Calendar className="w-5 h-5" />,
      question: "When do classes begin and what's the schedule?",
      answer:
        "Classes start on Monday, September 8th and run every Monday thereafter. We offer two convenient time slots: Session 1 (9:30–11:00 AM) and Session 2 (11:00 AM–12:30 PM). Choose the time that works best for your schedule.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      question: "Where are the in-person classes held?",
      answer:
        "We offer classes in four major Argentine cities: Rosario (Pichincha Room), Córdoba (Córdoba Room), Salta (Cafayate Room), and Mar del Plata (Bristol Room), all within the corresponding Accenture headquarters. Each location provides a comfortable, modern learning environment.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      question: "How many spots are available?",
      answer:
        "Each group is limited to 8 participants, to ensure personalized attention and quality interaction. If a group fills up, additional registrants will be placed on our priority waiting list.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "What's the attendance policy?",
      answer:
        "You're allowed to miss one session during the course. This means that, missing more than one session may result in your spot being offered to someone from the waiting list. Regular attendance is essential for in-person learning success.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      question: "How will this advance my B1+ level?",
      answer:
        "You'll practice sophisticated conversation skills, master natural expressions and idioms, and gain confidence discussing complex topics. Our In person format provides immediate feedback and real-time interaction that accelerates your journey from intermediate to advanced fluency.",
    },
  ];

  const VIDEO_ID = "OeMEoSp6drM";
  const THUMB_URL = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#112C3E] via-[#0C212D] to-[#112C3E] relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-r from-[#EE7203] to-[#FF3816] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-[#495463] to-[#112C3E] rounded-full blur-3xl animate-slowBounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 sm:w-48 h-24 sm:h-48 bg-gradient-to-r from-[#FF3816] to-[#EE7203] rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/4 right-1/3 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-r from-[#EE7203]/20 to-[#FF3816]/20 rounded-full blur-2xl animate-slowFloat"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 sm:w-24 h-12 sm:h-24 bg-gradient-to-r from-[#495463]/30 to-[#112C3E]/30 rounded-full blur-xl animate-float delay-1000"></div>
        {/* Twinkling stars */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-[#EE7203] rounded-full animate-twinkle"></div>
        <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-[#FF3816] rounded-full animate-twinkle delay-500"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-white rounded-full animate-twinkle delay-1000"></div>
      </div>

      {/* Enhanced Navigation */}
      <nav
        ref={homeRef}
        className="relative z-10 flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 max-w-7xl mx-auto gap-4 sm:gap-0"
      >
        <button
          onClick={handleLogoClick}
          className="rounded-xl flex items-center justify-center overflow-hidden hover:scale-110 transition-all duration-500 hover:rotate-6 cursor-pointer group"
        >
          <div className="relative">
            <img
              src="/logo-further.png"
              alt="Further Corporate Logo"
              width={150}
              height={150}
              className="object-contain transition-all duration-300"
            />
          </div>
        </button>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white/90 bg-white/5 backdrop-blur-sm rounded-2xl px-4 sm:px-8 py-3 sm:py-4 border border-white/10">
          {[
            { label: "Home", ref: homeRef },
            { label: "About", ref: aboutRef },
            { label: "FAQ", ref: faqRef },
            { label: "Contact", ref: contactRef },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.ref)}
              className="hover:text-white transition-all duration-300 hover:scale-105 font-medium relative group cursor-pointer"
            >
              {item.label}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#EE7203] to-[#FF3816] group-hover:w-full transition-all duration-300"></div>
            </button>
          ))}
        </div>

        <button
          onClick={handleRegisterClick}
          className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-[#EE7203]/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group border border-white/20 cursor-pointer"
        >
          <span className="relative z-10 flex items-center gap-2">
            Register in Bot
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF3816] to-[#EE7203] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </nav>

      {/* Enhanced Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-20 pb-16 sm:pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-full text-white/90 text-xs sm:text-sm border border-white/20 hover:border-[#EE7203]/30 transition-all duration-300 shadow-lg flex-wrap gap-2">
              <MessageCircle className="w-4 h-4 text-[#EE7203] flex-shrink-0" />
              <Sparkles className="w-3 h-3 animate-pulse flex-shrink-0" />
              <span className="font-medium">MASTER ENGLISH CONVERSATIONS</span>
              <span className="px-2 py-1 bg-gradient-to-r from-[#EE7203] to-[#FF3816] rounded-full text-xs font-bold flex-shrink-0">
                B1+
              </span>
              <span className="px-2 py-1 bg-gradient-to-r from-[#495463] to-[#112C3E] rounded-full text-xs font-bold flex-shrink-0">
                IN PERSON
              </span>
            </div>

            {/* Enhanced Title */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Unlock Your
                <span className="block bg-gradient-to-r from-[#EE7203] via-[#FF3816] to-[#EE7203] bg-clip-text text-transparent animate-gradient bg-300% drop-shadow-lg">
                  Speaking Potential
                </span>
              </h1>

              <div className="relative">
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-relaxed drop-shadow-sm">
                  <span className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] bg-clip-text text-transparent">
                    Exclusive Complementary
                  </span>{" "}
                  <span className="text-white">Conversational Course</span>
                </p>
                <p className="text-base sm:text-lg text-white/70 mt-2 font-medium">
                  Designed for Intermediate to Advanced Learners (B1+ Level)
                </p>
                <p className="text-base sm:text-lg text-white/70 mt-1 font-medium flex items-center gap-2 flex-wrap">
                  <MapPin className="w-4 h-4 text-[#EE7203] flex-shrink-0" />
                  In person classes in 4 Argentine cities
                </p>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-4 max-w-3xl">
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed">
                Transform your English learning journey! Build unshakeable
                confidence and develop authentic communication skills through
                our immersive in-person experience.
              </p>

              <p className="text-lg sm:text-xl text-white/85 leading-relaxed">
                Our{" "}
                <span className="font-semibold text-[#EE7203]">
                  complementary In person course
                </span>{" "}
                is{" "}
                <span className="font-semibold text-white">
                  exclusively crafted for our valued community
                </span>{" "}
                to help you excel in real conversations, not just textbook
                exercises.
              </p>

              {/* Enhanced Classroom assignments */}
              <div className="bg-gradient-to-r from-[#EE7203]/10 to-[#FF3816]/10 border border-[#EE7203]/30 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-5 h-5 text-[#EE7203] flex-shrink-0" />
                  <p className="text-white/90 font-medium">
                    <span className="text-[#EE7203] font-bold">
                      Learning Locations:
                    </span>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cities.map((city, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-white/80 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="text-xl flex-shrink-0">{city.icon}</span>
                      <div>
                        <div className="font-medium text-white">
                          {city.name}
                        </div>
                        <div className="text-xs text-white/60">{city.room}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced B1+ highlight */}
              <div className="bg-gradient-to-r from-[#EE7203]/10 to-[#FF3816]/10 border border-[#EE7203]/30 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-[#EE7203] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white/90 font-medium mb-2">
                      <span className="text-[#EE7203] font-bold">
                        Perfect for B1+ students
                      </span>{" "}
                      who are ready to bridge the gap between intermediate
                      knowledge and advanced fluency
                    </p>
                    <p className="text-white/70 text-sm">
                      Move beyond basic communication to master natural,
                      confident conversation skills
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleRegisterClick}
                className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#EE7203]/30 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group border border-white/10 cursor-pointer"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Register in Bot
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF3816] to-[#EE7203] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </button>

              <button
                onClick={() => setShowVideoModal(true)}
                className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:border-[#EE7203]/50 transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm cursor-pointer"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Preview
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 justify-items-center">
                {[
                  // 0) Exclusive card -> only logo
                  { exclusive: true },
                  // 1) Sessions
                  {
                    value: "12",
                    label: "Sessions",
                    icon: <Calendar className="w-4 sm:w-6 h-4 sm:h-6" />,
                    exclusive: false,
                  },
                  // 2) Max per group
                  {
                    value: "8",
                    label: "Max per Group",
                    icon: <Users className="w-4 sm:w-6 h-4 sm:h-6" />,
                    exclusive: false,
                  },
                  // 3) Time Slots
                  {
                    value: "2",
                    label: "Time Slots",
                    icon: <Clock className="w-4 sm:w-6 h-4 sm:h-6" />,
                    exclusive: false,
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="w-full max-w-[280px] text-center group cursor-default"
                  >
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/10 hover:border-[#EE7203]/30 transition-all duration-300 hover:scale-105 overflow-hidden h-40 sm:h-44 lg:h-48 flex flex-col justify-center">
                      {/* Exclusive ribbon (kept) */}
                      {stat.exclusive && (
                        <>
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EE7203] via-[#FF3816] to-[#EE7203] animate-gradient bg-300%" />
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-10">
                            <div className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] text-white text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full uppercase tracking-wider shadow-xl border border-white/20 relative overflow-hidden group-hover:scale-110 transition-all duration-300">
                              <span className="relative z-10 flex items-center gap-1">
                                <Sparkles className="w-3 sm:w-3 h-3 sm:h-3 animate-pulse" />
                                <span className="text-xs">Exclusive</span>
                                <Sparkles className="w-3 sm:w-3 h-3 sm:h-3 animate-pulse" />
                              </span>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Card body */}
                      {stat.exclusive ? (
                        // Logo only (no "FREE" / no "Course")
                        <div className="flex items-center justify-center flex-1">
                          <Image
                            src="/Further-Federal.png"
                            alt="Further Federal logo"
                            width={160}
                            height={160}
                            priority
                            className="w-28 sm:w-32 lg:w-36 h-auto object-contain drop-shadow-md mx-auto"
                          />
                          <span className="sr-only">Further Federal</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center flex-1 space-y-2 sm:space-y-3">
                          <div className="text-[#EE7203] flex justify-center group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                          </div>
                          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-[#EE7203] transition-colors duration-300">
                            {stat.value}
                          </div>
                          <div className="text-white/70 font-medium text-sm sm:text-base text-center leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Right column */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl hover:shadow-3xl hover:shadow-[#EE7203]/10 transition-all duration-500 hover:scale-[1.02]">
              <div
                className="relative w-full aspect-video bg-gradient-to-br from-[#495463] to-[#112C3E] rounded-xl sm:rounded-2xl mb-4 sm:mb-6 overflow-hidden border border-white/10 shadow-inner group cursor-pointer"
                onClick={() => setShowVideoModal(true)}
                role="button"
                aria-label="Open video preview"
                tabIndex={0}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  setShowVideoModal(true)
                }
              >
                {/* Miniatura del video */}
                <Image
                  src={THUMB_URL}
                  alt="Preview — Conversational Club Presentation"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 640px, 100vw"
                  priority
                />

                {/* Overlay oscurecido */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />

                {/* Botón de Play centrado */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] rounded-full p-4 sm:p-6 shadow-2xl group-hover:scale-110 transition-all duration-300 border-4 border-white/20">
                    <Play className="w-6 sm:w-8 h-6 sm:h-8 text-white fill-current" />
                  </div>
                </div>

                {/* Etiqueta superior derecha */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gradient-to-r from-[#EE7203] to-[#FF3816] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-white/20 z-30">
                  In-Person
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">
                    In person Conversational Club
                  </h3>
                  <p className="text-white/70 flex items-center justify-center gap-2 text-sm sm:text-base flex-wrap">
                    <MapPin className="w-4 h-4 text-[#EE7203] flex-shrink-0" />
                    Available in 4 Argentine cities
                  </p>
                </div>

                {/* Enhanced Features */}
                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      text: "Interactive In person sessions",
                      icon: <Users className="w-4 h-4" />,
                    },
                    {
                      text: "Expert qualified instructors",
                      icon: <Star className="w-4 h-4" />,
                    },
                    {
                      text: "Dynamic & motivating environment",
                      icon: <Zap className="w-4 h-4" />,
                    },
                    {
                      text: "Real-world conversation practice",
                      icon: <Globe className="w-4 h-4" />,
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-white/90 group hover:text-white transition-colors duration-300 hover:bg-white/5 rounded-lg p-2 -m-2"
                    >
                      <div className="text-[#EE7203] mr-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <CheckCircle className="w-4 h-4 text-[#EE7203] mr-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Enhanced Cities grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {cities.map((city, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-[#112C3E]/60 to-[#0C212D]/60 rounded-lg sm:rounded-xl p-3 border border-white/10 hover:border-[#EE7203]/30 transition-all duration-300 text-center group hover:scale-105"
                    >
                      <div className="text-xl sm:text-2xl mb-1">
                        {city.icon}
                      </div>
                      <div className="text-white/90 font-medium text-sm">
                        {city.name}
                      </div>
                      <div className="text-white/60 text-xs">{city.room}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-[#112C3E]/60 to-[#0C212D]/60 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[#EE7203]/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <div className="w-2 h-2 bg-[#EE7203] rounded-full animate-pulse shadow-lg shadow-[#EE7203]/50"></div>
                  </div>
                  <p className="text-white/90 italic relative z-10 text-center font-medium text-sm sm:text-base">
                    "Transform your intermediate English into advanced fluency
                    through authentic, In person conversations."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced About Section */}
      <div
        ref={aboutRef}
        className="relative z-10 bg-gradient-to-r from:white/5 via-white/10 to-white/5 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 flex items-center justify-center gap-3 flex-wrap">
              <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-[#EE7203] animate-pulse flex-shrink-0" />
              <span>About Our Conversational Club</span>
              <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-[#FF3816] animate-pulse flex-shrink-0" />
            </h2>

            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#EE7203]/20 to-[#FF3816]/20 backdrop-blur-lg rounded-full text-white border border-[#EE7203]/30 mb-6 sm:mb-8 flex-wrap gap-2">
              <Target className="w-4 sm:w-5 h-4 sm:h-5 text-[#EE7203] flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base">
                Tailored for B1+ Level — In person Learning
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#EE7203]/30 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2 flex-wrap">
                <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[#EE7203] flex-shrink-0" />
                <span>Transform Your Communication</span>
              </h3>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Our Conversational Club eliminates the gap between classroom
                English and authentic real-world communication. Through
                structured conversations, engaging activities, and immediate
                personalized feedback in our In person environment, you'll
                develop the confidence to communicate naturally and effectively
                in any English-speaking situation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#EE7203]/30 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2 flex-wrap">
                <Building className="w-5 sm:w-6 h-5 sm:h-6 text-[#FF3816] flex-shrink-0" />
                <span>Premium In-Person Experience</span>
              </h3>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Experience the unmatched benefits of In person learning in our
                thoughtfully designed spaces across Argentina. Our in-person
                classes in Mar del Plata, Rosario, Córdoba, and Salta feature
                expert instructors and intimate learning environments that
                foster genuine connection and accelerated language development.
              </p>
            </div>
          </div>

          {/* Enhanced Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6" />,
                title: "Advanced Fluency Development",
                desc: "Elevate your B1+ skills to advanced conversational mastery through targeted practice",
              },
              {
                icon: <Users className="w-5 sm:w-6 h-5 sm:h-6" />,
                title: "Intimate Learning Groups",
                desc: "Small classes (max 16 students) ensure individual attention and meaningful interaction",
              },
              {
                icon: <MapPin className="w-5 sm:w-6 h-5 sm:h-6" />,
                title: "4 Premium Locations",
                desc: "Conveniently located in-person classes across major Argentine cities",
              },
              {
                icon: <Mic className="w-5 sm:w-6 h-5 sm:h-6" />,
                title: "Confidence Building",
                desc: "Overcome speaking anxiety through supportive, encouraging In person practice",
              },
              {
                icon: <BookOpen className="w-5 sm:w-6 h-5 sm:h-6" />,
                title: "Real-World Topics",
                desc: "Discuss current events, culture, and relevant subjects that matter to you",
              },
              {
                icon: <Heart className="w-5 sm:w-6 h-5 sm:h-6" />,
                title: "Community Connection",
                desc: "Network with like-minded peers in a welcoming environment",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/10 hover:border-[#EE7203]/30 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-[#EE7203] mb-3 sm:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-white font-semibold text-base sm:text-lg mb-2">
                  {benefit.title}
                </h4>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced FAQ Section */}
      <div
        ref={faqRef}
        className="relative z-10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 sm:mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 border border-white/10 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 hover:border-[#EE7203]/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group"
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
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20"
      >
        <div className="bg-gradient-to-r from-[#EE7203]/20 via-[#FF3816]/20 to-[#EE7203]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 backdrop-blur-lg hover:border-[#EE7203]/40 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-4 left-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-[#EE7203]/10 to-[#FF3816]/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 right-4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-[#FF3816]/10 to-[#EE7203]/10 rounded-full blur-xl"></div>

          <div className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#EE7203]/30 to-[#FF3816]/30 backdrop-blur-lg rounded-full text-white/90 text-sm border border-[#EE7203]/50 mb-6">
              <Target className="w-4 h-4 mr-2 text-[#EE7203]" />
              Designed for B1+ Students — Premium In-Person Experience
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Unlock Your English Potential?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our exclusive In person conversational club and transform
              your intermediate English into advanced, confident fluency.
              Experience the power of in-person learning across 4 beautiful
              Argentine cities!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 sm:mb-8">
              <button
                onClick={handleRegisterClick}
                className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#EE7203]/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group border border-white/20 relative overflow-hidden w-full sm:w-auto cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Register in Bot</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF3816] to-[#EE7203] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => setShowVideoModal(true)}
                className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:border-[#EE7203]/50 transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm w/full sm:w-auto cursor-pointer"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Preview Experience
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="flex items-center justify-center gap-2 text-white/80 bg-white/5 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-3 border border-white/10 hover:border-[#EE7203]/30 transition-all duration-300 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#EE7203] rounded-full animate-pulse shadow-lg shadow-[#EE7203]/50 flex-shrink-0"></span>
                <span>Completely Complementary</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/80 bg-white/5 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-3 border border-white/10 hover:border-[#EE7203]/30 transition-all duration-300 text-sm sm:text-base">
                <MapPin className="w-4 h-4 text-[#FF3816] flex-shrink-0" />
                <span>4 Premium Locations</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/80 bg-white/5 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-3 border border-white/10 hover:border-[#EE7203]/30 transition-all duration-300 text-sm sm:text-base">
                <span className="w-2 h-2 bg-[#FF3816] rounded-full animate-pulse shadow-lg shadow-[#FF3816]/50 flex-shrink-0"></span>
                <span>In person Classes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-[#112C3E] to-[#0C212D] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-4">
                Further Corporate
              </h4>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Transforming English learning through innovative in-person
                experiences and authentic conversation practice.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-4">
                Our Locations
              </h4>
              <div className="space-y-2">
                {cities.map((city, index) => (
                  <p
                    key={index}
                    className="text-white/70 text-sm flex items-center gap-2"
                  >
                    <span>{city.icon}</span>
                    <span>{city.name}</span>
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: "About Us", ref: aboutRef },
                  { label: "FAQ", ref: faqRef },
                  { label: "Contact", ref: contactRef },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.ref)}
                    className="block text-white/70 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-4">Get Started</h4>
              <button
                onClick={handleRegisterClick}
                className="bg-gradient-to-r from-[#EE7203] to-[#FF3816] text-white px-4 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4 w-full sm:w-auto cursor-pointer"
              >
                Register in Bot
              </button>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>Support</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>Info</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2025 Further Corporate. All rights reserved. | Exclusive
              Conversational Club for B1+ Students
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation */}
      {/* <div className="fixed bottom-4 left-4 right-4 lg:hidden z-40">
        <div className="bg-gradient-to-r from-[#112C3E]/95 to-[#0C212D]/95 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl">
          <div className="flex justify-around items-center">
            {[
              {
                label: "Home",
                ref: homeRef,
                icon: <Building className="w-5 h-5" />,
              },
              {
                label: "About",
                ref: aboutRef,
                icon: <BookOpen className="w-5 h-5" />,
              },
              {
                label: "FAQ",
                ref: faqRef,
                icon: <MessageCircle className="w-5 h-5" />,
              },
              {
                label: "Register in Bot",
                action: handleRegisterClick,
                icon: <ArrowRight className="w-5 h-5" />,
              },
            ].map((item, index) => (
              <button
                key={item.label}
                onClick={item.action || (() => scrollToSection(item.ref))}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 cursor-pointer ${
                  item.label === "Register in Bot"
                    ? "bg-gradient-to-r from-[#EE7203] to-[#FF3816] text-white"
                    : "text-white/70 hover:text-white hover:bg:white/10"
                }`}
              >
                {item.icon}
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div> */}

      {/* Components */}
      <Chat isVisible={verChat} onToggle={handleChatToggle} />

      {/* NUEVO: Overlay guía */}
      <GuideOverlay />

      {/* Modal de video */}
      <VideoModal />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes slowFloat {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(10px);
          }
          66% {
            transform: translateY(-5px) translateX(-10px);
          }
        }
        @keyframes slowBounce {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-slowFloat {
          animation: slowFloat 8s ease-in-out infinite;
        }
        .animate-slowBounce {
          animation: slowBounce 4s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ConversationalClubLanding;
