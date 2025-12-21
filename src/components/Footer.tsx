import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';
import { siteConfig } from '@/config/site';

const Footer: React.FC = () => (
  <footer className="w-full qt-footer">

    <div className="qt-footer-nav py-4 mt-12 mb-5">
      <div className="max-w-375 text-white overflow-hidden mx-auto flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3 p-6">
          <h3 className="text-2xl mb-4 font-semibold border-b border-dotted border-gray-200 pb-2">Quisque porttitor leo sed</h3>
          <p>Vestibulum euismod, felis et tincidunt euismod, neque sem tincidunt metus, eu cursus nisl est eu mi. Phasellus sodales leo urna, quis mattis ante volutpat id. Proin gravida eleifend tempor. Phasellus euismod ipsum nisi, accumsan efficitur magna tristique sed. Phasellus malesuada nisi lorem, a dapibus neque sagittis vitae. Pellentesque gravida, leo a tincidunt.</p>
        </div>
        <div className="w-full md:w-1/3 p-6">
          <h3 className="text-2xl mb-4 font-semibold border-b border-dotted border-gray-200 pb-2">Phasellus sodales leo urna</h3>
          <p>Vestibulum euismod, felis et tincidunt euismod, neque sem tincidunt metus, eu cursus nisl est eu mi. Phasellus sodales leo urna, quis mattis ante volutpat id. Proin gravida eleifend tempor. Phasellus euismod ipsum nisi, accumsan efficitur magna tristique sed. Phasellus malesuada nisi lorem, a dapibus neque sagittis vitae. Pellentesque gravida, leo a tincidunt.</p>
        </div>
        <div className="w-full md:w-1/3 p-6">
          <h3 className="text-2xl mb-4 font-semibold border-b border-dotted border-gray-200 pb-2">Social</h3>
          <p>You can reach us out through the following social platforms:</p>

          <Link href={siteConfig.social.facebook} target='_blank' className='mr-3.5 ' title='Facebook'><Facebook className="inline-block mr-1 text-white" size={38} /></Link>
          <Link href={siteConfig.social.linkedin} target='_blank' className='mr-3.5' title='LinkedIn'><Linkedin className="inline-block mr-1 text-white" size={38} /></Link>
          <Link href={siteConfig.social.youtube} target='_blank' className='mr-3.5' title='YouTube'><Youtube className="inline-block mr-1 text-white" size={38} /></Link>
          <Link href={siteConfig.social.twitter} target='_blank' className='mr-3.5' title='Twitter'><Twitter className="inline-block mr-1 text-white" size={38} /></Link>
        </div>
      </div>
    </div>

    <div className="max-w-375 mx-auto px-6 pb-5 text-gray-700 flex flex-col md:flex-row justify-between items-center">
      <span className="">&copy; {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</span>
      <span className="text-sm mt-2 md:mt-0">Designed and Powered by <a href="https://www.sectorzlabs.com" target="_blank" rel="noopener noreferrer">Sector-Z Labs</a>.</span>
    </div>

  </footer>
);

export default Footer;
