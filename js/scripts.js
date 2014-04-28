jQuery(document).ready(function($) {

  $('a.scroll').click(function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 50
    }, 500);
  });

  $("#form-contact").submit(function() {
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function(data) {
        alert(data);
      }
    });

    return false;
  });

});
