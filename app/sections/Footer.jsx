
import { FiInstagram, FiFacebook, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="!bg-[var(--main)] text-white pt-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
 
          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-center mb-3">
                <FiPhone className="mr-2" />
                <a href="tel:+351932825464" className="hover:text-blue-400 underline">+351 932-825-464</a>
              </div>
              <div className="flex items-center mb-3">
                <FiMail className="mr-2" />
                <a href="mailto:nikolaj.spasskij@gmail.com" className="hover:text-blue-400 underline">nikolaj.spasskij@gmail.com</a>
              </div>
            </address>
          </div>

          {/* Social Media */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/winday.pt1?igsh=MWI2Z2EzMnhoeDgzNQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={30} />
              </a>
              <a 
                href="https://www.facebook.com/share/161hRR6WBo/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={30} />
              </a>
            </div>
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