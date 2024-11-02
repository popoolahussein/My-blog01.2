// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/popoolahussein/Blogposts/main/images/**',
            },
        ],
    },
};

export default nextConfig;
