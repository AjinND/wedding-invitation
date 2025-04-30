const PhotoSection = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <img
        src="/IMG_1658-enhanced.jpg"
        alt="Couple"
        className="w-full h-full object-cover object-top"
        style={{ objectPosition: "center 35%" }}
      />
      {/* Optional overlay for better text visibility if needed */}
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
};

export default PhotoSection;
