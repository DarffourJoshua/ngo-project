/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['figmentcreativelabs.com', 'encrypted-tbn0.gstatic.com', 'international-partnerships.ec.europa.eu'],
    // },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'figmentcreativelabs.com',
              port: '',
              pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                port: '',
                pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: 'international-partnerships.ec.europa.eu',
                port: '',
                pathname: '/sites/default/files/styles/ewcms_metatag_image/public/2021-04/**',
            },
            {
                protocol: 'https',
                hostname: 'imgnew.outlookindia.com',
                port: '',
                pathname: '/uploadimage/**',
            },
            {
                protocol: 'https',
                hostname: 'miro.medium.com',
                port: '',
                pathname: '/v2/**',
            },
            {
                protocol: 'https',
                hostname: 'peopleofcolorintech.com',
                port: '',
                pathname: '/wp-content/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
                port: '',
                pathname: '/512/**',
            },
            {
                protocol: 'https',
                hostname: 'www.clker.com',
                port: '',
                pathname: '/cliparts/**',
            },
          ],
    }
};

export default nextConfig;
