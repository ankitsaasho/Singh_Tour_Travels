"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <Link href="/">MySite</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-gray-300">
              About-Us
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/packages" className="hover:text-gray-300">
              Tour Packages
            </Link>
          </li>
          <li>
            <Link href="/destinations" className="hover:text-gray-300">
              Destinations
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-gray-300">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:text-gray-300">
              Contact-Us
            </Link>
          </li>
          <li>
            <Link href="/enquiry" className="hover:text-gray-300">
              Enquiry
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
