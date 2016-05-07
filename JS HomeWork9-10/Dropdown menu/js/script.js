$(document).ready(function() {
  $('.dropdown').hover(function() {
     $('.submenu').slideDown('slow')
  },
    function() {
      $('.submenu').slideUp('slow');
  });

  $('.dropdown_sub').hover(function() {
     $('.sub_submenu').slideDown('slow');
  },
    function() {
     $('.sub_submenu').slideUp('slow');
  });

$('.submenu_item').mouseenter(function() {
    $(this).animate({backgroundColor:'#ff4d4d'}, 1000);
});

$('.submenu_item').mouseleave(function() {
   $(this).animate({backgroundColor:'#ff8080'}, 1000);
});

});
