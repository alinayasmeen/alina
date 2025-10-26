import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div>
            <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let&lsquo;s Connect
          </h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-xl text-gray-300 mb-8">
              I&apos;m always open to discussing new opportunities, collaborations, or simply connecting with like-minded professionals.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:alinayasmeen166@gmail.com"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </a>
              <a 
                href="tel:+923151080765"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Call Me</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/hafiza-alina-yasmeen-9a329a2b0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/alinayasmeen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-700 to-gray-900 p-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 mt-8 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Shah Faisal Colony, Karachi, Pakistan</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact