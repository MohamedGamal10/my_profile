import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export const ProjectCard = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Developed scalable infrastructure across two AZs with Terraform, including VPC and Auto Scaling Group (ASG), and configured Docker on private instances using Ansible, implementing GitOps for CI/CD automation.",
      tech: ["Terraform", "AWS", "Ansible", "Jenkins"],
      github: "https://github.com/MohamedGamal10/Infrastructure",
      live: "https://www.linkedin.com/posts/mohamedgamal2595_devops-terraform-ansible-activity-7247137192098054144-rhWn/?utm_source=share&utm_medium=member_desktop",
      image: "/project1.jpg"
    },
    {
      title: "Network Analytics and Performance Optimization",
      description: "Developed LTE network monitoring applications for alarm correlation, KPI forecasting, and clustering analysis, along with interactive dashboards for performance evaluation and incident management",
      tech: ["React JS", "PostgreSQL", "Python Fast API", "Docker"],
      github: "https://github.com/MohamedGamal10/Web-Development/tree/master/LTE_AI_Analytics_Tool",
      live: "https://github.com/MohamedGamal10/Web-Development/tree/master/LTE_AI_Analytics_Tool",
      image: "/project2.jpg"
    },
    {
      title: "Automated Deployment Pipeline",
      description: "Develop a pipeline to automate the build, testing, and deployment of a python application. Utilize Jenkins for continuous integration, Docker for containerization, and Ansible for configuration management. Implement automated testing and deployment to a cloud environment GCP GKE.",
      tech: ["Python Flask", "Ansible", "Jenkins", "Kubernates", "GKE"],
      github: "https://github.com/MohamedGamal10/Depi_Project",
      live: "https://www.youtube.com/watch?v=C3xOIpG_Sg0",
      image: "/project3.jpg"
    },
    {
      title: "Bash Shell Script Database Management System (DBMS)",
      description: "Developed a CLI-based DBMS in Bash for managing databases and tables, allowing users to store and retrieve data with validation for column types and primary keys.",
      tech: ["Linux", "Bash Scripting"],
      github: "https://github.com/MohamedGamal10/BashProject_DBMS",
      live: "https://github.com/MohamedGamal10/BashProject_DBMS",
      image: "/project4.jpg"
    },
    {
      title: "Customer Complaints and Field Maintenance Applications",
      description: "Developed applications for front-office operations, including a Customer Complaints DB for tracking issues and a Field Maintenance DB for managing power consumption, site security index, and spare parts.",
      tech: ["React JS", "PostgreSQL", "Python Fast API", "Docker"],
      github: "https://github.com/MohamedGamal10/Web-Development/tree/master/HelpDesk_Application",
      live: "https://github.com/MohamedGamal10/Web-Development/tree/master/HelpDesk_Application",
      image: "/project5.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="col-span-3 relative">
      <div className="flex items-center">
        <button 
          onClick={prevProject}
          className="absolute left-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="w-full overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex p-6 gap-6">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-1/3 h-64 object-cover rounded-lg"
                    />
                    <div className="w-2/3">
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" 
                          className="flex items-center text-gray-600 hover:text-gray-900">
                          <Github className="w-5 h-5 mr-1" />
                          <span>Code</span>
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          className="flex items-center text-gray-600 hover:text-gray-900">
                          <ExternalLink className="w-5 h-5 mr-1" />
                          <span>Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={nextProject}
          className="absolute right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};