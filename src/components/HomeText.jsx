import laptop from '../assets/laptop.webp'

export default function HomeText() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-[#1f5175] mb-4">Add Info Here</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, iste minus obcaecati aut distinctio officia quas sapiente tempora neque modi sint impedit. Ea nobis velit, iure iste ullam soluta obcaecati.
          </p>
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
