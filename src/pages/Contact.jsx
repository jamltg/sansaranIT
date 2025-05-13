import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

export default function Contact() {
  return (
    <div className="bg-white px-4 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-start gap-12">
        <div className="md:w-1/2 w-full">
          <ContactForm />
        </div>
        <div className="md:w-1/2 w-full">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
