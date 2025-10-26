import { Award, Code } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <div>
        <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <Code className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">AI & Technology</h3>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing Agentic AI Development certification at GIAIC, with hands-on experience in OpenAI tools, 
                prompt engineering, and Next.js development. Passionate about building intelligent solutions that solve real-world problems.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <Award className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Healthcare & Education</h3>
              <p className="text-gray-300 leading-relaxed">
                Pursuing Doctor of Physical Therapy at Jinnah Sindh Medical University, with teaching experience in mathematics and sciences. 
                Hafiz-ul-Qur&lsquo;an with strong academic foundations and dedication to continuous learning.
              </p>
            </div>
          </div>
          </div>
        </section>
    </div>
  )
}

export default About