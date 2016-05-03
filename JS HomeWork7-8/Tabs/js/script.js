$(function () {
    var tabContainers = $('div.wrapper > div');
    tabContainers.hide().filter(':first').show();

    $('div.wrapper ul.tabs a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('div.wrapper ul.tabs a').removeClass('tab-current');
        $(this).addClass('tab-current');
        return false;
    }).filter(':first').click();
});
