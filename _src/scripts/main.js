function setSizingVariables() {
	let navHeight = document.querySelector('nav#main-nav') ? document.querySelector('nav#main-nav').offsetHeight : 0;
	document.documentElement.style.setProperty('--nav-height', navHeight + 'px');
}

setSizingVariables();

document.getElementById('nav-main-toggle').addEventListener('click', function(event) {
  document.body.classList.toggle('nav-expanded');
});

window.addEventListener('resize', function() {
	setSizingVariables();
	document.body.classList.remove('nav-expanded');
});
