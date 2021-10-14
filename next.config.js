/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects () {
    return [
      {
        source: '/docs/mghdao_engl_whitepaper.pdf',
        destination: '/docs/mgh_whitepaper_v3.pdf',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2021/06/mghdao_engl_whitepaper_20210626_print-1.pdf',
        destination: '/docs/mgh_whitepaper_v3.pdf',
        permanent: true,
      }
    ]
  }
};
