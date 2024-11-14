import React from 'react';

interface SkillCardProps {
  category: string;
  items: Array<{
    name: string;
    logo: string;
  }>;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-4 text-gray-800">{category}</h3>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
            <img 
              src={item.logo} 
              alt={item.name}
              className="w-10 h-10 object-contain"
            />
            <span className="text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};