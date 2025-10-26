import { Github, ExternalLink } from 'lucide-react'
import React from 'react'

  const projects = [
    {
      id: 1,
      title: 'Anta Al Hayat - Business Website',
      description: 'A professional business website showcasing modern web design and development capabilities. Built with responsive design principles to deliver an exceptional user experience across all devices.',
      technologies: ['Next.js', 'React', 'Tailwind CSS'],
      github: 'https://github.com/alinayasmeen/Anta_Al_Hayat',
      demo: 'https://anta-al-hayat.vercel.app/',
      image: '🚀'
    },
    {
      id: 2,
      title: 'Dynamic Blog Website',
      description: 'A feature-rich dynamic blog platform with CMS integration. Users can view and interact with blog posts seamlessly. Features dynamic content management, rich media support, and responsive design optimized for all devices.',
      technologies: ['Next.js', 'Sanity.io', 'Tailwind CSS', 'Shadcn'],
      github: 'https://github.com/alinayasmeen/blogs',
      demo: 'https://blogs-snowy-beta.vercel.app/',
      image: '📝'
    },
    {
      id: 3,
      title: 'Advanced Password Strength Meter',
      description: 'A secure Streamlit application for creating and evaluating strong passwords. Features comprehensive password analysis, detection of weak patterns, built-in password generator, and session-based history tracking.',
      technologies: ['Python', 'Streamlit', 'Security'],
      github: 'https://github.com/alinayasmeen/Password_Strength_Meter',
      demo: '#',
      image: '🔐'
    },
    {
      id: 4,
      title: 'E-Commerce Website Frontend',
      description: 'A modern e-commerce frontend built for a hackathon assignment. Features 7 pages including Home, All Products, Single Product, Cart, About Us, FAQs, and Contact. Clean, responsive design with intuitive navigation and filtering options.',
      technologies: ['Next.js 15', 'TypeScript', 'Shadcn', 'Figma'],
      github: 'https://github.com/alinayasmeen/E-commerce_website',
      demo: 'https://prismatic-khapse-15b4c9.netlify.app/',
      image: '🛒'
    },
    {
      id: 5,
      title: 'Personal Portfolio',
      description: 'A professional personal portfolio website showcasing my work, skills, and achievements. Built with modern web technologies to create an engaging and responsive user experience.',
      technologies: ['Next.js', 'React', 'Tailwind CSS'],
      github: 'https://github.com/alinayasmeen/personal_portfolio',
      demo: 'https://personal-portfolio-plum-sigma.vercel.app/',
      image: '💼'
    },
    // {
    //   id: 6,
    //   title: 'Project 6',
    //   description: 'Add your project description here. Explain what the project does, technologies used, and key features.',
    //   technologies: ['Python', 'AI/ML', 'TensorFlow'],
    //   github: 'https://github.com/alinayasmeen/project6',
    //   demo: 'https://project6-demo.vercel.app',
    //   image: '🔮'
    // },
    // {
    //   id: 7,
    //   title: 'Project 7',
    //   description: 'Add your project description here. Explain what the project does, technologies used, and key features.',
    //   technologies: ['React', 'Firebase', 'Auth'],
    //   github: 'https://github.com/alinayasmeen/project7',
    //   demo: 'https://project7-demo.vercel.app',
    //   image: '🌟'
    // },
    // {
    //   id: 8,
    //   title: 'Project 8',
    //   description: 'Add your project description here. Explain what the project does, technologies used, and key features.',
    //   technologies: ['Next.js', 'PostgreSQL', 'Prisma'],
    //   github: 'https://github.com/alinayasmeen/project8',
    //   demo: 'https://project8-demo.vercel.app',
    //   image: '🎯'
    // },
    // {
    //   id: 9,
    //   title: 'Project 9',
    //   description: 'Add your project description here. Explain what the project does, technologies used, and key features.',
    //   technologies: ['TypeScript', 'GraphQL', 'Apollo'],
    //   github: 'https://github.com/alinayasmeen/project9',
    //   demo: 'https://project9-demo.vercel.app',
    //   image: '🏆'
    // }
  ];


const Projects = () => {
  return (
    <div>
          <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            A showcase of my work in AI development, web applications, and innovative solutions. 
            Each project represents my commitment to quality and innovation.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-400/50 hover:scale-105 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg rounded-lg transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/alinayasmeen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border-2 border-purple-400 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects