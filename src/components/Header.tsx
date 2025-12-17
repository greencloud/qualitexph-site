'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';

const HEADER_HEIGHT = 80;
const HEADER_HEIGHT_SCROLLED = 70;

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="w-full bg-[#151F65] text-(--off-white-text) text-sm hidden md:block">
        <div className="max-w-375 mx-auto flex justify-between px-6 py-2">
          <div className="w-1/2">
            <span className="mr-5">
              <Phone className="inline-block mr-1 text-(--pale-red-orange)" size={16} />
              <span className="font-semibold">Call: </span> (02) 805 4757
            </span>
            <span className="mr-5">
              <Mail className="inline-block mr-1 text-(--pale-red-orange)" size={16} />
              <span className="font-semibold">Email: </span> info@qualitexph.com
            </span>
            <span className="mr-5">
              <MapPin className="inline-block mr-1 text-(--pale-red-orange)" size={16} />
              <span className="font-semibold">Main Office: </span> San Pedro, Laguna</span>
          </div>
          <div className="w-1/2 text-right">
            <Link href="https://www.facebook.com/qualitexph/" target='_blank' className='ml-3.5' title='Facebook'><Facebook className="inline-block mr-1 text-white" size={18} /></Link>
            <Link href="https://www.linkedin.com/company/qualitexph/" target='_blank' className='ml-3.5' title='LinkedIn'><Linkedin className="inline-block mr-1 text-white" size={18} /></Link>
            <Link href="https://www.youtube.com/@qualitexph" target='_blank' className='ml-3.5' title='YouTube'><Youtube className="inline-block mr-1 text-white" size={18} /></Link>
            <Link href="https://twitter.com/qualitexph" target='_blank' className='ml-3.5' title='Twitter'><Twitter className="inline-block mr-1 text-white" size={18} /></Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 shadow ${scrolled ? 'h-15' : 'h-25'}`}
        style={{ minHeight: scrolled ? HEADER_HEIGHT_SCROLLED : HEADER_HEIGHT }}
      >
        <div className="max-w-375 mx-auto flex items-center justify-between h-full px-6">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src="/logo-128.webp" alt="QualiTexPH Logo" width={50} height={50} />
            </Link>
            <Link href="/">
              <Image src="/sitename.svg" alt="QualiTexPH Logo" width={150} height={0} />
            </Link>
          </div>
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
