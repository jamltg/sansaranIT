import networksupport from '../assets/network-support.jpg';
import projectmanagement from '../assets/project-management.jpg';
import cybersecurity from '../assets/cybersecurity.jpg';

export default function OurServices() {
  return (
    <div className="max-w-screen-xl p-10 mx-auto">
      <span className="font-semibold text-2xl flex justify-center mb-8 text-center">Our Services</span>
      <div className="flex flex-wrap justify-center gap-8">

        {/* Card 1 */}
        <div className="group bg-white hover:bg-[#1f5175] shadow-md rounded-lg overflow-hidden transition-all duration-300 w-full sm:w-[300px]">
          <img src={networksupport} alt="Network Support" className="w-full h-[200px] sm:h-[220px] md:h-56 object-cover object-top" />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-white">Network Support</h2>
            <p className="text-gray-600 text-sm group-hover:text-white">Our Network Support Service provides expert remote support to ensure your network's performance, security, and reliability.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group bg-white hover:bg-[#1f5175] shadow-md rounded-lg overflow-hidden transition-all duration-300 w-full sm:w-[300px]">
          <img src={projectmanagement} alt="Project Management" className="w-full h-[200px] sm:h-[220px] md:h-56 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-white">Project Management</h2>
            <p className="text-gray-600 text-sm group-hover:text-white">Our Project Management Service ensures your IT projects are delivered on time, within scope, and within budget.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group bg-white hover:bg-[#1f5175] shadow-md rounded-lg overflow-hidden transition-all duration-300 w-full sm:w-[300px]">
          <img src={cybersecurity} alt="Cyber Security" className="w-full h-[200px] sm:h-[220px] md:h-56 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-white">Cyber Security</h2>
            <p className="text-gray-600 text-sm group-hover:text-white">Our Cyber Security Service ensures that your business follows best practices to protect your data from potential threats.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
