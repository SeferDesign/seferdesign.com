function setVH() {
	var vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
}

function index(item, collection) {
	return [].slice.call(document.querySelectorAll(collection)).indexOf(item);
}

setVH();

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 400
});

document.querySelector('#nav-toggle').addEventListener('click', function(e) {
	if (!document.body.classList.contains('nav-has-toggled')) {
		document.body.classList.add('nav-has-toggled');
	}
	document.body.classList.toggle('nav-active');
});

document.querySelectorAll('#main-nav a').forEach(function(link) {
	link.addEventListener('click', function(e) {
		document.body.classList.remove('nav-active');
	});
});

if (document.body.classList.contains('page-home')) {
	document.querySelectorAll('.home-section').forEach(function(section) {
		new Waypoint.Inview({
			element: section,
			enter: function(direction) {
				var title = this.element.dataset.menuTitle;
				if (!title || document.body.classList.contains('intro')) {
					title = '';
				}
				document.querySelector('#nav-toggle').setAttribute('data-menu-title', title);
			},
			offset: {
				top: 100,
				bottom: 100
			}
		});
	});
}

window.addEventListener('resize', function() {
	setVH();
});
