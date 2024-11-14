import React from 'react';
import { Github, Linkedin, Mail, Terminal, Download } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Timeline } from './components/Timeline';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';
import { CertificationCard } from './components/CertificationCard';

function App() {
  const skills = [
    { 
      category: "Cloud & Infrastructure", 
      items: [
        { name: "AWS", logo: "/aws-512.webp" },
        { name: "Azure", logo: "/Azure.png" },
        { name: "Terraform", logo: "/terraform.png" },
        { name: "Docker", logo: "/docker.webp" },
        { name: "Kubernetes", logo: "/kubernetes.webp" }
      ]
    },
    { 
      category: "CI/CD & Automation", 
      items: [
        { name: "Jenkins", logo: "/jenkins.webp" },
        { name: "GitHub Actions", logo: "/github.webp" },
        { name: "GitLab CI", logo: "/Gitlab.webp" },
        { name: "Ansible", logo: "/Ansible.png" }
      ]
    },
    { 
      category: "Monitoring & Logging", 
      items: [
        { name: "Prometheus", logo: "/Prometheus.png" },
        { name: "Grafana", logo: "/Grafana.png" },
        { name: "ELK Stack", logo: "/ELK.png" },
        { name: "CloudWatch", logo: "/cloudWatch.webp" }
      ]
    },
    { 
      category: "Programming", 
      items: [
        { name: "Python", logo: "/python.webp" },
        { name: "Bash", logo: "/bashshell.png" },
        { name: "JavaScript", logo: "/js.webp" },
        { name: "YAML", logo: "/YAML.png" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Terminal className="w-10 h-10 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold">DevOps Engineer</h2>
            </div>
            <h1 className="text-4xl font-bold mb-4">Mohamed Gamal</h1>
            <p className="text-xl text-gray-300 mb-8">
              Transforming Development workflows and Optimizing Infrastructure for Scalable Solutions
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center">
                Contact Me
              </a>
              <a href="#projects" className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center">
                View Projects
              </a>
              <a 
                href="/MohamedGamal-DevOpsEngineer.pdf" 
                download 
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
              src = "/my_image-EDIT.jpg"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-blue-400 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            <p>
              Experienced DevOps Engineer with expertise in designing and implementing CI/CD pipelines, 
              managing cloud infrastructure, and optimizing development workflows. Passionate about automation, 
              scalability, and maintaining high-availability systems.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
          <Timeline />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <SkillCard key={index} {...skillGroup} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <ProjectCard />
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
          <CertificationCard />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col space-y-6">
              <a href="mailto:mohamedgamal2595@gmail.com" className="flex items-center justify-center space-x-3 bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-lg transition-colors">
                <Mail className="w-6 h-6" />
                <span>Mail</span>
              </a>
              <a href="https://www.linkedin.com/in/mohamedgamal2595/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-lg transition-colors">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/MohamedGamal10" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-lg transition-colors">
                <Github className="w-6 h-6" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;