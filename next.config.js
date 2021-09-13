var isProd = process.env.NODE_ENV === 'production';

var nextConfig = {
  assetPrefix: isProd ? 'https://github.com/UXish-Design-Group/uxish-pages-site' : '',
};

module.exports = nextConfig;