import React from 'react';
import { LuFacebook, LuInstagram } from 'react-icons/lu';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="relative pt-10  md:pt-20 lg:pt-24 px-6 sm:px-4  bg-[#010b41] text-white">
      <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-0 md:px-4 lg:px-8 xl:px-0">
        {/* Book appointment section */}
        <div className="max-w-7xl mx-auto mb-8 md:mb-12 ">
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold  tracking-wide font-inter mb-6 md:mb-8">Book appointment</h2>
          <div className="flex flex-row gap-4 md:gap-10 w-full py-4 md:py-8">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent border-b rounded-md px-4 md:px-6 py-2 text-white placeholder-white/70 focus:outline-none focus:border-white text-sm md:text-base"
            />
            <button className="bg-[#00DC9A] text-white rounded-md px-6 md:px-10 py-2 font-normal sm:ml-auto hover:bg-[#24a88e] transition-all duration-200 text-xs md:text-sm xl:text-sm shrink-0 w-auto">
              Enter email
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-14 xl:gap-20 py-6">
          {/* Logo & tagline */}

          <div className="text-left ">
            <img src="/logos/footerlogo.svg" alt="Bejan Singh Logo" className="w-32 md:w-36 mb-4 mx-0" />
            <p className="text-xs md:text-sm text-[#C7D1E0] mb-6 max-w-xs mx-auto sm:mx-0 font-inter">The ultimate destination for all of your medical needs</p>
            <div className="flex gap-3 justify-start">
              <a href="#" aria-label="Facebook" className="w-8 h-8 border-2 border-[#DFDFDF] rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-xl md:text-xl"><LuFacebook /></span>
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 border-2 border-[#DFDFDF] rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-xl md:text-xl"><RiTwitterXFill /></span>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 border-2 border-[#DFDFDF] rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-xl md:text-xl"><LuInstagram /></span>
              </a>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-4 mt-8 sm:mt-0">
            {/* Explore */}
            <div className="text-left ">
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4 font-jakarta">Explore</h3>
              <ul className="space-y-2 md:space-y-3 text-[#C7D1E0] text-xs md:text-sm font-inter">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Eye care division</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consult & cure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Patient care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
              </ul>
            </div>
            {/* Contact */}
            <div className="text-left">
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4 font-jakarta">Contact</h3>
              <ul className="space-y-2 md:space-y-3 text-[#C7D1E0] text-xs md:text-sm font-inter">
                <li>+923041234567</li>
                <li>favorite@doctor.com</li>
                <li>Glassplace, Near Cool Avenue, Boson</li>
              </ul>
            </div>
          </div>

        </div>
        <div className="text-center text-xs  text-[#C7D1E0] mt-0 md:mt-12 py-8 md:py-10">
          Copyright 2025 Favorite Doctor, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
