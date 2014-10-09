jQuery(document).ready(function($) {

  $('a.scroll').click(function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 20
    }, 500);
  });

});
