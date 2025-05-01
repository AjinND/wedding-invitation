import Image from "next/image";

const PhotoSection = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/IMG_1658-enhanced.jpg"
          alt="Couple"
          fill
          priority
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
          className="object-cover"
          style={{ objectPosition: "center 35%" }}
        />
      </div>
      {/* Optional overlay for better text visibility if needed */}
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
};

export default PhotoSection;
