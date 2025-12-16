'use client';

import { LOGO_WHITE } from '@/constants/imagePath';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-16">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center mb-20">
          <Image src={LOGO_WHITE}  alt='logo' width={120} height={100} className='contrast-200'/>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 uppercase text-sm max-w-5xl mx-auto">
          {/* Column 1 */}
          <div>
            <h3 className="text-xs font-helveticaNeue tracking-widest uppercase mb-4 text-white font-light">
              About
            </h3>
            <ul className="space-y-2 font-garamondlight">
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Four Seasons
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Health and Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>



          {/* Column 2 */}
          <div>
            <h3 className="text-xs font-helveticaNeue tracking-widest uppercase mb-4 text-white font-light">
              News
            </h3>
            <ul className="space-y-2 font-garamondlight">
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Press Room
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  New Openings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Magazine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>


          {/* Column 3 */}
          <div>
            <h3 className="text-xs font-helveticaNeue tracking-widest uppercase mb-4 text-white font-light">
              News
            </h3>
            <ul className="space-y-2 font-garamondlight">
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Press Room
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  New Openings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Magazine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xs font-helveticaNeue tracking-widest uppercase mb-4 text-white font-light">
              More
            </h3>
            <ul className="space-y-2 font-garamondlight">
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Private Jet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Yachts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Residences
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Villa & Residence Rentals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white tracking-widest transition-colors italic">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons & Language */}
        <div className="flex md:flex-row justify-between pt-16 pb-2 max-w-5xl mx-auto">
          <div className="flex space-x-6 md:mb-0">
            <a
              href="#"
              className="hover:text-white tracking-widest transition-colors italic"
              aria-label="Facebook"
            >
              {/* <FaFacebook size={16} />
               */} fb
            </a>
            <a
              href="#"
              className="hover:text-white tracking-widest transition-colors italic"
              aria-label="Instagram"
            >
              {/* <BsInstagram size={16} /> */}in
            </a>
            <a
              href="#"
              className="hover:text-white tracking-widest transition-colors italic"
              aria-label="YouTube"
            >
              {/* <BsYoutube size={16} /> */}yt
            </a>
          </div>
          <div><a href="">Learn More</a></div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-5xl mx-auto py-6 px-4 border-t border-gray-800">
        <div className="">
          <div className="flex flex-col gap-3 justify-between text-xs text-gray-200">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              <li>
                <a href="#" className="hover:text-gray-300  font-helveticaNeue tracking-wider">
                  Legal Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300  font-helveticaNeue tracking-wider">
                  Privacy Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300  font-helveticaNeue tracking-wider">
                  Do Not Sell My Personal Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300  font-helveticaNeue tracking-wider">
                  Accessibility Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300  font-helveticaNeue tracking-wider">
                  Modern Slavery Statement
                </a>
              </li>
            </ul>
            <p className="mb-2 md:mb-0 font-garamondlight">
              © The Doorway 1997–2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;