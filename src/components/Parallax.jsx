import parallax from '../assets/parallax.webp';

export default function Parallax() {
  return (
    <div
      className="relative h-[250px] bg-fixed bg-center bg-cover md:h-[325px]"
      style={{ backgroundImage: `url(${parallax})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center px-4 leading-[2.5rem]">
          Tailored IT solutions that move your business forward.
        </h2>
      </div>
    </div>
  );
}
