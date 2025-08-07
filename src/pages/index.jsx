import React from 'react';
import { MessageCircle, Users, Calendar, Clock, Globe, Award, CheckCircle } from 'lucide-react';
import { Chat } from '@/componentes/chat';

const ConversationalClubLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-900 font-bold text-lg">F</span>
          </div>
          <span className="text-white font-bold text-xl">Further Academy</span>
        </div>
        <div className="hidden md:flex space-x-8 text-white/90">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">All Courses</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          Join Now
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
              <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                English Club
              </span>
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed">
              Join our free online workshop and practice English in an immersive way with Morgan Robinson, a native speaker from London. Boost your confidence through real conversations!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Register with Bot Below →
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
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
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Meet Morgan Robinson</h3>
                  <p className="text-white/70">Native English Speaker from London</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Business English Specialist
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Intercultural Communication Expert
                </div>
                <div className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dynamic & Fun Teaching Style
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-white/10">
                <p className="text-white/90 italic">
                  "Join me for dynamic, fun sessions focused on real-life language use. You'll love learning with me!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <MessageCircle className="w-6 h-6" />,
                question: "What is the Conversational Club?",
                answer: "It's a free online workshop designed to help you practice English in an immersive way with a native speaker – Morgan Robinson, straight from London! You'll have real conversations, discuss current topics, and boost your confidence."
              },
              {
                icon: <Users className="w-6 h-6" />,
                question: "Who can join?",
                answer: "Anyone who is currently taking part in Further or has been invited through their company. All levels are welcome – we'll match you with the right group."
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                question: "When does it start?",
                answer: "The first session is on Wednesday, August 20th. There are 8 weekly sessions, 1 hour each, over the course of two months."
              },
              {
                icon: <Globe className="w-6 h-6" />,
                question: "What platform will be used?",
                answer: "We'll meet on Teams. You'll receive the link and schedule details by email before the first session."
              },
              {
                icon: <Award className="w-6 h-6" />,
                question: "How many spots are available?",
                answer: "Each group has a maximum of 10 participants to ensure quality and personalized interaction."
              },
              {
                icon: <Clock className="w-6 h-6" />,
                question: "What if I miss a session?",
                answer: "You can miss one session only. If you miss more than one, your spot may be given to someone on the waiting list."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-3 rounded-xl text-blue-900 flex-shrink-0">
                    {faq.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-3xl p-12 border border-white/20 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Speaking English with Confidence?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Register now using the bot in the bottom right corner and secure your spot in Morgan's conversational club!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Register with Bot →
            </button>
            <div className="flex items-center text-white/80">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Completely FREE • Part of your Further experience
            </div>
          </div>
        </div>
      </div>

      {/* Registration reminder */}
      <div className="fixed bottom-6 right-6 z-50">
         
            <MessageCircle className="w-5 h-5" />
            <Chat/>
          
       
      </div>
    </div>
  );
};

export default ConversationalClubLanding;