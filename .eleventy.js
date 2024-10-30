import Image from '@11ty/eleventy-img';
import eleventySass from 'eleventy-sass';
import pluginRev from 'eleventy-plugin-rev';

async function imageShortcode(src, alt, klass = '', loading = 'lazy', sizes = null) {
	let extension = src.split('.').pop();
	let formats = ['jpeg']; // webp, avif
	if (extension === 'svg') {
		formats = ['svg'];
	}
	return Image.generateHTML(await Image(src, {
		widths: [200, 800, 1500],
		formats: formats,
		outputDir: './_site/images/',
		urlPath: '/images/'
	}), {
		alt,
		sizes,
		loading: loading,
		class: klass
	});
}

export default (eleventyConfig) => {

	eleventyConfig.addShortcode('image', imageShortcode);

	eleventyConfig.addPassthroughCopy({ '_src/static': '.' });

	// eleventyConfig.addWatchTarget('_src/style/');

	eleventyConfig.addPlugin(pluginRev);

	eleventyConfig.addPlugin(eleventySass, [
    {
      compileOptions: {
        permalink: function(permalinkString, inputPath) {
          return (data) => {
            return data.page.filePathStem.replace(/^\/scss\//, '/css/') + '.css';
          };
        }
      },
      sass: {
        style: 'expanded',
        sourceMap: true
      },
			rev: true,
    }, {
      sass: {
        style: 'compressed',
        sourceMap: false
      },
      rev: true,
      when: [ { ELEVENTY_ENV: 'production' }, { ELEVENTY_ENV: false } ]
    }
  ]);

	eleventyConfig.setServerOptions({
		// liveReload: true,
		// domDiff: true,
		port: 3000,
		https: process.env.SSL_KEY_PATH && process.env.SSL_CRT_PATH ? {
			key: process.env.SSL_KEY_PATH,
			cert: process.env.SSL_CRT_PATH
		} : false,
		watch: [
			'./_site/dist/style/**/*'
		]
	});

	return {
		dir: {
			input: '_src/',
			includes: 'includes',
			data: 'data',
			output: '_site'
		}
	};

};
