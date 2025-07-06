import dealImage from "../assets/deal.webp";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-between h-full gap-6">
      <img
        src={dealImage}
        alt="Contact Sansaran IT"
        className="w-full object-cover rounded-lg shadow-md"
      />

      <div>
        <h2 className="text-2xl font-extrabold text-[#1f5175] mb-2">Let’s Get in Touch</h2>
        <p className="text-gray-700 leading-relaxed">
          Whether you’re looking for reliable IT support or simply have a question, we’d love to hear from you. Fill out the form or contact us directly below.
        </p>
      </div>

      <div className="text-gray-800 space-y-1">
        <p><strong>Phone:</strong> 0333 335 6402</p>
        <p><strong>Email:</strong> hello@sansaran-it.co.uk</p>
      </div>

      <div>
        <h3 className="font-semibold text-[#1f5175] mb-2">Opening Hours</h3>
        <ul className="text-gray-700 space-y-1">
          <li className="flex justify-between max-w-[200px] space-x-1"><span>Mon</span><span>8.30am – 5.30pm</span></li>
          <li className="flex justify-between max-w-[200px] space-x-1"><span>Tues</span><span>8.30am – 5.30pm</span></li>
          <li className="flex justify-between max-w-[200px] space-x-1"><span>Wed</span><span>8.30am – 5.30pm</span></li>
          <li className="flex justify-between max-w-[200px] space-x-1"><span>Thurs</span><span>8.30am – 5.30pm</span></li>
          <li className="flex justify-between max-w-[200px] space-x-1"><span>Fri</span><span>8.30am – 5.30pm</span></li>
        </ul>
      </div>
    </div>
  );
}
