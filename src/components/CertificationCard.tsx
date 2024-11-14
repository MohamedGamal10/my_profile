import React, { useState, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

export const CertificationCard = () => {
  const certifications = [
    {
      name: "Associate Cloud Engineer Certification",
      issuer: "Google Cloud",
      date: "2024",
      image: "/GCP_Cloud_cert.png",
      Link:"https://www.credly.com/earner/earned/badge/8eee049f-196a-452b-bf61-6afa1711f61b"
    },
    {
      name: "AWS Certified Machine Learning – Specialty",
      issuer: "Amazon Web Services",
      date: "2021",
      image: "/AWS_ML_cert.png",
      Link : "https://www.credly.com/badges/770eb63c-db8f-4eec-bcda-5631d6e76f4c"
    },
    {
      name: "Microsoft Certified: Azure Data Scientist Associate",
      issuer: "Microsoft",
      date: "2022",
      image: "/AzureML_cert.png",
      Link:"https://www.credly.com/earner/earned/badge/15f4f898-b9c1-473e-bf1e-db8db5936447"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextCert = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevCert = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <div className="col-span-3 relative">
      <div className="flex items-center">
        <button 
          onClick={prevCert}
          className="absolute left-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="w-full overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {certifications.map((cert, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex p-6 gap-6">
                    <img 
                      src={cert.image}
                      alt={cert.name}
                      className="w-1/3 h-48 object-cover rounded-lg"
                    />
                    <div className="w-2/3">
                      <div className="flex items-center mb-3">
                        <Award className="w-6 h-6 text-blue-500 mr-2" />
                        <h3 className="text-2xl font-bold">{cert.name}</h3>
                      </div>
                      <p className="text-gray-600 text-lg mb-2">{cert.issuer}</p>
                      <p className="text-gray-500">Issued: {cert.date}</p>
                      <p className="text-gray-500"><a href={cert.Link}>Link</a></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={nextCert}
          className="absolute right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {certifications.map((_, index) => (
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