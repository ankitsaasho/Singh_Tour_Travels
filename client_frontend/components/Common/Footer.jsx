"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pb-5">


      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-15 pb-10">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">
                Singh Tours & Travels
              </h3>
              <p className="text-slate-300 mt-3 leading-relaxed">
                Your trusted partner for unforgettable travel experiences. We craft perfect journeys
                that create lifelong memories.
              </p>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
              <div className="flex gap-3">
                <Link href={'#'}><Image src={'/assets/icons/facebook.png'} alt="facebook" width={'30'} height={'30'} /></Link>
                <Link href={'#'}><Image src={'/assets/icons/yelp.png'} alt="facebook" width={'30'} height={'30'} /></Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-white/30">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/packages", label: "Tour Packages" },
                { href: "/blog", label: "Blogs" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours of Operation */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-white/30"> Hours of Operation</h4>

            <ul className="space-y-2 text-base text-slate-300">
              <li className="flex justify-between">
                <span className="font-medium">Mon - Fri:</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span>10:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span className="text-red-400">Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-white/30">Contact Information</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">(559) 245-1871</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    5633 N Figarden Dr #106<br />Fresno, CA 93722
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">singhtravel17@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">holidays@singhtoursandtravels.com</span>
                </li>
              </ul>
            </div>


          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6 text-center">
          <div className="mt-5 flex justify-center flex-col items-center text-sm">
            <p>California Seller of Travel Registration # 2153920-40</p>
            <p>© 2024 Singh Tour &amp; Travel. All Rights Reserved
            </p>
            <Image src="/assets/icons/wxperts_powerdby.png" alt="wxperts" width={80} height={20} className="mt-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;