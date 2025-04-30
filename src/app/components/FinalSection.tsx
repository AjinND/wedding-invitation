import { useState, useEffect } from "react";

const FinalSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Images structured to create a layout like the reference image
  const galleryImages = [
    { 
      src: "/IMG_1678-enhanced.jpg", 
      alt: "Couple moment 1", 
      className: "col-span-2 row-span-2" // Large square (top left)
    },
    { 
      src: "/IMG_1661.jpg", 
      alt: "Couple moment 2", 
      className: "col-span-1 row-span-1" // Small square (top middle)
    },
    { 
      src: "/IMG_1638.jpg", 
      alt: "Couple portrait", 
      className: "col-span-1 row-span-1" // Small square (top right)
    },
    { 
      src: "/IMG_1639.jpg", 
      alt: "Together moment", 
      className: "col-span-1 row-span-2" // Rectangle (middle right)
    },
    { 
      src: "/IMG_1643.jpg", 
      alt: "Close up", 
      className: "col-span-1 row-span-1" // Small square (bottom middle)
    },
    { 
      src: "/IMG_1647.jpg", 
      alt: "Full portrait", 
      className: "col-span-1 row-span-1" // Small square (bottom right)
    },
    { 
      src: "/IMG_1685.jpg", 
      alt: "Detail shot", 
      className: "col-span-1 row-span-1" // Small square (middle bottom left)
    },
  ];

  useEffect(() => {
    // Preload images for smooth masonry layout
    const preloadImages = async () => {
      const promises = galleryImages.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = resolve;
          img.onerror = resolve; // Continue even if an image fails to load
        });
      });
      
      await Promise.all(promises);
      setImagesLoaded(true);
    };
    
    preloadImages();
  }, []);

  const handleClick = (longitude: string, latitude: string) => {
    const userAgent = navigator.userAgent;
    let mapsUrl = "";
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      // Use Apple Maps for iOS devices
      mapsUrl = `https://maps.apple.com/?ll=${latitude},${longitude}&q=${latitude},${longitude}&mark=${latitude},${longitude}`;
    } else if (/Android/i.test(userAgent)) {
      // Use geo: scheme for Android devices
      mapsUrl = `geo:${latitude},${longitude}?q=${latitude},${longitude}`;
    } else {
      // Use Google Maps for desktop
      mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    }
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="min-h-screen w-full bg-[#FDF8F5] flex flex-col items-center justify-center space-y-12 px-4 md:px-16 py-16">
      {/* Gallery that matches the reference image layout */}
      <div className={`w-full max-w-6xl transition-opacity duration-700 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-4 gap-2 auto-rows-[100px]">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`${image.className} overflow-hidden rounded hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Final text and location button */}
      <div className="text-center space-y-8 mt-12">
        <h2 className="text-2xl md:text-4xl font-eb-garamond-italic text-[#8B4513] leading-relaxed">
          And so it begins...
        </h2>
        <div className="mt-8 flex flex-col items-center">
          <p className="text-[#8B4513] font-cormorant-garamond-regular text-lg mb-2">Join us at</p>
          <button
            className="group flex items-center space-x-3 border border-[#C4A484] bg-white/80 px-6 py-3 rounded-md text-[#8B4513] font-cormorant-garamond-regular hover:bg-[#C4A484]/10 transition-colors duration-300 shadow-sm hover:shadow"
            onClick={() => handleClick("76.1616918603015", "10.575071176405423")}
          >
            <img
              src="/map.jpg"
              className="w-8 h-8 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Location Icon" 
            />
            <span className="text-lg">View Location</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalSection;