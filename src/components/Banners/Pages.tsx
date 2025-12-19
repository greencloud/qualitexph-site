import React from 'react';
import Image from 'next/image';

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
      className="object-cover z-1"
      priority
    />
    <div className="absolute inset-0 bg-black-400 z-10 flex flex-col items-center justify-center text-center text-white px-4">
      <h1 className="text-4xl md:text-5xl font-(family-name:--font-baskerville) font-bold drop-shadow-lg mb-2">{title}</h1>
      {subtitle && <p className="text-lg md:text-2xl drop-shadow-lg">{subtitle}</p>}
    </div>
  </div>
);

export default Banner;
