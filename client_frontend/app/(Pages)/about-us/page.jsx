import InnerBanner from '@/components/InnerBanner'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
    return (
        <>
            {/* <PageHeader title="About Us" /> */}
            <InnerBanner Title={'About Us'} />

            <section className='pt-20 pb-10'>
                <div className='container'>
                    <div className='flex gap-20'>
                        <div className='w-1/2 flex flex-col gap-2'>

                            <p>At Singh Tour & Travel, we believe that every journey is an opportunity for adventure, discovery, and creating lifelong memories. Whether you're seeking a relaxing beach getaway, an adrenaline-pumping adventure, or a cultural exploration, we are here to make your travel dreams a reality.</p>
                            <p>
                                With our dedicated team of experienced travel professionals, we strive to provide exceptional travel experiences tailored to your individual preferences. We understand that every traveler is unique, and we take pride in customizing itineraries that cater to your specific interests, budget, and schedule.
                            </p>
                            <p>
                                Our commitment to excellence is reflected in the quality of our services. From the moment you reach out to us, our team will guide you through every step of the travel planning process. We offer a wide range of services, including flight bookings, hotel reservations, transportation arrangements, and tour packages. We work closely with trusted partners and suppliers to ensure that you receive the highest level of service and value for your money.
                            </p>
                            <p>At Singh Tour & Travel, we believe in building lasting relationships with our clients. We take the time to understand your travel preferences, ensuring that each trip we plan for you exceeds your expectations. Our personalized approach sets us apart, and we are dedicated to providing exceptional customer service before, during, and after your journey.
                                We are passionate about travel and are continuously exploring new destinations and experiences to offer our clients. Whether you're looking to immerse yourself in the rich history of Europe, embark on an unforgettable safari in Africa, relax on the pristine beaches of the Caribbean, or indulge in the vibrant cultures of Asia, we have the expertise to make it happen.</p>
                        </div>
                        {/* about image */}
                        <div className='w-1/2'>
                            <Image src="/assets/about-img.jpg" alt='about-image' width={500} height={600} priority className='rounded-lg' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='pb-20'>
                <div className='container'>

                    <p> Contact us today at  <Link href={"tel:+15592451871"} className='text-red-600'>(559) 245-1871 </Link> or email us at singhtravel17@gmail.com to start planning your next adventure. Let us take care of the details while you focus on creating lifelong memories. Discover the world with Singh Tour & Travel!</p>
                </div>
            </section>
        </>
    )
}

export default AboutUs
