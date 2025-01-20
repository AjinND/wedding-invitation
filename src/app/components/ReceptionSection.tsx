const ReceptionSection = () => {
  const handleClick = (longitude: string, latitude: string) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mapsUrl = isMobile
      ? `geo:${latitude},${longitude}`
      : `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(mapsUrl, "_blank");
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: "url('/reception_background.png')", // Pink watercolor background
      }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-4 px-4 md:px-16">
        {/* Left side content - reduced spacing */}
        <div className="flex flex-col justify-center text-center md:text-left md:pr-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-leJour text-[#8B4513] mb-8">
            Reception
          </h2>
          <div className="space-y-3 text-[#8B4513] font-cormorant-garamond-regular text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl">
            <p>When: May 26, 2025 at 12:30 PM</p>
            <p>
              Where: 125<sup>th</sup> Jubilee Parish Hall, Peramangalam
            </p>
          </div>
          <div className="mt-6">
            <h3
              className="text-xl font-cormorant-garamond-regular text-[#8B4513] border-b border-[#8B4513] border-dotted inline-block cursor-pointer"
              onClick={() =>
                handleClick("76.1616278447862", "10.575099556271358")
              }
            >
              LOCATION
            </h3>
          </div>
        </div>
        {/* Right side image */}
        <div className="aspect-[4/3] md:mt-0 mt-8">
          <img
            src="/main_photo.png"
            alt="Couple walking"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ReceptionSection;
