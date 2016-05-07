$(document).ready(function(){

$(".niceCheck").mousedown(
/* при клике на чекбоксе меняем его вид и значение */
function() {
  changeCheck($(this));
});

$(".niceCheck").each(
/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
function() {
     changeCheckStart($(this));
});
});
/*
	функция смены вида и значения чекбокса
	el - span контейнер дял обычного чекбокса
	.checkbox_js - чекбокс
*/
function changeCheck(el) {
     var el = el,
     input = el.find(".checkbox_js").eq(0);
   	 if(!input.attr("checked")) {
		el.css("background-position","-49px -3px");
		input.attr("checked", true)
	} else {
		el.css("background-position","-2px -3px");
		input.attr("checked", false)
	}
     return true;
}
/*
	если установлен атрибут checked, меняем вид чекбокса
*/
function changeCheckStart(el) {
var el = el,
		input = el.find(".checkbox_js").eq(0);
      if(input.attr("checked")) {
		el.css("background-position","-49px -3px");
		}
     return true;
}
