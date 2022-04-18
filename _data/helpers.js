const fs = require('fs');
const UglifyJS = require('uglify-js');
const sass = require('sass');

function generateCSS() {
	const rendered = sass.compile('./_src/style/style.scss').css;
	const renderedToString = rendered.toString();
	fs.writeFileSync('dist/style.css', renderedToString);
	return {
		string: renderedToString
	};
}

function generateJS() {
	const rendered = UglifyJS.minify(fs.readFileSync('./_src/scripts/main.js', 'utf8')).code;
	fs.writeFileSync('dist/main.js', rendered);
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
