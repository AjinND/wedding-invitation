const BigDaySection = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: "url('/date_background.png')",
      }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16">
        {/* Left side content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-leJour text-[#8B4513] mb-12">
            The Big Day
          </h2>
          <div className="space-y-4 text-[#8B4513] font-cormorant-garamond-regular text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl">
            <p>When: May 26, 2025 at 12:00 PM</p>
            <p>Where: St. Mary&apos;s Church, Peramangalam</p>
            <p>What: Come in cocktail attire!</p>
          </div>
        </div>
        {/* Right side image */}
        <div className="aspect-[4/3] mt-8 md:mt-0">
          <img
            src="/main_photo.png"
            alt="Couple with pet"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BigDaySection;