/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      minimumCacheTTL: 60,
      remotePatterns: [
        {
          protocol: "https", // Matches any protocol (http or https)
          hostname: "**", // Matches any hostname
        },
      ],
    },
  };
  
  export default nextConfig;
  