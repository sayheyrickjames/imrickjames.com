/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep terminal.imrickjames.com serving the terminal app at its root
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: 'terminal.imrickjames.com' }],
          destination: '/terminal',
        },
      ],
    };
  },
};

module.exports = nextConfig;
