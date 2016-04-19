var pageTest = {
 header: 'Тест по программированию',
 question: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
 answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3',
          'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3',
          'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
 submitButton: 'Проверить мои результаты'
}

var body = document.body;

var wrapper = document.createElement('div');
wrapper.classList.add('panel-body');
body.appendChild(wrapper);

var header = document.createElement('h2');
header.classList.add('text-center');
header.innerHTML = pageTest.header;
wrapper.appendChild(header);

var form = document.createElement('form');
form.action = '#';
form.method = ' ';
wrapper.appendChild(form);

var list = document.createElement('ol');
form.appendChild(list);
for (i = 0; i < pageTest.question.length; i++) {
    var listItem = document.createElement('li');
    list.appendChild(listItem);
    var headQuestion = document.createElement('h4');
    headQuestion.innerHTML = pageTest.question[i];
    listItem.appendChild(headQuestion);
}

var button = document.createElement('input');
button.type = 'submit';
button.value = pageTest.submitButton;
button.classList.add ('btn');
button.classList.add('btn-primary');
button.style.margin = '0 500px';
form.appendChild(button);
