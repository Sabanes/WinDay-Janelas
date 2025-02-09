import Link from 'next/link';
import { FiInstagram, FiFacebook, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#344CB7] text-white pt-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-center mb-3">
                <FiPhone className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-blue-400">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center mb-3">
                <FiMail className="mr-2" />
                <a href="mailto:info@example.com" className="hover:text-blue-400">info@example.com</a>
              </div>
            </address>
          </div>

          {/* Social Media */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-blue-400 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-blue-400 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white mt-8 py-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Winday. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;