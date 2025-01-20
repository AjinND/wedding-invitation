const FinalSection = () => {
  const handleClick = (longitude: string, latitude: string) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mapsUrl = isMobile
      ? `geo:${latitude},${longitude}`
      : `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="min-h-screen w-full bg-[#FDF8F5] flex flex-col items-center justify-center space-y-12 px-4 md:px-16">
      {/* Gallery */}
      <div className="w-full max-w-6xl grid grid-cols-2 gap-4">
        <img
          src="/main_photo.png"
          alt="Couple moment 1"
          className="w-full aspect-[4/3] object-cover"
        />
        <img
          src="/main_photo.png"
          alt="Couple moment 2"
          className="w-full aspect-[4/3] object-cover"
        />
      </div>

      {/* Final text and button */}
      <div className="text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-eb-garamond-italic text-[#8B4513]">
          And so it begins.
        </h2>
        <button
          className="px-8 py-3 border border-[#C4A484] text-[#8B4513] font-cormorant-garamond-regular hover:bg-[#C4A484]/10 transition-colors duration-300"
          onClick={() => handleClick("76.1616278447862", "10.575099556271358")}
        >
          OPEN LOCATION
        </button>
      </div>
    </div>
  );
};

export default FinalSection;
