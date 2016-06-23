'use strict';

$(function () {

  var myTest = localStorage.getItem('myTest');
  var newTest = JSON.parse(myTest);

  var wrapper = $('<div class="wrapper">');
  $('body').append(wrapper);
  wrapper.append('<h1>' + questions.head + '</h1>');
  var form = $('<form action="#" method="" name="test">');
  wrapper.append(form);
  var ol = $('<ol>');
  form.append(ol);

  for (var i = 0; i < questions.testQuestions.length; i++) {
    var li = $('<li>' + questions.testQuestions[i].textHead + '</li>');
    ol.append(li);

    for (var j = 0; j < questions.testQuestions[i].answer.length; j++) {
      li.append('<div class="questions"><input type="radio" name="' + questions.testQuestions[i].radioName[j] + '" id="' + questions.testQuestions[i].id[j] + '"><label for="' + questions.testQuestions[i].id[j] + '>">' + questions.testQuestions[i].answer[j] + '</label></div>');
    }
  }

  var button = $('<input type="submit" value="' + questions.submitButton + '" class="btn btn-primary" data-toggle="modal" data-target="#basicModal">');
  wrapper.append(button);

  var rightAnswer = [];
  for (var k = 0; k < newTest.testQuestions.length; k++) {
    rightAnswer[k] = newTest.testQuestions[k].correctAnswer;
  }

  $(':submit').click(function () {
    var checkedAnswer = $('input:checked');
    var compare = [];
    for (var _j = 0; _j < checkedAnswer.length; _j++) {
      compare[_j] = Number(checkedAnswer[_j].id);
    };

    var result = void 0;
    if (JSON.stringify(rightAnswer) == JSON.stringify(compare)) {
      result = 'Все верно!';
    } else {
      result = 'Есть ошибки!';
    }

    $('body').append('<div class="modal fade" id="basicModal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Результат прохождения теста</h4></div><div class="modal-body"><p>' + result + '</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal" id="closeButton">Закрыть</button></div></div></div></div>');

    $('#closeButton').click(function () {
      $(checkedAnswer).prop('checked', false);

      $('#basicModal').on('hidden.bs.modal', function () {
        window.location.reload(true);
      });
    });
  });
});
