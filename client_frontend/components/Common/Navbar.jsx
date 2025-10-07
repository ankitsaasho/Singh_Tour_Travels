'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.7); // 70vh
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Tour Packages', path: '/packages' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <>
      {/* Navbar - Always visible, changes style on scroll */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white shadow-lg py-3'
        : 'bg-black/20 backdrop-blur-md py-4'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left Side */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Singh Tour & Travel"
                width={200}
                height={48}
                className={`transition-all duration-300 ${isScrolled ? '' : ''
                  }`}
                priority
              />
            </Link>

            {/* Right Side: Nav Items + Enquiry Button + Toggler */}
            <div className="flex items-center space-x-8">
              {/* Navigation Items - Always visible on desktop */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`font-medium transition-colors duration-300 ${isScrolled
                      ? 'text-gray-800 hover:text-blue-600'
                      : 'text-white hover:text-blue-200'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Enquiry Button */}
             <Button variant='default' size='lg' className={'cursor-pointer bg-sky-600 hover:bg-sky-700'} >Enquire Now</Button>

              {/* Toggler Button */}
              <button
                onClick={() => setIsOffcanvasOpen(true)}
                className={`p-2 rounded-lg transition-colors duration-300 ${isScrolled
                  ? 'text-gray-800 hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
                  }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas Sidebar */}
      <div className={`fixed inset-0 z-50 transition-transform duration-500 ease-in-out ${isOffcanvasOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOffcanvasOpen(false)}
        />

        {/* Sidebar Content */}
        <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
          <div className="flex flex-col h-full">
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between p-6 border-b">
              <Link href="/" onClick={() => setIsOffcanvasOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="Singh Tour & Travel"
                  width={100}
                  height={40}
                />
              </Link>
              <button
                onClick={() => setIsOffcanvasOpen(false)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Items - Show in offcanvas on all screens */}
            <div className="flex-1 overflow-y-auto py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block px-6 py-3 text-gray-800 hover:bg-gray-100 font-medium transition-colors"
                  onClick={() => setIsOffcanvasOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contact Information */}
            <div className="p-6 border-t">
              <h3 className="font-semibold text-gray-900 mb-4">Contact Info</h3>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <Link href="tel:+15551234567" className="text-gray-700 hover:text-blue-600">
                    +1 (555) 123-4567
                  </Link>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <Link href="mailto:info@singhtravel.com" className="text-gray-700 hover:text-blue-600">
                    info@singhtravel.com
                  </Link>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Fresno, California</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                    <span className="text-sm font-semibold">f</span>
                  </Link>
                  <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                    <span className="text-sm font-semibold">t</span>
                  </Link>
                  <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                    <span className="text-sm font-semibold">in</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}