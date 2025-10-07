import InnerBanner from '@/components/InnerBanner'
import Image from 'next/image'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const Destinations = () => {
  const airlines = [
    { name: 'Malaysia Airlines', logo: '/assets/icons/malaysia-airlines.png' },
    { name: 'Qantas Airlines', logo: '/assets/icons/qantas-airlines.png' },
    { name: 'Qatar Airways', logo: '/assets/icons/qatar-airways.png' },
    { name: 'SkyWest Airlines', logo: '/assets/icons/skywest-airlines.png' },
    { name: 'Royal Jordanian Airlines', logo: '/assets/icons/royal-jordanian.png' },
    { name: 'SriLankan Airlines', logo: '/assets/icons/srilankan-airlines.png' },
    { name: 'Thai Airways', logo: '/assets/icons/thai-airways.png' },
    { name: 'Tiger Airways', logo: '/assets/icons/tiger-airways.png' },
  ]

  const cruiseLines = [
    { name: 'MSC Cruises', logo: '/assets/icons/msc-cruises.png' },
    { name: 'Princess Cruises', logo: '/assets/icons/princess-cruises.png' },
    { name: 'Avalon Waterways', logo: '/assets/icons/avalon-waterways.png' },
    { name: 'AmaWaterways', logo: '/assets/icons/ama-waterways.png' },
    { name: 'Oceania Cruises', logo: '/assets/icons/oceania-cruises.png' },
    { name: 'Regent Seven Seas Cruises', logo: '/assets/icons/regent-cruises.png' },
    { name: 'Hurtigruten Group', logo: '/assets/icons/hurtigruten.png' },
    { name: 'Seabourn', logo: '/assets/icons/seabourn.png' },
    { name: 'Silversea Cruises', logo: '/assets/icons/silversea.png' },
    { name: 'Virgin Voyages', logo: '/assets/icons/virgin-voyages.png' },
    { name: 'Celebrity Eclipse', logo: '/assets/icons/celebrity-eclipse.png' },
    { name: 'Atlas Ocean Voyages', logo: '/assets/icons/atlas-ocean.png' },
    { name: 'Adventure of the Seas', logo: '/assets/icons/adventure-seas.png' },
    { name: 'Carnival Celebration', logo: '/assets/icons/carnival-celebration.png' },
    { name: 'Cruise West', logo: '/assets/icons/cruise-west.png' },
  ]

  const destinations = [
    { name: 'Switzerland', image: '/assets/gallery/switzerland.jpg' },
    { name: 'Canada', image: '/assets/gallery/canada.jpg' },
    { name: 'Singapore', image: '/assets/gallery/singapore.jpg' },
    { name: 'South Africa', image: '/assets/gallery/south-africa.jpg' },
    { name: 'Turkey', image: '/assets/gallery/turkey.jpg' },
    { name: 'Australia', image: '/assets/gallery/australia.jpg' },
    { name: 'New Zealand', image: '/assets/gallery/new-zealand.jpg' },
    { name: 'Japan', image: '/assets/gallery/japan.jpg' },
    { name: 'Bhutan', image: '/assets/gallery/bhutan.jpg' },
    { name: 'Leh', image: '/assets/gallery/leh.jpg' },
    { name: 'India', image: '/assets/gallery/india.jpg' },
    { name: 'Malaysia', image: '/assets/gallery/malaysia.jpg' },
  ]

  return (
    <>
      <InnerBanner Title={'Destinations'} />

      <main className="min-h-screen bg-gray-50">
        {/* Airlines Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Airline Partners</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fly with confidence using our trusted airline partners from around the world
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {airlines.map((airline, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-20 h-20 mb-4 flex items-center justify-center bg-gray-50 rounded-lg">
                      <Image 
                        src={airline.logo} 
                        alt={`${airline.name} logo`}
                        width={80}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-base">{airline.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cruise Lines Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Luxury Cruise Lines</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience world-class cruising with our premium cruise line partners
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {cruiseLines.map((cruise, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-20 h-16 mb-3 flex items-center justify-center bg-white rounded-lg">
                      <Image 
                        src={cruise.logo} 
                        alt={`${cruise.name} logo`}
                        width={200}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-medium text-gray-900 text-base">{cruise.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Amazing Destinations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover breathtaking places around the world with our curated travel experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {destinations.map((destination, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 py-0 shadow-lg">
                  <div className="relative overflow-hidden">
                    <Image 
                      src={destination.image} 
                      alt={`Beautiful view of ${destination.name}`}
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" /> */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                    </div>
                  
                  </div>
                </Card>
              ))}
            </div>
            
        
          </div>
        </section>
      </main>
    </>
  )
}

export default Destinations