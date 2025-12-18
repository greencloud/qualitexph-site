import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  height?: number;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, imageUrl, height = 300 }) => (
  <div className="w-full relative flex items-center justify-center" style={{ height: `${height}px` }}>
    {/* Overlay for darkening the image */}
    <div className="absolute inset-0 bg-black opacity-40 z-5"></div>

    <Image
      src={imageUrl}
      alt={title}
      fill
      className="object-cover z-10"
      unoptimized
      priority
    />
    <div className="max-w-300 mx-auto absolute inset-0 bg-black-400 z-10 flex flex-col justify-center text-white px-4">

      <div className='max-w-216 border-2 border-[#ffffff15] px-6 py-8'>
        <div>
          <p className="text-2xl semibold drow-shadow-lg mb-8">The leap that strengthens trust and credibility</p>

          <h1 className="text-4xl md:text-5xl font-serif font-bold drop-shadow-lg mb-6">{title}</h1>
          {subtitle && <p className="text-md md:text-md drop-shadow-lg">{subtitle}</p>}

          <p>With cyber-crime on the rise and new threats constantly emerging, it can seem difficult or even impossible to manage cyber-risks. ISO/IEC 27001 helps organizations become risk-aware and proactively identify and address weaknesses.</p>
        </div>

        <div className='py-5'>
          <Link
            href="/services" className="inline-flex items-center justify-center bg-blue-800 text-white font-semibold px-7 py-2 rounded-md hover:bg-blue-900 transition-colors cursor-pointer mr-4"
          >
            Learn more
          </Link>

          <Link
            href="/services" className="inline-flex items-center justify-center bg-amber-900 text-white font-semibold px-7 py-2 rounded-md hover:bg-amber-950 transition-colors cursor-pointer"
          >
            Our Services
          </Link>
        </div>

      </div>

    </div>
  </div>
);

export default Banner;
