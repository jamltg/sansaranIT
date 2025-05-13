import aboutImage from '../assets/about.webp';

export default function AboutText() {
  return (
    <div className="bg-white min-h-[calc(100vh-16.5rem)] flex items-center px-4 py-4 mt-8">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={aboutImage}
                    alt="About Sansaran IT"
                    className='max-w-full h-[250px] sm:h-[300px] md:h-auto shadow-md object-cover object-top'
                />
            </div>
            <div className='w-full md:w-1/2'>
                <h2 className="text-3xl font-bold mb-4 text-[#1f5175]">About Sansaran IT</h2>
                <p className='text-lg text-gray-700 mb-6'>Sansaran IT was founded with a mission to:</p>
                <blockquote className="border-l-4 border-[#1f5175] pl-4 italic text-gray-600 mb-6">
                    “Provide exceptional outsourced IT services, that drive SME growth, reduce risks, and lower costs.”
                </blockquote>
                <p className='text-gray-700'>
                    With over <span className="font-semibold">25 years of combined IT industry experience</span>, we are here to support your business IT needs!
                </p>
            </div>
        </div>
    </div>
  )
}
