function setVH() {
	document.documentElement.style.setProperty('--vh', (Math.ceil((window.innerHeight * 0.01) * 100) / 100) + 'px');
}

setVH();

document.getElementById('nav-main-toggle').addEventListener('click', function(event) {
  document.body.classList.toggle('nav-expanded');
});

window.addEventListener('resize', function() {
	setVH();
	document.body.classList.remove('nav-expanded');
});
