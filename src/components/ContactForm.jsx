import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSent(false);
    setIsError(false);

    try {
      const response = await fetch("https://formsubmit.co/fe7cce20e62f035435eb0afe542df67f", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          ...formData,
          _captcha: "false"
        }).toString(),
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      {/* Success Message */}
      {isSent && (
        <div className="p-4 text-green-700 bg-green-100 rounded">
          Your message has been sent successfully!
        </div>
      )}
      {isError && (
        <div className="p-4 text-red-700 bg-red-100 rounded">
          Something went wrong. Please try again later.
        </div>
      )}

      {/* Name Field */}
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Message Field */}
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-1 font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          id="message"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here..."
          className="p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          rows="5"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-white border-2 border-[#1f5175] hover:bg-[#1f5175] text-[#1f5175] hover:text-white font-semibold py-3 px-6 rounded transition"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
