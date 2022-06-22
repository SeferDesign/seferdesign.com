function setVH() {
	var vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
}

setVH();

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 250
});

document.querySelector('#nav-toggle').addEventListener('click', function() {
	if (!document.body.classList.contains('nav-has-toggled')) {
		document.body.classList.add('nav-has-toggled');
	}
	document.body.classList.toggle('nav-active');
});

document.querySelectorAll('#main-nav a').forEach(function(link) {
	link.addEventListener('click', function() {
		document.body.classList.remove('nav-active');
	});
});

window.addEventListener('resize', function() {
	setVH();
});
