
'use client'; // 👈 since you’re using hooks
import { useState } from 'react';
export default function BookingCard() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        tourPackage: '',
        hotelCategory: '',
        startDate: '',
        endDate: '',
        adults: '1',
        children: '0',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Booking form submitted:', formData);
    };

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Plan Your Dream Vacation</h2>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                    Get Quick Quote
                </button>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Form fields remain the same */}
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

                {/* Rest of the form fields... */}
            </form>
        </div>
    );
}