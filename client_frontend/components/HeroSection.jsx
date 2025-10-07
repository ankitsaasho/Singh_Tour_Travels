// Home Hero Component
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BookingCard from "./BookingCard"; // make sure you have this component
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/home/slider/home-slider-1.webp',
      title: 'Unforgettable Thailand',
      description: 'Discover Thailand beyond the ordinary. From bustling Bangkok streets to tranquil beaches and ancient temples, embark on a journey full of culture, adventure, and unforgettable memories.'
    },
    {
      image: '/home/slider/home-slider-2.webp',
      title: 'Marvelous Malaysia',
      description: 'Explore Malaysia’s vibrant cities, lush rainforests, and iconic landmarks. Delight in diverse cuisines, rich traditions, and scenic landscapes that promise a journey like no other.'
    },
    {
      image: '/home/slider/home-slider-3.webp',
      title: 'Enchanting Bali',
      description: 'Immerse yourself in Bali’s magical blend of spirituality and natural beauty. Wander through rice terraces, pristine beaches, and sacred temples, creating moments that last a lifetime.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides with Continuous Zoom */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Zoom wrapper */}
          <div className="w-full h-full overflow-hidden relative animate-zoom-continous">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      ))}

      {/* Center Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-5xl mx-auto px-4 transform transition-all duration-1000 ease-out">
          <div
            key={currentSlide} // this ensures animation restarts every slide
            className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4"
          >
            {/* Title with animated letters */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 flex flex-wrap justify-center">
              {slides[currentSlide].title.split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {char === " " ? "\u00A0" : char} {/* preserves spaces */}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl mb-4 font-light opacity-0 animate-fade-up"
              style={{ animationDelay: `${slides[currentSlide].title.length * 100}ms` }}
            >
              {slides[currentSlide].subtitle}
            </p>

            {/* Description */}
            <p
              className="text-lg max-w-2xl mx-auto opacity-0 animate-fade-up"
              style={{ animationDelay: `${slides[currentSlide].title.length * 100 + 300}ms` }}
            >
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex gap-4 justify-center mt-10">
            <Link
              href="/tour-packages"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Packages
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Us
            </Link>
            
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
