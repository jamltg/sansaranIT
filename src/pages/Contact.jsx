import ContactAddress from '../components/ContactAddress';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

export default function Contact() {
  return (
    <div className="bg-white px-4 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-stretch gap-12">
        <div className="flex flex-col-reverse justify-between gap-6 md:flex-col md:w-1/2 w-full md:py-4">
          <div className="mb-6 md:mb-8">
            <ContactForm />
          </div>
          <div className="text-gray-600">
            <ContactAddress />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:py-4 flex flex-grow">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
