// ⚠️ Note: Next.js does NOT export a `NextConfig` type — keep this untyped for compatibility. 

const nextConfig = {
  serverExternalPackages: ["@prisma/client", "bcrypt"],

  typescript: {
    ignoreBuildErrors: false,
  },

  eslint: {
    ignoreDuringBuilds: true, // ESLint warnings/errors won't block build
  },

  webpack: (config: any, opts: { isServer: boolean }) => {
    if (opts.isServer) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      };
    }
    return config;
  },
};

export default nextConfig;
