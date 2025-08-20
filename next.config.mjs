/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Podés usar "domains" o "remotePatterns". Con domains es más simple:
    domains: ['i.ytimg.com', 'img.youtube.com'],
    // Si preferís mayor control, usá remotePatterns:
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'i.ytimg.com', pathname: '/vi/**' },
    //   { protocol: 'https', hostname: 'img.youtube.com', pathname: '/vi/**' },
    // ],
  },
};

export default nextConfig;
