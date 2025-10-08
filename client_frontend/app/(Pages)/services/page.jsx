'use client'
import InnerBanner from '@/components/InnerBanner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight, Plane,
  Ship,
  Bus,
  Map,
  ShieldCheck,
  Stamp,
  Heart,
  GraduationCap,
  Briefcase,
  Store,
  Gift,
  Users,
  Target,
  Mountain,
} from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const ServicePage = () => {

  const router = useRouter();

  const services = [
    {
      id: 1,
      title: "Airline Tickets",
      description:
        "Singh Tours Travel specializes in providing our customers with the best deals on domestic and international airline tickets.",
      icon: Plane,
      image: "/assets/services/airline.png",
      features: ["Best Price Guarantee", "24/7 Support", "Flexible Booking"],
    },
    {
      id: 2,
      title: "Ocean Cruises",
      description:
        "Luxurious and comfortable way of travel, and passengers can enjoy stunning views of the sea.",
      icon: Ship,
      image: "/assets/services/ocean-cruises.jpg",
      features: ["Luxury Experience", "All-Inclusive Packages", "Onboard Entertainment"],
    },
    {
      id: 3,
      title: "Means of Transport",
      description:
        "Singh tours travel offers a variety of means of transport to get you around your destination safely.",
      icon: Bus,
      image: "/assets/services/transport.jpg",
      features: ["Various Vehicle Types", "Unlimited Mileage", "Insurance Included"],
    },
    {
      id: 4,
      title: "Travel Itineraries",
      description:
        "Our team of experts will take care of all the planning and logistics, providing you with a detailed itinerary.",
      icon: Map,
      image: "/assets/services/itinerary.jpg",
      features: ["Customized Plans", "Local Insights", "Daily Schedules"],
    },
    {
      id: 5,
      title: "Travel Insurance",
      description:
        "Travel insurance is an essential part of any trip, providing peace of mind and protection.",
      icon: ShieldCheck,
      image: "/assets/services/travel-insurance.jpg",
      features: ["Medical Coverage", "Trip Cancellation", "24/7 Assistance"],
    },
    {
      id: 6,
      title: "Visa Services",
      description:
        "Rest assured that your visa application is in good hands with our Visa Services team.",
      icon: Stamp,
      image: "/assets/services/visa-services.jpg",
      features: ["Visa Processing", "Document Guidance", "Status Updates"],
    },
    {
      id: 7,
      title: "Wedding Destinations",
      description:
        "Discover dreamy wedding destinations worldwide. From romantic beaches to historic castles, find the perfect backdrop for your special day.",
      icon: Heart,
      image: "/assets/services/wedding-destinations.jpg",
      features: ["Scenic Venues", "Custom Packages", "Honeymoon Support"],
    },
    {
      id: 8,
      title: "College Students Group Tour",
      description:
        "Embark on an unforgettable journey with our exclusive College Student Group Tour.",
      icon: GraduationCap,
      image: "/assets/services/student-tour.jpg",
      features: ["Budget Friendly", "Group Discounts", "Fun Itineraries"],
    },
    {
      id: 9,
      title: "Corporate Travel",
      description:
        "Corporate travel is an essential aspect of business operations, allowing employees to travel for meetings, conferences, and other activities.",
      icon: Briefcase,
      image: "/assets/services/corporate-travel.jpg",
      features: ["Corporate Rates", "Business Support", "Flexible Scheduling"],
    },
    {
      id: 10,
      title: "Exhibitions & Trade Fairs",
      description:
        "Exhibitions and Trade Fairs are essential events for businesses looking to showcase their products and services to a wider audience.",
      icon: Store,
      image: "/assets/services/exhibitions.jpg",
      features: ["Booth Setup Support", "Logistics", "Event Coverage"],
    },
    {
      id: 11,
      title: "Incentive Travel",
      description:
        "Incentive travel is a powerful tool used by companies to motivate and reward their employees for achieving set goals and targets.",
      icon: Gift,
      image: "/assets/services/incentive-travel.jpg",
      features: ["Motivational Rewards", "Team Packages", "Unique Destinations"],
    },
    {
      id: 12,
      title: "Conference & Meeting",
      description:
        "We are pleased to offer a variety of options to meet your needs for gatherings, whether they be small meetings or large conferences.",
      icon: Users,
      image: "/assets/services/conference.jpg",
      features: ["Venue Booking", "AV Equipment", "Catering Options"],
    },
    {
      id: 13,
      title: "Corporate Group Tour",
      description:
        "Our experienced team will work closely with you to create a customized itinerary that meets your specific needs and objectives.",
      icon: Target,
      image: "/assets/services/corporate-group-tour.jpg",
      features: ["Tailored Groups", "Executive Support", "Team Building"],
    },
    {
      id: 14,
      title: "Adventure Trips",
      description:
        "Explore breathtaking landscapes, immerse yourself in local cultures, and create unforgettable memories.",
      icon: Mountain,
      image: "/assets/services/adventure-trips.jpg",
      features: ["Trekking", "Guided Tours", "Safety Gear Included"],
    },
  ];
  return (
    <>
      <InnerBanner Title={'Our Services'} />

      <section className='section-padding bg-gray-50/50'>
        <div className='container'>
          <div className='text-center mb-16'>
            <Badge variant="secondary" className='mb-4 text-sm font-semibold'>
              What We Offer
            </Badge>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Comprehensive Travel Solutions
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              From flights to complete vacation packages, we provide end-to-end travel services tailored to your needs.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={service.id}
                  className='group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:border-primary/20 cursor-pointer py-0 pb-5 overflow-hidden gap-0'
                >
                  <div className='relative overflow-hidden'>
                    <div className='absolute top-4 left-4 z-10'>
                      <div className='bg-primary/90 text-white p-2 rounded-lg shadow-lg'>
                        <IconComponent className='w-5 h-5' />
                      </div>
                    </div>

                    <div className='h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden'>
                      <div className='absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300 flex' />
                      <Image
                        src={service.image}
                        fill
                        alt={service.title}
                        className='relative z-5 transition-transform duration-300 group-hover:scale-110 flex'
                      />
                    </div>
                  </div>

                  <CardHeader className='pb-3 pt-4'>
                    <h3 className='text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300'>
                      {service.title}
                    </h3>
                  </CardHeader>

                  <CardContent className='pt-0'>
                    <p className='text-gray-600 mb-4 line-clamp-3'>
                      {service.description}
                    </p>

                    <div className='space-y-2 mb-4'>
                      {service.features.map((feature, index) => (
                        <div key={index} className='flex items-center text-sm text-gray-500'>
                          <div className='w-1.5 h-1.5 bg-primary rounded-full mr-2' />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button className='w-full group/btn cursor-pointer' onClick={() => router.push('/enquiry')}>
                      Enquiry Now
                      <ArrowRight className='ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1' />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className='mt-16 bg-gradient-to-r from-sky-800 to-white rounded-2xl p-8 text-center text-white'
>
            <h3 className='text-2xl font-bold mb-4'>
              Need a Custom Travel Package?
            </h3>
            <p className='text-white/90 mb-6 max-w-2xl mx-auto'>
              Let us create a personalized itinerary that matches your preferences and budget perfectly.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button variant="outline" className='bg-white text-primary hover:bg-gray-50 cursor-pointer'>
                Contact Our Expert
              </Button>
              <Button variant="secondary" className='bg-gray-900 text-white hover:bg-gray-800 cursor-pointer'>
                Call Now: +1 (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicePage
