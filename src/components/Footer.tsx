import React from 'react';
import Link from 'next/link';
import { CircleCheckBig, Phone, Mail, Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';
import { siteConfig } from '@/config/site';

const Footer: React.FC = () => (
  <footer className="w-full qt-footer">

    <div className="qt-footer-nav py-4 mt-12 mb-5">
      <div className="max-w-375 text-white overflow-hidden mx-auto flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3 p-6">
          <h3 className="text-2xl mb-4 font-semibold border-b border-dotted border-gray-200 pb-2">Quisque porttitor leo sed</h3>
          <p>Vestibulum euismod, felis et tincidunt euismod, neque sem tincidunt metus, eu cursus nisl est eu mi. Phasellus sodales leo urna, quis mattis ante volutpat id. Proin gravida eleifend tempor. Phasellus euismod ipsum nisi, accumsan efficitur magna tristique sed. Phasellus malesuada nisi lorem, a dapibus neque sagittis vitae. Pellentesque gravida, leo a tincidunt.</p>
        </div>

        {/*  */}
        <div className="w-full md:w-1/3 p-6">
          <h3 className="text-2xl mb-4 font-semibold border-b border-dotted border-gray-200 pb-2">Information</h3>
          <div className="flex flex-col ml-2">
            <div className="flex items-center gap-2 mb-2">
              <CircleCheckBig className="inline-block text-white" size={16} /> <Link href="/contact" className="hover:underline">Request a Quote</Link>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <CircleCheckBig className="inline-block text-white" size={16} /> <Link href="/about" className="hover:underline">About {siteConfig.brand}</Link>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <CircleCheckBig className="inline-block text-white" size={16} /> <Link href="/milestone" className="hover:underline">{siteConfig.brand}'s Milestone</Link>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <CircleCheckBig className="inline-block text-white" size={16} /> <Link href="/services" className="hover:underline">Services We Offer</Link>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <CircleCheckBig className="inline-block text-white" size={16} /> <Link href="/contact" className="hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Connect - Contact Details */}
        <div className="w-full md:w-1/3 p-6">
          <h3
            className="text-2xl mb-4 font-semibold border-b border-dotted border-gray-200 pb-2"
          >
            Connect
          </h3>
          <p><Phone className="inline-block mr-1 text-white" size={20} /> <strong>Call:</strong> {siteConfig.contact.phone}</p>
          <p><Mail className="inline-block mr-1 text-white" size={20} /> <strong>Email:</strong> {siteConfig.contact.email}</p>

          <p>You can also reach us out through the following platforms:</p>
          <div className="flex flex-wrap gap-3.5">
            <Link href={siteConfig.social.facebook} target='_blank' title='Facebook'><Facebook className="inline-block mr-1 text-white hover:text-blue-300" size={33} /></Link>
            <Link href={siteConfig.social.linkedin} target='_blank' title='LinkedIn'><Linkedin className="inline-block mr-1 text-white hover:text-blue-300" size={33} /></Link>
            <Link href={siteConfig.social.youtube} target='_blank' title='YouTube'><Youtube className="inline-block mr-1 text-white hover:text-blue-300" size={33} /></Link>
            <Link href={siteConfig.social.twitter} target='_blank' title='Twitter'><Twitter className="inline-block mr-1 text-white hover:text-blue-300" size={33} /></Link>
          </div>
        </div>
      </div>
    </div>

    {/* Main Footer Block */}
    <div className="max-w-375 mx-auto px-6 pb-5 text-gray-700 flex flex-col md:flex-row justify-between items-center">
      <span className="">&copy; {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</span>
      <span className="text-sm mt-2 md:mt-0">Designed and Powered by <a href="https://www.sectorzlabs.com" target="_blank" rel="noopener noreferrer">Sector-Z Labs</a>.</span>
    </div>

  </footer>
);

export default Footer;
