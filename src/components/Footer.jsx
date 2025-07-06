import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1f5175] text-white py-6 px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="flex justify-center text-center">
          Sansaran IT | Registered in England & Wales | CRN 16546813
        </div>
        {/* Links */}
        <div className="flex flex-col justify-center items-center gap-4 lg:flex-row md:justify-between">
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <div className="flex justify-center text-center">
            &copy; {new Date().getFullYear()} Sansaran IT
          </div>
        </div>
      </div>
    </footer>
  );
}
