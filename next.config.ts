


import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
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
  }
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default nextConfig



