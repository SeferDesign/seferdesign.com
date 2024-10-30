import Image from '@11ty/eleventy-img';

async function imageShortcode(src, alt, klass = '', loading = 'lazy', sizes = null) {
	let extension = src.split('.').pop();
	let formats = ['jpeg']; // webp, avif
	if (extension === 'svg') {
		formats = ['svg'];
	}
	return Image.generateHTML(await Image(src, {
		widths: [200, 800, 1500],
		formats: formats,
		outputDir: './_site/dist/images/',
		urlPath: '/dist/images/'
	}), {
		alt,
		sizes,
		loading: loading,
		class: klass
	});
}

export default (eleventyConfig) => {

	eleventyConfig.addShortcode('image', imageShortcode);

	eleventyConfig.addPassthroughCopy({ 'static': '.' });

	eleventyConfig.addWatchTarget('_src/**/*.scss');
	eleventyConfig.addWatchTarget('_src/**/*.js');

	if (process.env.SSL_KEY_PATH && process.env.SSL_CRT_PATH) {
		eleventyConfig.setBrowserSyncConfig({
			https: {
				key: process.env.SSL_KEY_PATH,
				cert: process.env.SSL_CRT_PATH
			}
		});
	}

};
