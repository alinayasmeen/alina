'use client';
import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Projects from '@/projects/page';
import Contact from '@/contact/page';
import About from '@/about/page';

export default function Portfolio() {
  const [, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    technical: [
      { name: 'OpenAI Agents SDK', level: 90 },
      { name: 'Custom Model Integration', level: 90 },
      { name: 'Streamlit', level: 60 },
      { name: 'Chainlit', level: 70 },
      { name: 'Prompt Engineering', level: 85 },
      { name: 'Next.js Development', level: 80 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'Sanity CMS', level: 90 },
      { name: 'API Integration', level: 90 },
      { name: 'GitHub & Version Control', level: 85 },
      { name: 'Microsoft Office Suite', level: 90 }
    ],
    soft: [
      { name: 'Time Management', level: 95 },
      { name: 'Problem-Solving', level: 90 },
      { name: 'Customer Communication', level: 95 },
      { name: 'Team Leadership', level: 85 },
      { name: 'Critical Thinking', level: 90 }
    ]
  };


  // const ScrollIndicator = () => (
  //   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
  //     <ChevronDown className="w-8 h-8 text-white opacity-70" />
  //   </div>
  // );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              HAY
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition-colors duration-300 relative group"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-purple-400 transition-colors"
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="relative inline-block">
           
             <Image 
              src="/Profile.jpeg" 
              alt="Hafiza Alina Yasmeen" 
              className="rounded-full sm:h-32 sm:w-32 mx-auto mb-6 object-cover border-4 border-purple-500 shadow-2xl"
              width={200}
              height={200}
            /> 
            
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Hafiza Alina Yasmeen
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 mb-6">
            AI Developer | Full Stack Web Developer
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Versatile professional bridging AI innovation, healthcare expertise, and development excellence. 
            Passionate about leveraging technology to create meaningful impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
            <Link 
              href="https://anta-al-hayat.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              View Featured Project <ExternalLink className="w-4 h-4" />
            </Link>
              <Link
              href="/Alina CV.pdf"
              className="px-8 py-3 border-2 border-pink-400 rounded-full font-semibold hover:bg-pink-400/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"> Download CV
              <Download className="w-4 h-4" />
              </Link>
          </div>
        </div>
     </section>
     <About/>
      {/* CV Section */}
          <div className="mt-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2 justify-center md:justify-start">
                  <Download className="w-6 h-6 text-purple-400" />
                  Professional Resume
                </h3>
                <p className="text-gray-300">
                  Download my complete CV to learn more about my experience, education, and achievements.
                </p>
              </div>
               <Link
              href="/Alina CV.pdf"
              className="px-8 py-3 border-2 border-pink-400 rounded-full font-semibold hover:bg-pink-400/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"> Download CV
              <Download className="w-4 h-4" />
              </Link>
            </div>
          </div>
     <Projects/>
          {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Technical Skills</h3>
              <div className="space-y-4">
                {skills.technical.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-pink-300">Soft Skills</h3>
              <div className="space-y-4">
                {skills.soft.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-pink-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-pink-500 to-purple-500 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
      </section>
      <Contact/>
      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/10">
        <p className="text-gray-400">
          © 2025 Hafiza Alina Yasmeen. Crafted with passion and purpose.
        </p>
      </footer>
    </div>
              )
}