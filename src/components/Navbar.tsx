import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/milestone', label: 'Milestone' },
  { href: '/services', label: 'Services' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav>
      <div className="hidden md:flex gap-8 align-middle items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-lg font-medium hover:text-blue-950 transition-colors relative group
              ${pathname === link.href && link.href !== '/' ? 'text-blue-900' : ''}`}
          >
            {link.label}
            <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${pathname === link.href && link.href !== '/' ? 'scale-x-100' : ''}`}></span>
          </Link>
        ))}

        <Link
          href="/contact" className="inline-flex items-center justify-center bg-(--red-cinnabar) text-white font-semibold px-4 py-2 rounded-md hover:bg-red-900 transition-colors cursor-pointer"
        >
          Request a Quote
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
        {open && (
          <div className="absolute top-15 right-4 bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 z-50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium hover:text-blue-800 ${pathname === link.href && link.href !== '/' ? 'text-blue-800' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              key='/contact'
              href='/contact'
              className={`text-lg font-medium hover:text-blue-800 ${pathname === '/contact' ? 'text-blue-800' : ''}`}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
