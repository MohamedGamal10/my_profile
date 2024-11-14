import React from 'react';
import { Briefcase } from 'lucide-react';

export const Timeline = () => {
  const experiences = [
    {
      title: "Senior AI and Automation Engineer",
      company: "Telecom Egypt WE",
      period: "2022 - Present",
      description: `•Spearheaded the development of AI and ML models tailored to the LTE network, focused on business insights and performance improvement.
                    •Led initiatives to monitor, analyze, and address data drift and model performance to ensure continuous optimization.
                    •Designed and implemented advanced simulations and experiments to address network performance issues.
                    •Directed the development of automation tools for network monitoring and operational tasks.
                    •Played a key role in automating business operations and enhancing network management efficiency.
                    •Provided strategic insights based on data-driven analysis, contributing to higher-level decision-making processes.`,
      logo: "/We_logo.svg"
    },
    {
      title: "Software Engineer",
      company: "Telecom Egypt WE",
      period: "2020 - 2022",
      description: `•Designed and developed software solutions to improve network monitoring and business operations.
                    •Built automation tools to support the efficient operation of the LTE network.
                    •Contributed to the development of ML and AI models aimed at improving network performance and KPIs.
                    •Developed in-depth dashboards to support decision-making and identify opportunities for network improvements.
                    •Collaborated with the technology team to prioritize data assets and set requirements for data sourcing.`,
      logo: "/We_logo.svg"
    },
    {
      title: "Mobile NOC Engineer",
      company: "Telecom Egypt WE",
      period: "2019 - 2020",
      description: `•Solved LTE network issues by collecting and analyzing large datasets to identify network performance problems.
                    •Provided troubleshooting and root cause analysis to ensure network stability and optimal performance.
                    •Worked with cross-functional teams to monitor and maintain LTE network infrastructure.
                    •Assisted in real-time network monitoring and incident response.`,
      logo: "/We_logo.svg"
    },

    {
      title: "Data Analytics Engineer",
      company: "Z2Data",
      period: "2018 - 2019",
      description: `•Developed Automate tools to scrape HTS & ECCN Code for any electronics.
                    •Performed analysis on Product Change Notification for electronics components.
                    •Performed further analysis on electronics components manufacturing location.
                    •Prepared reports based on analysis and presenting to management.`,
      logo: "/Z2Data.png"
    },


  ];

  return (
    <div className="max-w-4xl mx-auto">
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-8 pb-8">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
          <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4 mb-2">
              <img 
                src={exp.logo} 
                alt={exp.company}
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
            <p className="text-gray-700" style={{ whiteSpace: 'pre-line' }}>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
