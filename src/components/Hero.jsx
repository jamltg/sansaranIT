import heroImg from "../assets/hero-img.webp";

const Hero = () => {
  return (
    <div
      className="relative h-[80vh] sm:h-screen bg-cover bg-top sm:bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center px-4">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-white font-bold text-3xl text-center leading-[2.5rem] tracking-wide max-w-lg 
                         sm:text-4xl sm:leading-[4rem] 
                         md:text-5xl md:max-w-xl md:leading-[4.5rem] 
                         lg:text-6xl lg:max-w-full lg:leading-[5rem]">
            Providing Outsourced IT Services, that reduce risks, and lower costs.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
