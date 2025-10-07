"use client";
import { useState } from 'react';
import Link from 'next/link';
import SectionHeading from './SectionHeading';

export default function AboutSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        // Handle form submission
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Your Trip</h3>
                        <p className="text-gray-600 mb-6">Get your personalized tour package quote</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Tour Package</label>
                                    <select
                                        name="tourPackage"
                                        value={formData.tourPackage}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select Package</option>
                                        <option value="singapore-malaysia">Singapore & Malaysia</option>
                                        <option value="bali-singapore">Bali & Singapore</option>
                                        <option value="thailand-malaysia">Thailand & Malaysia</option>
                                        <option value="phuket-singapore">Phuket & Singapore</option>
                                        <option value="custom">Custom Package</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Hotel Category</label>
                                    <select
                                        name="hotelCategory"
                                        value={formData.hotelCategory}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="3star">3 Star</option>
                                        <option value="4star">4 Star</option>
                                        <option value="5star">5 Star</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                                    <input
                                        type="date"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Adults</label>
                                    <select
                                        name="adults"
                                        value={formData.adults}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                            <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Children</label>
                                    <select
                                        name="children"
                                        value={formData.children}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {[0, 1, 2, 3, 4, 5].map(num => (
                                            <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Any special requirements or preferences..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Get Quote Now
                            </button>
                        </form>
                    </div>

                    {/* Right Side - About Content */}
                    <div className="space-y-6">
                        <SectionHeading
                            heading="About Our Agency"
                            align='left'
                            subheading="Your Trusted Travel Partner Since 2010"
                        />

                        <p className="text-lg text-gray-600 leading-relaxed">
                            At <span className="font-semibold text-blue-600">Singh Tour & Travel</span>, we've been crafting unforgettable journeys for over a decade. As an IATA certified agency, we bring you the best of Southeast Asia with personalized service and expert guidance.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="bg-green-100 p-2 rounded-full mt-1">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">IATA Certified</h4>
                                    <p className="text-gray-600">Recognized by International Air Transport Association</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="bg-green-100 p-2 rounded-full mt-1">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">10,000+ Happy Travelers</h4>
                                    <p className="text-gray-600">Satisfied customers across Southeast Asia</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="bg-green-100 p-2 rounded-full mt-1">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">50+ Destinations</h4>
                                    <p className="text-gray-600">Expert coverage across Thailand, Malaysia, Singapore & Bali</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">14+</div>
                                <div className="text-sm text-gray-600">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">50+</div>
                                <div className="text-sm text-gray-600">Tour Packages</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">24/7</div>
                                <div className="text-sm text-gray-600">Customer Support</div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                            >
                                Learn More About Us
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}