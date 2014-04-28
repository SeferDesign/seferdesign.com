jQuery(document).ready(function($) {

  $('a.scroll').click(function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 50
    }, 500);
  });

  /*$("#form-contact").submit(function() {
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function(data) {
        alert(data);
      }
    });

    return false;
  });*/

  $('#form-contact').submit(function(e) {

    e.preventDefault();

    post_data = {
      'userName': $(this).find('#contact-name').val(),
      'userEmail': $(this).find('#contact-email').val(),
      'userPhone': $(this).find('#contact-phone').val()
    };

    $.post('mail.php', post_data, function(response) {

      if(response.type == 'error') {
        output = '<div class="error">'+response.text+'</div>';
      } else {
        output = '<div class="success">'+response.text+'</div>';
      }

      $('#form-contact').append('<div id="form-result"></div>');

      $('#form-result').hide().html(output).slideDown();

    }, 'json');

    return false;

  });

});
