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
          <h2 className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-leJour text-[#8B4513] mb-12">
            The Big Day
          </h2>
          <div className="space-y-4 text-[#8B4513] font-cormorant-garamond-regular text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl">
            <p>When: May 26, 2025 at 12:00 PM</p>
            <p>Where: St. Mary&apos;s Church, Peramangalam</p>
            <p>What: Come in cocktail attire!</p>
          </div>
        </div>
        {/* Right side image */}
        <div className="aspect-[4/3] mt-8 md:mt-0">
          <img
            src="/IMG_1667.jpg"
            alt="Couple with pet"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BigDaySection;