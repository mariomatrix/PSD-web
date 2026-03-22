import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use a stable build ID to prevent "Failed to find Server Action" errors 
  // during zero-downtime deployments in Coolify/Docker.
  generateBuildId: async () => {
    return 'psd-spinut-v2' 
  },
  experimental: {
    serverActions: {
      // If using Server Actions behind a proxy, allowedOrigins might be required
      // allowedOrigins: ['psd-spinut.hr', 'dizalica.duckdns.org']
    }
  }
};

export default nextConfig;
