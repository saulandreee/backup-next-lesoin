/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lesoin.id",
      },
    ],
    deviceSizes: [640, 768, 1024, 1280, 1440, 1920],
  },
};

export default nextConfig;
