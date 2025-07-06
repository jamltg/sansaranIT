import { useEffect, useState } from 'react';
import parallax from '../assets/parallax.webp';

export default function Parallax() {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth >= 500) {
        setBgImage(`url(${parallax})`);
      } else {
        setBgImage('none');
      }
    };

    updateBackground(); // run on load
    window.addEventListener('resize', updateBackground); // run on resize

    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  return (
    <div
      className="relative h-[250px] md:h-[325px] bg-[#1f5175] md:bg-fixed md:bg-center md:bg-cover"
      style={{ backgroundImage: bgImage }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center px-4 leading-[2.5rem]">
          Tailored IT solutions that move your business forward.
        </h2>
      </div>
    </div>
  );
}
