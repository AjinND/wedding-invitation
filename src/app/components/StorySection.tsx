import React from "react";

const StorySection = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center h-screen bg-cover bg-center bg-no-repeat px-6"
      style={{
        backgroundImage: "url('/story_background.png')",
      }}
    >
      {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-eb-garamond-italic text-[#8B4513] mb-24">
        We met in the wrong place <br /> at the right time.
      </h1> */}
      <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-eb-garamond-italic text-[#8B4513] leading-relaxed max-w-3xl">
        No amount of time will be sufficing enough to celebrate our union. This is just the beginning of a
        lifetime filled with love, happiness and memories with blessings from above. May the love that brought
        us together remain forever in our heart and may the bond that we share give us strength when we apart
      </p>
      <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-eb-garamond-italic text-[#8B4513] leading-relaxed max-w-3xl mt-11">
        We're tying the knot and would love for you to be there to celebrate with us. Choose a 
        seat, not a side, you are loved by both bride and groom.
      </p>
      <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-eb-garamond-italic text-[#8B4513] mt-11">
        And please, stay for cake.
      </p>
    </div>
  );
};

export default StorySection;
