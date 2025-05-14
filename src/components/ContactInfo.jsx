import dealImage from "../assets/deal.webp";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <img
        src={dealImage}
        alt="Contact Sansaran IT"
        className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md"
      />

      <div>
        <h2 className="text-2xl font-extrabold text-[#1f5175] mb-2">Let’s Get in Touch</h2>
        <p className="text-gray-700 leading-relaxed">
          Whether you’re looking for reliable IT support or simply have a question, we’d love to hear from you. Fill out the form or contact us directly below.
        </p>
      </div>

      <div className="text-gray-800 space-y-1">
        <p><strong>Phone:</strong> 0203 2398472</p>
        <p><strong>Email:</strong> hello@sansaran-it.co.uk</p>
      </div>

      <div>
        <h3 className="font-semibold text-[#1f5175] mb-2">Opening Hours</h3>
        <ul class="text-gray-700 space-y-1">
          <li class="flex justify-between max-w-[180px] space-x-5"><span>Mon</span><span>8.30am – 5.30pm</span></li>
          <li class="flex justify-between max-w-[180px] space-x-5"><span>Tues</span><span>8.30am – 5.30pm</span></li>
          <li class="flex justify-between max-w-[180px] space-x-5"><span>Wed</span><span>8.30am – 5.30pm</span></li>
          <li class="flex justify-between max-w-[180px] space-x-5"><span>Thurs</span><span>8.30am – 5.30pm</span></li>
          <li class="flex justify-between max-w-[180px] space-x-5"><span>Fri</span><span>8.30am – 5.30pm</span></li>
        </ul>
      </div>
    </div>
  );
}
