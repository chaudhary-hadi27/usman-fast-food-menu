import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Image Optimization Configuration
  images: {
    // Allowed external domains (if you still use some Unsplash images)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    
    // Image formats to serve (WebP is modern & efficient)
    formats: ['image/webp', 'image/avif'],
    
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    
    // Image sizes for different viewports
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Minimum cache time for optimized images (1 year)
    minimumCacheTTL: 31536000,
    
    // Enable dangerous use of SVG (if needed)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Compress all responses
  compress: true,
  
  // Disable X-Powered-By header for security
  poweredByHeader: false,
  
  // Generate standalone output for better deployment
  output: 'standalone',
};

export default nextConfig;