// @ts-check
import withPlaiceholder from '@plaiceholder/next'
/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'http',
      //   hostname: 'localhost',
      //   port: '1337',
      // },
      {
        protocol: 'https',
        hostname: 'bakery-server-w2iq.onrender.com',
        port: '1337',
      },
    ],
    deviceSizes: [320, 576, 768, 992, 1200, 1400, 1686, 1920],
  },
}

export default withPlaiceholder(config)
