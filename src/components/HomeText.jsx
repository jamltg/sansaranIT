import laptop from '../assets/laptop.webp'

export default function HomeText() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-extrabold text-[#1f5175] mb-4 text-center md:text-left">Why Choose Us?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-justify">
            Sansaran IT is a trusted, go-to partner for supporting SMEs with their evolving business needs.
            We pride ourselves on responsive communication, a practical, solutions-focused approach, and a strong understanding of the challenges businesses face.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">From IT infrastructure and software support to strategic guidance, Sansaran IT delivers reliable, efficient, and tailored solutions—helping SMEs operate smoothly and grow with confidence.</p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <div className="w-full sm:w-[320px] max-h-[220px] sm:max-h-[240px] md:max-h-[500px] overflow-hidden rounded shadow-md">
            <img
              src={laptop}
              alt="Laptop"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
