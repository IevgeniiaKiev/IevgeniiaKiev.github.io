$(function() {

  function grid() {
  var $grid = $('.grid').imagesLoaded( function() {
  $grid.masonry({
   itemSelector: '.grid-item',
   percentPosition: true,
   columnWidth: '.grid-sizer'
  });
  });
}

    function runSearch() {

      $('.activity').find('div').remove();
      var searchKey = $('#searchInput').val();

      $.ajax({
          url: 'https://pixabay.com/api',
          method: 'GET',
          dataType: 'jsonp',
          data: {
            key: '2625359-f397bd2a457159fc8090d8204',
            q: searchKey,
            image_type: 'photo',
          },
          success: function (data) {
              var html = $('#pictures_search_result').html();
              var content = tmpl(html, data);
              $('.activity').append(content);
              grid();
            },
            error: function () {
                alert('Error!');
            }
        });
    }

    runSearch();

    $('#searchButton').on('click', function(e) {
            e.preventDefault();
            runSearch();
            $('.searchInput').val('');
        })

})
