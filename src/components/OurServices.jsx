import { Link } from 'react-router-dom';
import networksupport from '../assets/network-support.jpg';
import projectmanagement from '../assets/project-management.jpg';
import cybersecurity from '../assets/cybersecurity.jpg';

export default function OurServices() {
  return (
    <div className="max-w-screen-xl px-10 py-20 mx-auto">
      <span className="font-semibold text-2xl flex justify-center mb-8 text-center">Our Services</span>
      <div className="flex flex-wrap justify-center gap-8">

        {/* Card 1 */}
        <div className="group bg-white hover:bg-[#1f5175] shadow-md rounded-lg overflow-hidden transition-all duration-300 w-full sm:w-[300px]">
          <img src={networksupport} alt="Network Support" className="w-full h-[200px] sm:h-[220px] md:h-56 object-cover object-top" />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-white">Network Support</h2>
            <p className="text-gray-600 text-sm group-hover:text-white">Our Network Support Service provides remote support to ensure your network's performance, security, and reliability.</p>
            <div className='mt-4 flex items-center space-x-2 text-blue-500 cursor-pointer hover:text-blue-700'>
              <Link to="/services/network-support" className="text-blue-500 text-sm font-medium group-hover:text-white">Learn More</Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group bg-white hover:bg-[#1f5175] shadow-md rounded-lg overflow-hidden transition-all duration-300 w-full sm:w-[300px]">
          <img src={projectmanagement} alt="Project Management" className="w-full h-[200px] sm:h-[220px] md:h-56 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-white">Project Management</h2>
            <p className="text-gray-600 text-sm group-hover:text-white">Our Project Management Service ensures your IT projects are delivered on time, within scope, and within budget.</p>
            <div className='mt-4 flex items-center space-x-2 text-blue-500 cursor-pointer hover:text-blue-700'>
              <Link to="/services/project-management" className="text-blue-500 text-sm font-medium group-hover:text-white">Learn More</Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group bg-white hover:bg-[#1f5175] shadow-md rounded-lg overflow-hidden transition-all duration-300 w-full sm:w-[300px]">
          <img src={cybersecurity} alt="Cyber Security" className="w-full h-[200px] sm:h-[220px] md:h-56 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-white">Cyber Security</h2>
            <p className="text-gray-600 text-sm group-hover:text-white">Our Cyber Security Service ensures that your business follows best practices to protect your data from potential threats.</p>
            <div className='mt-4 flex items-center space-x-2 text-blue-500 cursor-pointer hover:text-blue-700'>
              <Link to="/services/cyber-security" className="text-blue-500 text-sm font-medium group-hover:text-white">Learn More</Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
