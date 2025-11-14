// next.config.js
module.exports = {
  async rewrites() {
    return [
      { source: '/osci', destination: '/osci/index.html' },
      // allow deeper paths inside the old site to work
      { source: '/osci/:path*', destination: '/osci/:path*' },
      { source: '/css/:path*', destination: '/osci/css/:path*' },
      { source: '/js/:path*', destination: '/osci/js/:path*' },
      { source: '/assets/:path*', destination: '/osci/assets/:path*' },
      { source: '/_next/:path*', destination: '/osci/_next/:path*' },
      // catch-all - careful with this; only enable if safe
      // { source: '/:path*', destination: '/osci/:path*' }
    ]
  },
}
