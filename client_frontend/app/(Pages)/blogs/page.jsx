import InnerBanner from '@/components/InnerBanner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      image: '/assets/blogs/july-2024.jpg',
      alt: 'The Best Tailor-made Packages And Their Perks',
      title: 'The Best Tailor-made Packages And Their Perks',
      excerpt: 'It is rightly said that the best things in life are the people we love, the places we have been, and the memories we have made along the way. This is only possible when you step out and explore the world.',
      date: 'July 2025',
      readTime: '5 min read',
      category: 'Travel Tips'
    },
    {
      id: 2,
      image: '/assets/blogs/june-2024.jpg',
      alt: '6 Reasons To Choose A Tour And Travel Company',
      title: '6 Reasons To Choose A Tour And Travel Company',
      excerpt: 'Do you want your next trip planned to the tee? Do you want to keep all worries at bay and simply pack and land at your destination? This can now be possible with the...',
      date: 'June 2024',
      readTime: '4 min read',
      category: 'Planning'
    },
    {
      id: 3,
      image: '/assets/blogs/may-2024.jpg',
      alt: 'Singh Tours and Travels offers discounted airfare and an unforgettable holiday package.',
      title: 'Singh Tours and Travels offers discounted airfare and an unforgettable holiday package.',
      excerpt: 'Making travel plans and selecting the perfect trip package might be the most thrilling and difficult parts of organizing a holiday. Whether you are an experienced traveler or embarking on your first adventure...',
      date: 'May 2024',
      readTime: '6 min read',
      category: 'Deals'
    }
  ]

  return (
    <>
      <InnerBanner Title={'Blogs'} />
      
      <section className="py-16 bg-gray-50/50">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Travel Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover expert tips, travel guides, and exclusive deals to make your next journey unforgettable
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Card key={blog.id} className="group py-0 hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={blog.id === 1}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-gray-900 font-semibold">
                      {blog.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="px-6">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {blog.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button className="w-full group/btn cursor-pointer" variant="outline">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

        
        </div>
      </section>
    </>
  )
}

export default Blogs
