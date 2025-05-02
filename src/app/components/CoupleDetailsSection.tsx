'use client';

import { useState, useEffect, useRef } from "react";

const CoupleDetailsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [photoVisible, setPhotoVisible] = useState([false, false]);
  const photoRefs = [useRef(null), useRef(null)];
  
  useEffect(() => {
    // Set visibility after component mounts for animation
    setIsVisible(true);
    
    // Create IntersectionObserver for photo reveal animations
    const observers = photoRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            // Update state when photo becomes visible
            setPhotoVisible(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            // Disconnect once visible
            observer.disconnect();
          }
        },
        { threshold: 0.3 } // Trigger when 30% of element is visible
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return observer;
    });
    
    // Cleanup observers
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const coupleData = [
    {
        role: "Groom",
        name: "Anns Davis",
        father: "Davis N P",
        mother: "Angela Davis",
        houseName: "Neelankavil House",
        image: "/groom.jpg",
        designation: "S/o",
    },
    {
      role: "Bride",
      name: "Dency Lazar",
      father: "Lazar A K",
      mother: "Beena P A",
      houseName: "Alookaran House",
      image: "/bride.jpg",
      designation: "D/o",
    }
  ];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center py-16"
      style={{
        backgroundImage: "url('/date_background.png')",
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-gistesy text-[#8B4513] mb-16 text-center transform transition-all duration-1000 ease-out" 
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}>
          The Couple
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {coupleData.map((person, index) => (
            <div 
              key={person.role} 
              className="flex flex-col items-center transition-all duration-1000 ease-out"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 0.3}s`
              }}
            >
              <div 
                ref={photoRefs[index]}
                className="relative w-full aspect-[3/4] mb-6 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              >
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-110"
                  style={{
                    opacity: photoVisible[index] ? 1 : 0,
                    transform: photoVisible[index] ? 'scale(1)' : 'scale(0.95)',
                    filter: photoVisible[index] ? 'blur(0)' : 'blur(5px)'
                  }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-70" />
              </div>
              
              <div className="text-center">
                <h3 className="font-gistesy font-bold text-[#8B4513] text-4xl md:text-5xl mb-3">{person.role}</h3>
                <div className="font-cormorant-garamond-regular text-xl md:text-2xl text-[#8B4513] space-y-2">
                  <p className="font-semibold text-2xl md:text-3xl">{person.name}</p>
                  <p>{person.designation} {person.father} & {person.mother}</p>
                  <p>{person.houseName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoupleDetailsSection;
