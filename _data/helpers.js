import fs from 'fs';
import UglifyJS from 'uglify-js';
import * as sass from 'sass'

function generateCSS() {
	const rendered = sass.compile('./_src/style/style.scss', {
		style: 'compressed'
	}).css;
	const renderedToString = rendered.toString();
	return {
		string: renderedToString
	};
}

function generateJS() {
	const rendered = UglifyJS.minify(fs.readFileSync('./_src/scripts/main.js', 'utf8')).code;
	return rendered;
}

export const css = generateCSS().string;
export const js = generateJS();
