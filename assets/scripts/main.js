var workTitles = document.querySelectorAll('.work-titles li');
var workContent = document.querySelectorAll('.work-content li');

function setVH() {
	var vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
}

function index(item, collection) {
	return [].slice.call(document.querySelectorAll(collection)).indexOf(item);
}

setVH();

[].forEach.call(workTitles, function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
		var newIndex = index(el, '.work-titles li');
		[].forEach.call(workTitles, function(workTitleItem) {
			workTitleItem.classList.remove('active');
		});
		[].forEach.call(workContent, function(workContentItem) {
			workContentItem.classList.remove('active');
		});
		el.classList += 'active';
		workContent[newIndex].classList += 'active';
  });
});

window.addEventListener('resize', function() {
	setVH();
});
