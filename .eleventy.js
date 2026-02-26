import 'dotenv/config';
import Image from '@11ty/eleventy-img';
import fs from 'fs';
import * as sass from 'sass';
import * as esbuild from 'esbuild';

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

async function imageFigureShortcode(src, alt, klass = '', loading = 'lazy', sizes = null, caption = null) {
	return `<figure>
		<div>
			${await imageShortcode(src, alt, klass, loading, sizes, caption)}
		</div>
		<figcaption>${caption}</figcaption>
	</figure>`;
}

export default (eleventyConfig) => {

	eleventyConfig.addShortcode('image', imageShortcode);
	eleventyConfig.addShortcode('imageFigure', imageFigureShortcode)
	eleventyConfig.addPassthroughCopy({ '_src/static': '.' });
	eleventyConfig.addPassthroughCopy({ '_src/fonts': '/dist/fonts' });
	eleventyConfig.addWatchTarget('_src/style');
	eleventyConfig.addWatchTarget('_src/scripts');
	eleventyConfig.addFilter('sass', function(sassFilePath) {
		return sass.compile(sassFilePath, {
			style: process.env.ELEVENTY_ENV == 'development' ? 'expanded' : 'compressed',
			sourceMap: process.env.ELEVENTY_ENV == 'development' ? true : false
		}).css.toString();
	});
	eleventyConfig.addFilter('js', async function(jsFilePath) {
		return esbuild.transformSync(fs.readFileSync(jsFilePath, 'utf8'), {
			minify: process.env.ELEVENTY_ENV == 'development' ? false : true,
			loader: 'js'
		}).code;
	});

	eleventyConfig.addCollection('activePages', function(collectionsApi) {
		return collectionsApi.getAll().filter(function(item) {
			return item.data?.layout != 'redirect';
		});
	});
	eleventyConfig.setServerOptions({
		port: 3000,
		https: process.env.SSL_KEY_PATH && process.env.SSL_CRT_PATH ? {
			key: process.env.SSL_KEY_PATH,
			cert: process.env.SSL_CRT_PATH
		} : false
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
