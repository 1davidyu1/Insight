/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.istockphoto.com', // Allows images from iStockphoto
          port: '',
          pathname: '/**',
        },
      ],
    },
  };

export default nextConfig;