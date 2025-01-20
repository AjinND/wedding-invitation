import React from "react";

const StorySection = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center h-screen bg-cover bg-center bg-no-repeat px-6"
      style={{
        backgroundImage: "url('/story_background.png')",
      }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-eb-garamond-italic text-[#8B4513] mb-24">
        We met in the wrong place <br /> at the right time.
      </h1>
      <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-eb-garamond-italic text-[#8B4513] leading-relaxed max-w-3xl">
        It was a children’s party, of all places. They were probably the only
        single adults in the room, which is why they started talking in the
        first place. They hit it off so well, they didn’t even stay for cake!{" "}
        <span className="italic">(They kind of regretted this, actually.)</span>
      </p>
      <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-eb-garamond-italic text-[#8B4513] leading-relaxed max-w-3xl mt-11">
        Fast forward to a year and a half later. A ring, a sunset, and a
        surprise serenade sealed the deal. They decided to get married, and they
        hope you can be a part of it.
      </p>
      <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-eb-garamond-italic text-[#8B4513] mt-11">
        And please, stay for cake.
      </p>
    </div>
  );
};

export default StorySection;
