export default function Footer() {
  return (
    <footer className="text-white bg-black py-16 px-10 pt-36  md:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 ">
            WE WOULD<br />LOVE TO HEAR<br />FROM YOU.
          </h1>
          <button className="mt-4 bg-[#E0FF00] text-black font-bold px-6 py-3 rounded-full shadow-md hover:shadow-[#E0FF00]/50 hover:scale-105 transition-all flex items-center gap-2">
            CONTACT US 
          </button>
        </div>

        {/* Sitemap */}
        <div>
          <h2 className="text-[#E0FF00] font-semibold mb-4">About Section</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">About GeoPress</li>
            <li className="hover:text-white cursor-pointer">Mission & Vision</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Team</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-[#E0FF00] font-semibold mb-4">Features / Product</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Live Updates</li>
            <li className="hover:text-white cursor-pointer">Map Integration</li>
            <li className="hover:text-white cursor-pointer">Compliance</li>
            <li className="hover:text-white cursor-pointer">Safety Alerts</li>
            <li className="hover:text-white cursor-pointer">NLP Technology</li>
          </ul>
        </div>

        {/* Social + Disclaimer */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div>
            <h2 className="text-[#E0FF00] font-semibold mb-4">Legal / Policy</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Data Usage Policy</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[#E0FF00] font-semibold mb-4">Follow Us</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white font-semibold cursor-pointer">Twitter (X)</li>
              <li className="hover:text-white font-semibold cursor-pointer">LinkedIn</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
              <li className="hover:text-white cursor-pointer">YouTube</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
