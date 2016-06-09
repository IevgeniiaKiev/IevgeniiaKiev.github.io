$(function() {
  var activeLink = document.getElementsByClassName('accordion_link');

  for (var i = 0; i < activeLink.length; i++) {
    activeLink[i].onclick = function() {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
        return false;
  }
}
});
