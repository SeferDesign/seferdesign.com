const fs = require('fs');
const UglifyJS = require('uglify-js');
const sass = require('sass');

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

module.exports = {
	css: generateCSS().string,
	js: generateJS(),
	site: {
		title: 'Sefer Design Co.',
		company_name: 'Sefer Design Company LLC',
		description: 'Chicago Web Design and Web Development',
		descriptionLong: 'Chicago Web Design and Web Development. We build sites and tools for the modern web.'
	}
};
