const PhotoSection = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <img
        src="/main_photo.png"
        alt="Couple"
        className="w-full h-full object-cover"
      />
      {/* Optional overlay for better text visibility if needed */}
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
};

export default PhotoSection;
