"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center space-x-4">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
      <p className="mt-4 text-center">&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
