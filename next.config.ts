import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com', protocol: 'https' },
      { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
      { hostname: 'imgur.com', protocol: 'https' },
      { hostname: 'media2.dev.to', protocol: 'https' },
      { hostname: 'miro.medium.com', protocol: 'https' },
      { hostname: 'cdn-images-1.medium.com', protocol: 'https' },
    ],
  },
};

export default nextConfig;
