'use client';
import { useState, useEffect, memo } from "react";
import Image from "next/image";

// Define the image type
type GalleryImage = {
  src: string;
  alt: string;
  className: string;
  mobileClassName: string; // Added mobile-specific classes
  width: number;
  height: number;
};

// Memoized image component to prevent unnecessary re-renders
const GalleryImageItem = memo(({ image, onClick, isMobile }: { 
  image: GalleryImage; 
  onClick: () => void;
  isMobile: boolean;
}) => (
  <div 
    className={`${isMobile ? image.mobileClassName : image.className} overflow-hidden rounded hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer`}
    onClick={onClick}
  >
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className="w-full h-full object-cover"
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
    />
  </div>
));

GalleryImageItem.displayName = 'GalleryImageItem';

// Memoized modal component
const ImageModal = memo(({ image, onClose }: { 
  image: GalleryImage | null; 
  onClose: () => void;
}) => {
  if (!image) return null;
  
  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-transparent backdrop-blur-md" />
      
      <div className="relative z-10 max-w-4xl max-h-screen p-4 transform transition-all duration-300">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width * 2}
          height={image.height * 2}
          className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          priority
        />
        <button
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white bg-opacity-80 rounded-full text-gray-800 hover:bg-opacity-100 transition-all duration-300"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
});

ImageModal.displayName = 'ImageModal';

// Add CSS for modal in a separate component to avoid re-renders
const ModalStyles = () => {
  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      html.modal-open::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        z-index: 9000;
        pointer-events: none;
      }
    `;
    
    // Append to document head
    document.head.appendChild(styleElement);
    
    // Clean up
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  return null;
};

const FinalSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if the screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize event listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Images structured to create a layout like the reference image
  const galleryImages: GalleryImage[] = [
    { 
      src: "/IMG_1678-enhanced.jpg", 
      alt: "Couple moment 1", 
      className: "col-span-2 row-span-2", // Large square (top left)
      mobileClassName: "col-span-2 row-span-2", // Keep larger on mobile too
      width: 800,
      height: 800
    },
    { 
      src: "/IMG_1661.jpg", 
      alt: "Couple moment 2", 
      className: "col-span-1 row-span-1", // Small square (top middle)
      mobileClassName: "col-span-1 row-span-1",
      width: 400,
      height: 400
    },
    { 
      src: "/IMG_1638.jpg", 
      alt: "Couple moment 3", 
      className: "col-span-1 row-span-1", // Small square (top right)
      mobileClassName: "col-span-1 row-span-1",
      width: 400,
      height: 400
    },
    { 
      src: "/IMG_03.jpg", 
      alt: "Couple moment 4", 
      className: "col-span-1 row-span-2", // Rectangle (middle right)
      mobileClassName: "col-span-1 row-span-2",
      width: 400,
      height: 800
    },
    { 
      src: "/IMG_1643.jpg", 
      alt: "Couple moment 5", 
      className: "col-span-1 row-span-1", // Small square (bottom middle)
      mobileClassName: "col-span-1 row-span-1",
      width: 400,
      height: 400
    },
    { 
      src: "/IMG_1647.jpg", 
      alt: "Couple moment 6", 
      className: "col-span-1 row-span-1", // Small square (bottom right)
      mobileClassName: "col-span-1 row-span-1",
      width: 400,
      height: 400
    },
    { 
      src: "/IMG_1685.jpg", 
      alt: "Couple moment 7", 
      className: "col-span-1 row-span-1", // Small square (middle bottom left)
      mobileClassName: "col-span-1 row-span-1",
      width: 400,
      height: 400
    },
    { 
      src: "/IMG_01.jpg", 
      alt: "Couple moment 8", 
      className: "col-span-1 row-span-2", // Small square (middle bottom left)
      mobileClassName: "col-span-1 row-span-2",
      width: 400,
      height: 800
    },
    { 
      src: "/IMG_02.jpg", 
      alt: "Couple moment 9", 
      className: "col-span-1 row-span-1", // Small square (middle bottom left)
      mobileClassName: "col-span-1 row-span-1",
      width: 400,
      height: 400
    },
    { 
      src: "/IMG_1639.jpg", 
      alt: "Couple moment 10", 
      className: "col-span-1 row-span-2", // Small square (middle bottom left)
      mobileClassName: "col-span-1 row-span-2",
      width: 400,
      height: 800
    },
  ];

  useEffect(() => {
    // Set images as loaded after a short delay
    // This is more efficient than manually preloading each image
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Open image modal
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    // Add class to html element for full page blur
    document.documentElement.classList.add('modal-open');
  };

  // Close image modal
  const closeModal = () => {
    setSelectedImage(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
    // Remove class from html element
    document.documentElement.classList.remove('modal-open');
  };

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

  // Calculate number of columns based on screen size
  const gridCols = isMobile ? 'grid-cols-2' : 'grid-cols-4';
  const gridRowHeight = isMobile ? 'auto-rows-[120px]' : 'auto-rows-[100px]';
  const paddingX = isMobile ? 'px-2' : 'px-4 md:px-16';

  return (
    <div className={`min-h-screen w-full bg-[#FDF8F5] flex flex-col items-center justify-center space-y-8 md:space-y-12 ${paddingX} py-12 md:py-16`}>
      {/* Add modal styles */}
      <ModalStyles />
      
      {/* Gallery that matches the reference image layout but is responsive */}
      <div className={`w-full max-w-6xl transition-opacity duration-700 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`grid ${gridCols} gap-1 md:gap-2 ${gridRowHeight}`}>
          {galleryImages.map((image, index) => (
            <GalleryImageItem 
              key={index}
              image={image}
              onClick={() => openModal(image)}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      {/* Final text and location button */}
      <div className="text-center space-y-6 md:space-y-8 mt-8 md:mt-12">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-eb-garamond-italic text-[#8B4513] leading-relaxed">
          And so it begins...
        </h2>
        <div className="mt-4 md:mt-8 flex flex-col items-center">
          <p className="text-[#8B4513] font-cormorant-garamond-regular text-base md:text-lg mb-2">Join us at</p>
          <button
            className="group flex items-center space-x-2 md:space-x-3 border border-[#C4A484] bg-white/80 px-4 md:px-6 py-2 md:py-3 rounded-md text-[#8B4513] font-cormorant-garamond-regular hover:bg-[#C4A484]/10 transition-colors duration-300 shadow-sm hover:shadow"
            onClick={() => handleClick("76.1616918603015", "10.575071176405423")}
          >
            <Image
              src="/map.jpg"
              width={32}
              height={32}
              className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Location Icon" 
            />
            <span className="text-base md:text-lg">View Location</span>
          </button>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal image={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default FinalSection;