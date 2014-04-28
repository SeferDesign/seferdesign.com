jQuery(document).ready(function($) {

  $('a.scroll').click(function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 50
    }, 500);
  });

  $('#form-contact').submit(function(e) {

    e.preventDefault();

    var thisButton = $('#form-contact').find('button');
    var thisDelay = 1500;

    $.ajax({
      url: $(this).attr('action'),
      type: $(this).attr('method'),
      data: {
        'userName': $(this).find('#contact-name').val(),
        'userEmail': $(this).find('#contact-email').val(),
        'userPhone': $(this).find('#contact-phone').val()
      },
      beforeSend: function() {
        thisButton.attr('disabled', 'disabled');
        thisButton.prepend('<i class="fa fa-refresh left fa-spin"></i>');
        thisButton.find('span').html('Sending...');
      },
      success: function(response) {
        output = '<div class="success">'+response.text+'</div>';
        setTimeout(function() {
          thisButton.find('i.fa').remove();
          thisButton.find('span').html('Sent!');
          $('#form-contact').append('<div id="form-result"></div>');
          $('#form-result').hide().html(output).slideDown();
        }, thisDelay);
      }
    });

    return false;

  });

});
