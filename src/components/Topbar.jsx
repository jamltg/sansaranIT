export default function Topbar() {
  return (
    <div className="h-14 md:h12 bg-[#1f5175] text-white px-10">
      <div className="max-w-[1200px] mx-auto h-full w-full flex flex-col gap-2 items-center justify-center md:flex-row md:justify-between">
        {/* Left Section: Time & Email */}
        <div className="flex flex-col items-center gap-1 md:flex-row md:gap-6 md:ml-0">
          <div className="flex items-center gap-2">
            <i className="fas fa-clock"></i>
            <span className="text-center">Mon - Fri 8:30am - 5:30pm</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <i className="fas fa-map-marker-alt"></i>
            <span>hello@sansaran-it.co.uk</span>
          </div>
        </div>

        {/* Right Section: Icons */}
        <div className="flex gap-4 items-center md:mr-0">
          <a
            href="http://linkedin.com/in/ian-withington"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="tel:+1234567890" className="text-white hover:text-green-500">
            <i className="fas fa-phone fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
