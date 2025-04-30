const ReceptionSection = () => {
  // const handleClick = (longitude: string, latitude: string) => {
  //   const userAgent = navigator.userAgent;
  //   let mapsUrl = "";

  //   if (/iPhone|iPad|iPod/i.test(userAgent)) {
  //     // Use Apple Maps for iOS devices
  //     mapsUrl = `https://maps.apple.com/?ll=${latitude},${longitude}&q=${latitude},${longitude}&mark=${latitude},${longitude}`;
  //   } else if (/Android/i.test(userAgent)) {
  //     // Use geo: scheme for Android devices
  //     mapsUrl = `geo:${latitude},${longitude}?q=${latitude},${longitude}`;
  //   } else {
  //     // Use Google Maps for desktop
  //     mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  //   }

  //   window.open(mapsUrl, "_blank");
  // };

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
          <h2 className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-leJour text-[#8B4513] mb-8">
            Reception
          </h2>
          <div className="space-y-3 text-[#8B4513] font-cormorant-garamond-regular text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl">
            <p>When: May 26, 2025 at 12:30 PM</p>
            <p>
              Where: 125<sup>th</sup> Jubilee Parish Hall, Peramangalam
            </p>
          </div>
          {/* <div className="mt-6">
            <h3
              className="text-xl font-cormorant-garamond-regular text-[#8B4513] border-b border-[#8B4513] border-dotted inline-block cursor-pointer"
              onClick={() =>
                handleClick("76.1616918603015", "10.575071176405423")
              }
            >
              LOCATION
            </h3>
          </div> */}
        </div>
        {/* Right side image */}
        <div className="aspect-[4/3] md:mt-0 mt-8">
          <img
            src="/IMG_1648.jpg"
            alt="Couple walking"
            className="w-full h-full object-cover object-top"
            style={{ objectPosition: "center 25%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ReceptionSection;
