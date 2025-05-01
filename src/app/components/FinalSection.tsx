'use client';
import { useState, useEffect, memo } from "react";
import Image from "next/image";

// Define the image type
type GalleryImage = {
  src: string;
  alt: string;
  className: string;
  width: number;
  height: number;
};

// Memoized image component to prevent unnecessary re-renders
const GalleryImageItem = memo(({ image, onClick }: { 
  image: GalleryImage; 
  onClick: () => void;
}) => (
  <div 
    className={`${image.className} overflow-hidden rounded hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer`}
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
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      
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
  
  // Images structured to create a layout like the reference image
  const galleryImages: GalleryImage[] = [
    { 
      src: "/IMG_1678-enhanced.jpg", 
      alt: "Couple moment 1", 
      className: "col-span-2 row-span-2", // Large square (top left)
      width: 800,
      height: 800
    },
    { 
      src: "/IMG_1661.jpg", 
      alt: "Couple moment 2", 
      className: "col-span-1 row-span-1", // Small square (top middle)
      width: 400,
      height: 400
    },
    { 
      src: "/IMG_1638.jpg", 
      alt: "Couple moment 3", 
      className: "col-span-1 row-span-1", // Small square (top right)
      width: 400,
      height: 400
    },
    { 
      src: "/IMG_1639.jpg", 
      alt: "Couple moment 4", 
      className: "col-span-1 row-span-2", // Rectangle (middle right)
      width: 400,
      height: 800
    },
    { 
      src: "/IMG_1643.jpg", 
      alt: "Couple moment 5", 
      className: "col-span-1 row-span-1", // Small square (bottom middle)
      width: 400,
      height: 400
    },
    { 
      src: "/IMG_1647.jpg", 
      alt: "Couple moment 6", 
      className: "col-span-1 row-span-1", // Small square (bottom right)
      width: 400,
      height: 400
    },
    { 
      src: "/IMG_1685.jpg", 
      alt: "Couple moment 7", 
      className: "col-span-1 row-span-1", // Small square (middle bottom left)
      width: 400,
      height: 400
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

  return (
    <div className="min-h-screen w-full bg-[#FDF8F5] flex flex-col items-center justify-center space-y-12 px-4 md:px-16 py-16">
      {/* Add modal styles */}
      <ModalStyles />
      
      {/* Gallery that matches the reference image layout */}
      <div className={`w-full max-w-6xl transition-opacity duration-700 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-4 gap-2 auto-rows-[100px]">
          {galleryImages.map((image, index) => (
            <GalleryImageItem 
              key={index}
              image={image}
              onClick={() => openModal(image)}
            />
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
            <Image
              src="/map.jpg"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Location Icon" 
            />
            <span className="text-lg">View Location</span>
          </button>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal image={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default FinalSection;