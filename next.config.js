/** @type {import('next').NextConfig} */
const urlPrefix = '.';

const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	// basePath: urlPrefix,
	assetPrefix: urlPrefix,
	publicRuntimeConfig: { urlPrefix },

	exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
		return {
			'/': { page: '/' },
		};
	},
};

module.exports = nextConfig;
