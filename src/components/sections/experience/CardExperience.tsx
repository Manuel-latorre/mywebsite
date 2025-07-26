import React, { type JSX } from 'react';
import Ripple from "@/components/ui/ripple";

interface Technology {
  icon: React.ComponentType<{ width?: number; height?: number }>;
  width?: number;
  height?: number;
}

interface CardExperienceProps {
  company: {
    name: string;
    logo?: string;
    logoAlt?: string;
  };
  location?: string;
  modality: string;
  role: string;
  description: string;
  responsibilities: string[];
  technologies: Technology[];
  className?: string;
  projects?: JSX.Element;
}

export default function CardExperience({
  company,
  location,
  modality,
  role,
  description,
  responsibilities,
  technologies,
  className = "",
  projects
}: CardExperienceProps) {
  return (
    <div className={`border p-4 rounded-2xl bg-gray/10 backdrop-blur-sm ${className}`}>
      <div className="flex items-center gap-3 my-2 justify-between max-sm:flex-col-reverse max-sm:items-start">
        <div className="max-sm:text-xl text-3xl text-neutral-800 dark:text-neutral-200 flex gap-2 max-lg:flex-col">
          {company.logo && (
            <img 
              src={company.logo} 
              alt={company.logoAlt || company.name} 
              className="w-8 h-8 max-lg:hidden" 
            />
          )}
          <span>{company.name}</span>
        </div>
        <div className="flex items-center gap-2">
          {location && (
            <span className="max-sm:text-xs flex items-center gap-2 text-sm backdrop-blur-sm bg-white/10 border border-white/10 px-2 py-0.5 rounded-full w-fit">
              {location}
            </span>
          )}
          <span className="max-sm:text-xs flex items-center gap-2 text-sm backdrop-blur-sm bg-white/10 border border-white/10 px-2 py-0.5 rounded-full w-fit">
            <Ripple /> {modality}
          </span>
        </div>
      </div>
      
      <span className="textgradient text-2xl">
        {role}
      </span>
      
      <p className="max-sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
        {description}
      </p>
      
      <ul className="text-neutral-700 dark:text-neutral-300 space-y-3 mb-4 max-sm:text-sm">
        {responsibilities.map((item: string, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {projects && (
        <div className="flex flex-wrap items-center gap-2">
          {projects}
        </div>
      )}
      
      <div className="flex flex-wrap items-center gap-2">
        {technologies.map((tech, idx) => {
          const IconComponent = tech.icon;
          return (
            <IconComponent 
              key={idx}
              width={tech.width || 37} 
              height={tech.height || 37} 
            />
          );
        })}
      </div>
    </div>
  );
}