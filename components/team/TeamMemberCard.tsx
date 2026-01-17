"use client";

import Image from "next/image";
import { NeuCard } from "@/components/ui/neu-card";
import { useEffect, useRef, useState } from "react";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  linkedin: string;
  bio: string;
  skills: string[];
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <NeuCard className="p-8 md:p-10 group hover:shadow-neu-lg transition-all duration-300 hover:scale-[1.02]">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-neu-flat ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300">
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          <span className="text-primary font-semibold text-sm md:text-base mb-4">
            {member.title}
          </span>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group/link"
          >
            <svg className="w-5 h-5 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-sm font-medium">Connect on LinkedIn</span>
          </a>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {member.bio}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {member.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </NeuCard>
    </div>
  );
}
