export default function ServicesIntro({ title, description, image }) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-20">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1f5175] mb-6 transition-all duration-300 hover:text-[#1e3d58]">
          {title}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </div>
      <div className="md:w-1/2">
        <div className="w-full max-h-[400px] rounded overflow-hidden shadow-md">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}
