import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#030B2C] text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & tagline */}
        <div>
          <img src="/logos/navlogo.svg" alt="Bejan Singh Logo" className="w-36 mb-4" />
          <p className="text-sm text-[#C7D1E0] mb-6">The ultimate destination for all of your medical needs</p>
          <div className="flex gap-5 mt-2">
            <a href="#" aria-label="Facebook">
              <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
        {/* Explore */}
        <div>
          <h3 className="font-bold text-lg mb-4">Explore</h3>
          <ul className="space-y-2 text-[#C7D1E0] text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">Surgery</a></li>
            <li><a href="#">OPD</a></li>
            <li><a href="#">Speciality</a></li>
            <li><a href="#">Consultation</a></li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="space-y-2 text-[#C7D1E0] text-sm">
            <li><a href="#">Who we are</a></li>
            <li><a href="#">Our Vision</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-[#C7D1E0] text-sm">
            <li>+923041234567</li>
            <li>favorite@doctor.com</li>
            <li>Glassplace, Near<br />Cool Avenue, Boson</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-[#C7D1E0] mt-10">
        Copyright 2025 Favorite Doctor, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
