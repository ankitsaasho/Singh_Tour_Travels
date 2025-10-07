"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { Button } from "./ui/button";

export default function DiscoverSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Main Content Flex */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Column */}
                        <div className="flex-1 flex flex-col gap-6">
                            {/* Top Image - full height of top half */}
                            <div className="flex-1 h-40 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/home/discover-section/discover-img1.webp"
                                    alt="Travel Adventure"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Bottom Image - 75% of top image height */}
                            <div className="w-[75%] h-40  mt-10 rounded-lg overflow-hidden shadow-lg ml-auto">
                                <Image
                                    src="/home/discover-section/discover-img3.webp"
                                    alt="Cultural Experience"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>


                        {/* Center Content */}
                        <div className="flex-2 flex flex-col justify-center items-center text-center space-y-6 py-8">
                            <Image src="/iata-logo.png" alt="IATA Logo" width={150} height={50} className="mb-4" priority>

                            </Image>
                            <SectionHeading
                                heading="Trusted & Certified"
                                subheading="We Are IATA Certified Booking Agency"
                                description="Providing seamless travel experiences with professional guidance and reliable service. Book with confidence and explore the world effortlessly."
                            />
                        {/* CTA Button */}
                        <div className="pt-4">
                           <Button className={"bg-blue-500 hover:bg-blue-600 text-white py-5 px-8 rounded cursor-pointer text-[18px]"}>Learn More</Button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Top Image - full height of top half */}
                        <div className="flex-1 h-40 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/home/discover-section/discover-img2.webp"
                                alt="Travel Adventure"
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Bottom Image - 75% of top image height */}
                        <div className="w-[75%] h-40  mt-10 rounded-lg overflow-hidden shadow-lg mr-auto">
                            <Image
                                src="/home/discover-section/discover-img4.webp"
                                alt="Cultural Experience"
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section >

    );
}