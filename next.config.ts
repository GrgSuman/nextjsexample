


import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // Allows all hostnames
      },
      // {
      //   protocol: 'https',
      //   hostname: 'ui.aceternity.com',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'res.cloudinary.com',
      // },
      // // Add any other domains you need
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // }
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // distDir: 'build' // Change .next to any folder name you want

  output: 'export',

}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default nextConfig



