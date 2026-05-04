import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0b0031] via-[#1a0047] to-black text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF653F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF653F] rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                <h2 className="font-bold text-3xl md:text-4xl">
                  <span className="bg-gradient-to-r from-[#FF653F] to-[#FF8555] bg-clip-text text-transparent">Tiles</span>
                  <span className="text-white ml-2">Gallery</span>
                </h2>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed">
                Discover premium ceramic and porcelain tiles that transform your space. Quality, style, and elegance in every piece.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Follow Us</p>
              <div className="flex gap-4">
                <Link href="#" className="bg-white/10 hover:bg-[#FF653F] p-3 rounded-lg transition-all duration-300 hover:scale-110">
                  <FaFacebookSquare className="text-xl" />
                </Link>
                <Link href="#" className="bg-white/10 hover:bg-[#FF653F] p-3 rounded-lg transition-all duration-300 hover:scale-110">
                  <FaSquareXTwitter className="text-xl" />
                </Link>
                <Link href="#" className="bg-white/10 hover:bg-[#FF653F] p-3 rounded-lg transition-all duration-300 hover:scale-110">
                  <IoLogoLinkedin className="text-xl" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg pb-3 border-b-2 border-[#FF653F] inline-block">
              COLLECTIONS
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/all-tiles" className="hover:text-[#FF653F] hover:translate-x-1 transition-all inline-flex items-center gap-2">
                <span className="text-[#FF653F]">→</span> Browse All
              </Link></li>
              <li><Link href="/" className="hover:text-[#FF653F] hover:translate-x-1 transition-all inline-flex items-center gap-2">
                <span className="text-[#FF653F]">→</span> Home
              </Link></li>
              <li><Link href="/my-profile" className="hover:text-[#FF653F] hover:translate-x-1 transition-all inline-flex items-center gap-2">
                <span className="text-[#FF653F]">→</span> My Profile
              </Link></li>
              <li className="hover:text-[#FF653F] transition-colors cursor-pointer hover:translate-x-1 inline-flex items-center gap-2">
                <span className="text-[#FF653F]">→</span> Latest News
              </li>
            </ul>
          </div>

          {/* Showrooms */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg pb-3 border-b-2 border-[#FF653F] inline-block">
              SHOWROOMS
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-[#FF653F] transition-colors cursor-pointer">
                📍 Dhaka
              </li>
              <li className="hover:text-[#FF653F] transition-colors cursor-pointer">
                📍 Chittagong
              </li>
              <li className="hover:text-[#FF653F] transition-colors cursor-pointer">
                📍 Sylhet
              </li>
              <li className="hover:text-[#FF653F] transition-colors cursor-pointer">
                📍 Khulna
              </li>
              <li className="hover:text-[#FF653F] transition-colors cursor-pointer">
                📍 Rajshahi
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg pb-3 border-b-2 border-[#FF653F] inline-block">
              CONTACT
            </h3>
            <div className="text-sm text-gray-300 space-y-4">
              <div className="hover:translate-x-1 transition-transform">
                <p className="font-semibold text-white mb-1">☎️ Hotline</p>
                <p className="text-sm">+88 0165588 00-1058</p>
              </div>
              <div className="hover:translate-x-1 transition-transform">
                <p className="font-semibold text-white mb-1">📧 Email</p>
                <p><Link href="mailto:tilesgallery@gmail.com.bd" className="hover:text-[#FF653F] transition-colors">tilesgallery@gmail.com.bd</Link></p>
              </div>
              <div className="hover:translate-x-1 transition-transform">
                <p className="font-semibold text-white mb-1">🏭 Factory</p>
                <p className="text-sm">Gazipur, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-12"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-400">
          <div className="text-center md:text-left">
            <p>© 2024 Tiles Gallery. All rights reserved. | Crafted with <span className="text-[#FF653F]">❤️</span></p>
          </div>
          <div className="flex gap-8 flex-wrap justify-center">
            <Link href="#" className="hover:text-[#FF653F] transition-colors font-medium">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#FF653F] transition-colors font-medium">Terms & Conditions</Link>
            <Link href="#" className="hover:text-[#FF653F] transition-colors font-medium">Sitemap</Link>
          </div>
        </div>

        {/* Premium Badge */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-white/5 border border-[#FF653F]/30 rounded-full px-6 py-2 text-xs font-semibold text-[#FF653F] uppercase tracking-widest">
            ✓ Certified Premium Quality
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


