import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 w-full bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm text-gray-700">
        
        <div>
          <h4 className="font-semibold mb-3">Categories</h4>
          <ul className="space-y-2">
            <li>Graphics & Design</li>
            <li>Digital Marketing</li>
            <li>Writing & Translation</li>
            <li>Video & Animation</li>
            <li>Music & Audio</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">About</h4>
          <ul className="space-y-2">
            <li>Careers</li>
            <li>Press & News</li>
            <li>Partnerships</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li>Help & Support</li>
            <li>Trust & Safety</li>
            <li>Selling on Fiverr</li>
            <li>Buying on Fiverr</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Community</h4>
          <ul className="space-y-2">
            <li>Events</li>
            <li>Blog</li>
            <li>Forum</li>
            <li>Affiliates</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">More From Fiverr</h4>
          <ul className="space-y-2">
            <li>Fiverr Pro</li>
            <li>Fiverr Studios</li>
            <li>Fiverr Business</li>
            <li>ClearVoice</li>
            <li>Working Not Working</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t py-6 px-6 flex flex-col sm:flex-row items-center justify-between text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          {/* <img src={Fiver} alt="Fiver" className="h-6" /> */}
          <p>© 2025 Fiverr International Ltd.</p>
        </div>

        <div className="flex gap-4 mt-4 sm:mt-0 text-lg">
          <FaFacebookF className="cursor-pointer hover:text-green-600" />
          <FaTwitter className="cursor-pointer hover:text-green-600" />
          <FaLinkedinIn className="cursor-pointer hover:text-green-600" />
          <FaInstagram className="cursor-pointer hover:text-green-600" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
