'use client';
import React from 'react';

export default function SectionHeading({
    heading,
    subheading,
    description,
    headingTag = 'h3',
    subheadingTag = 'h4',
    align = 'center', // 'center' | 'left' | 'right'
    className = ''
}) {
    const HeadingTag = headingTag;
    const SubheadingTag = subheadingTag;

    // Alignment classes
    const alignmentClasses = {
        center: 'text-center',
        left: 'text-left',
        right: 'text-right',
    };

    return (
        <div className={`${alignmentClasses[align]} ${className}`}>
            {heading && (
                <HeadingTag className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 [font-family:var(--font-primary)]">
                    {heading}
                </HeadingTag>
            )}
            {subheading && (
                <SubheadingTag className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 [font-family:var(--font-primary)]">
                    {subheading}
                </SubheadingTag>
            )}
            {description && (
                <p className="text-lg text-gray-600 max-w-3xl mx-auto [font-family:var(--font-secondary)]">
                    {description}
                </p>
            )}
        </div>
    );
}
