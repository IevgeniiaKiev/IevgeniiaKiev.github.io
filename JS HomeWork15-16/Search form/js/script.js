$(function() {

var API_KEY = '2625359-f397bd2a457159fc8090d8204';

var limit = 12;

var minHeight = 250;
var minWidth = 250;

var currentIndex = 0;
var currentTerm = "";

var searchButton = $('#searchButton');
var searchInput = $('#searchInput');
var searcResult = $('body').append('<div class="searchResult">');

searchButton.click(function() {
      runSearch(searchInput.val(), 0);
});

searchInput.keydown(function(event) {
        if(event.keyCode == 13) {
            runSearch(searchInput.val(), 0);
        }
});

function runSearch(term, index) {
    currentTerm = term;
    currentIndex = index;
    var page = index+1;
    var url = "https://pixabay.com/api/?key="+API_KEY
                +"&q="+encodeURIComponent(term)
                +"&per_page="+limit
                +"&page="+page
                +"&min_width="+minWidth
                +"&minHeight="+minHeight;

    $.ajax({
        url: url,
        success: searchComplete,
        error: searchFail,
        dataType: "json"
    });
}

function searchComplete(json) {

    var totalResults = json.totalHits;
    var contentDiv = $('#searchResult').empty();

    var results = json.hits;

    if (results.length == 0)
        $("<p>Nothing found</p>").appendTo(contentDiv);

    for (var i = 0; i < results.length; i++) {
        var result = results[i];

        var imgContainer = $('<div class="imgContainer">');
        var newImg = document.createElement('img');

        newImg.src = result.previewURL;

        var imgWidth = (result.previewWidth > minWidth)?result.previewWidth:minWidth;
        var imgHeight = (result.previewHeight > minHeight)?result.previewHeight:minHeight;
        imgContainer.width(imgWidth).height(imgHeight);
        imgContainer.append($(newImg));
        imgContainer.appendTo(contentDiv);
}
};

function searchFail(jqXHR, textStatus, errorThrown) {
    alert('Couldn\'t connect to Pixabay: ' + textStatus + ' ' + errorThrown);
}

});
