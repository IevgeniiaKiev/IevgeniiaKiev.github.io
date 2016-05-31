$(function() {

$('#searchButton').on('click', runSearch);

$('#searchInput').keydown(function(event) {
        if (event.keyCode === 13) {
            runSearch;
        };
    });

    function runSearch(e) {
        e.preventDefault();
        $('img').remove();
        var searchKey = $('#searchInput').val();

        $.ajax({
            url: 'https://pixabay.com/api/?key=2625359-f397bd2a457159fc8090d8204&q=' + searchKey + '&image_type=photo',
            dataType: 'jsonp',
            success: function (data) {
                var result = data.hits;

               if (data.hits == 0) {
                   $('.searchResult').append('<p>Nothing was found!</p>');
                 }

                for (var i = 0; i < data.hits.length; i++) {
                    $('.searchResult').append('<img class="img_result" src="' + result[i].webformatURL + '">');
                }
            },
            error: function () {
                alert('Error!');
            }
        });
    }
});
