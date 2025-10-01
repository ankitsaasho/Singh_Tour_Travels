"use client";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to MySite</h1>
        <p className="text-xl mb-6">We provide amazing solutions for your business</p>
        <Link
          href="/get-started"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
