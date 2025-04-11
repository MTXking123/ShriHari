'use client';

import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6 md:px-20 mt-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Location / Map */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow-md h-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d897267.6195915237!2d76.69732809952252!3d28.54117329203343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0328925a157b%3A0xc7ff2d1da5b409f0!2sShri%20HarI%20Eyecare%20%26%20Laser%20Centre%20%7C%7C%20Eye%20Center%20in%20Delhi%20%7C%7C%20Best%20opthalmologist%20services%20in%20Delhi!5e0!3m2!1sen!2sin!4v1744364091439!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full h-full"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/projects" className="hover:underline">Projects</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
          <p className="mb-4">Follow us on social media for updates and more.</p>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
