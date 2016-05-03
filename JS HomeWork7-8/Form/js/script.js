$(document).ready(function() {
  $('.help_message').hide();

  $(':text').mouseover(function() {
    $(this).siblings('.help_message').fadeIn(500);
  });
  $(':text').mouseout(function() {
    $(this).siblings('.help_message').fadeOut(500);
  });

  $(':button').click(function() {
    $('.help_message').show();
    $('.help_message').delay(5000).fadeOut('slow');
  });
});
