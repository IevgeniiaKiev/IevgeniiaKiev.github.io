"use strict";

$(function() {

  var myTest = localStorage.getItem('myTest');
  var newTest = JSON.parse(myTest);

  var html = $('#test').html();
  var content = tmpl(html, newTest);
  $('body').append(content);

var rightAnswer = [];
for (var k = 0; k < newTest.testQuestions.length; k++) {
        rightAnswer[k] = newTest.testQuestions[k].correctAnswer;
    }

$(':submit').click(function(event) {
  event.preventDefault();
  var checkedAnswer = $('input:checked');
  var compare = [];
  for (var j = 0; j < checkedAnswer.length; j++) {
           compare[j] = Number(checkedAnswer[j].id);
       };

var result;
  if (JSON.stringify(rightAnswer) == JSON.stringify(compare)) {
    result = 'Все верно!';
  } else {
    result = 'Есть ошибки!';
  }

$('body').append('<div class="modal fade" id="basicModal" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Результат прохождения теста</h4></div><div class="modal-body"><p>'+ result +'</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal" id="closeButton">Закрыть</button></div></div></div></div>');
$(':submit').click(function(event) {
  event.preventDefault();
  $('#basicModal').modal();
});
$('#closeButton').click(function() {
  $(checkedAnswer).prop('checked', false);
});
});
});
