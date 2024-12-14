/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https", // Matches any protocol (http or https)
          hostname: "**", // Matches any hostname
        },
      ],
    },
  };
  
  export default nextConfig;
  