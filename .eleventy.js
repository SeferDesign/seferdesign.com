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
	eleventyConfig.addPassthroughCopy({ '_src/static': '.' });
	eleventyConfig.addPassthroughCopy({ '_src/fonts': '/dist/fonts' });

	eleventyConfig.addCollection('activePages', function(collectionsApi) {
		return collectionsApi.getAll().filter(function(item) {
			return item.data?.layout != 'redirect';
		});
	});

	eleventyConfig.addPlugin(pluginRev);
	eleventyConfig.addPlugin(eleventySass, [
    {
      compileOptions: {
        permalink: function(permalinkString, inputPath) {
          return (data) => {
            return data.page.filePathStem.replace(/^\/style\//, '/dist/style/') + '.css';
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
