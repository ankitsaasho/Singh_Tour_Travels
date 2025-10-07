import InnerBanner from '@/components/InnerBanner'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  MapPin,
  Calendar,
  Star,
  Utensils,
  Eye,
  Car,
  Hotel,
  ArrowRight,
  Shield,
  Users
} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Package = () => {
const packages = [
  {
    id: 1,
    title: 'The Best of Singapore & Malaysia',
    image: '/assets/package/singapore.jpg',
    duration: '6 Days',
    rating: 4.8,
    reviews: 124,
    destinations: [
      { name: 'Kuala Lumpur', nights: 2 },
      { name: 'Singapore', nights: 3 }
    ],
    includes: [
      { icon: Hotel, text: 'Hotels (3*)' },
      { icon: Utensils, text: 'Breakfasts' },
      { icon: Eye, text: 'Sightseeing' },
      { icon: Car, text: 'Transfers' },
      { icon: Shield, text: 'Taxes' }
    ],
    highlights: ['Petronas Twin Towers', 'Sentosa Island', 'Universal Studios', 'Gardens by the Bay']
  },
  {
    id: 2,
    title: 'Highlights of Singapore',
    image: '/assets/package/singtours-2.jpg',
    duration: '5 Days',
    rating: 4.9,
    reviews: 98,
    destinations: [
      { name: 'Singapore', nights: 4 }
    ],
    includes: [
      { icon: Hotel, text: 'Hotels (3*)' },
      { icon: Utensils, text: 'Breakfasts' },
      { icon: Eye, text: 'Sightseeing' },
      { icon: Car, text: 'Transfers' },
      { icon: Shield, text: 'Taxes' }
    ],
    highlights: ['Marina Bay Sands', 'Merlion Park', 'Night Safari', 'Singapore Flyer']
  },
  {
    id: 3,
    title: 'Simply Singapore',
    image: '/assets/package/simply-singapore.jpg',
    duration: '4 Days',
    rating: 4.7,
    reviews: 156,
    destinations: [
      { name: 'Singapore', nights: 3 }
    ],
    includes: [
      { icon: Hotel, text: 'Hotels (3*)' },
      { icon: Utensils, text: 'Breakfasts' },
      { icon: Eye, text: 'Sightseeing' },
      { icon: Car, text: 'Transfers' },
      { icon: Shield, text: 'Taxes' }
    ],
    highlights: ['Sentosa Island', 'Little India', 'Chinatown', 'Orchard Road'],
    discount: 25
  },
  {
    id: 4,
    title: 'Stunning Singapore with 2 Nights Cruise',
    image: '/assets/package/singapore-cruise.jpg',
    duration: '7 Days',
    rating: 4.8,
    reviews: 87,
    destinations: [
      { name: 'Singapore', nights: 4 },
      { name: 'Cruise', nights: 2 }
    ],
    includes: [
      { icon: Hotel, text: 'Hotels (3*)' },
      { icon: Utensils, text: 'Breakfasts' },
      { icon: Eye, text: 'Sightseeing' },
      { icon: Car, text: 'Transfers' },
      { icon: Shield, text: 'Taxes' }
    ],
    highlights: ['Marina Bay Cruise Centre', 'Onboard Entertainment', 'Sentosa', 'Shopping Tour'],
    discount: 18
  },
  {
    id: 5,
    title: 'Bali 04 Nights & Singapore 03 Nights',
    image: '/assets/package/bali-singapore.jpg',
    duration: '8 Days',
    rating: 4.9,
    reviews: 112,
    destinations: [
      { name: 'Bali', nights: 4 },
      { name: 'Singapore', nights: 3 }
    ],
    includes: [
      { icon: Hotel, text: 'Hotels (3*)' },
      { icon: Utensils, text: 'Breakfasts' },
      { icon: Eye, text: 'Sightseeing' },
      { icon: Car, text: 'Transfers' },
      { icon: Shield, text: 'Taxes' }
    ],
    highlights: ['Tanah Lot Temple', 'Kuta Beach', 'Ubud Tour', 'Sentosa Island'],
    discount: 20
  },
  {
    id: 6,
    title: 'The Best of Singapore & Bali',
    image: '/assets/package/singapore-bali.jpg',
    duration: '7 Days',
    rating: 4.9,
    reviews: 112,
    destinations: [
      { name: 'Singapore', nights: 3 },
      { name: 'Bali', nights: 4 }
    ],
    includes: [
      { icon: Hotel, text: 'Hotels (3*)' },
      { icon: Utensils, text: 'Breakfasts' },
      { icon: Eye, text: 'Sightseeing' },
      { icon: Car, text: 'Transfers' },
      { icon: Shield, text: 'Taxes' }
    ],
    highlights: ['Gardens by the Bay', 'Universal Studios', 'Uluwatu Temple', 'Bali Swing']
  },
  {
    id: 7,
    title: 'Best of Thailand, Malaysia & Singapore',
    image: '/assets/package/thailand-malaysia-singapore.jpg',
    duration: '10 Days',
    rating: 4.9,
    reviews: 112,
    destinations: [
      { name: 'Bangkok', nights: 2 },
      { name: 'Pattaya', nights: 2 },
      { name: 'Kuala Lumpur', nights: 2 },
      { name: 'Singapore', nights: 3 }
    ],
    includes: [
      { icon: Hotel, text: 'Hotels (3*)' },
      { icon: Utensils, text: 'Breakfasts' },
      { icon: Eye, text: 'Sightseeing' },
      { icon: Car, text: 'Transfers' },
      { icon: Shield, text: 'Taxes' }
    ],
    highlights: ['Coral Island Tour', 'Batu Caves', 'Sentosa Island', 'Night Safari']
  },
  {
    id: 8,
    title: '3 Nights Phuket and 3 Nights Singapore',
    image: '/assets/package/phuket-singapore.jpg',
    duration: '7 Days',
    destinations: [
      { name: 'Phuket', nights: 3 },
      { name: 'Singapore', nights: 3 }
    ],
    includes: [
      { icon: Hotel, text: 'Hotels (3*)' },
      { icon: Utensils, text: 'Breakfasts' },
      { icon: Eye, text: 'Sightseeing' },
      { icon: Car, text: 'Transfers' },
      { icon: Shield, text: 'Taxes' }
    ],
    highlights: ['Phang Nga Bay', 'James Bond Island', 'Marina Bay', 'Sentosa Island']
  },
  {
    id: 9,
    title: 'Bali Holiday Package',
    image: '/assets/package/bali.jpg',
    duration: '7 Days',
    destinations: [
      { name: 'Hotel', nights: 3 },
      { name: 'Villa', nights: 3 }
    ],
    includes: [
      { icon: Hotel, text: 'Hotels (3*)' },
      { icon: Utensils, text: 'Breakfasts' },
      { icon: Eye, text: 'Sightseeing' },
      { icon: Car, text: 'Transfers' },
      { icon: Shield, text: 'Taxes' }
    ],
    highlights: ['Uluwatu Temple', 'Nusa Dua Beach', 'Tegallalang Rice Terrace', 'Bali Swing']
  }
];


  return (
    <>
      <InnerBanner Title={'Tour Packages'} />

      <section className="py-16 bg-gray-50/50">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-sm font-semibold">
              Explore The World
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Amazing Tour Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover handpicked travel experiences with the perfect blend of adventure, comfort, and cultural immersion.
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className="group hover:shadow-2xl transition-all duration-300 py-0 pb-5 border-0 shadow-lg overflow-hidden cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pkg.image}
                    fill
                    alt={pkg.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" /> */}

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-primary text-white border-0">
                      <Calendar className="w-3 h-3 mr-1" />
                      {pkg.duration}
                    </Badge>
                 
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {pkg.rating}
                    </Badge>
                  </div>

            
                </div>

                <CardContent className="px-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {pkg.title}
                  </h3>

                  {/* Destinations */}
                  <div className=" text-sm text-gray-600 mb-4">
                    <div className='flex items-center mb-2'>
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="font-medium block">Destinations: </span>
                    </div>

                    <div className="ml-2 flex flex-wrap gap-1">
                      {pkg.destinations.map((dest, index) => (
                        <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {dest.name} ({dest.nights} Nights)
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Tour Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Package Includes:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.includes.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <Icon className="w-4 h-4 mr-2 text-primary" />
                            {item.text}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Reviews and Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {pkg.reviews} reviews
                    </div>

                    <Button className="group/btn cursor-pointer">
                      Enquiry Now
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

         
        </div>
      </section>
    </>
  )
}

export default Package