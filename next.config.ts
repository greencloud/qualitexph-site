import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development'

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' ${isDev ? "'unsafe-eval'" : ''} '';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://res.cloudinary.com;
  font-src 'self' data:;
  connect-src 'self' https:;
  frame-src 'none';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
`

const securityHeaders = [
  // CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },

  // Prevent clickjacking
  {
    key: "X-Frame-Options",
    value: "DENY",
  },

  // Prevent MIME sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },

  // Control referrer information
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },

  // Lock down powerful browser features
  {
    key: 'Permissions-Policy',
    value: [
      'accelerometer=()',
      'autoplay=()',
      'camera=()',
      'clipboard-read=()',
      'clipboard-write=()',
      'geolocation=()',
      'gyroscope=()',
      'magnetometer=()',
      'microphone=()',
      'payment=()',
      'usb=()',
    ].join(', '),
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin',
  },
]

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**'
      }
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
