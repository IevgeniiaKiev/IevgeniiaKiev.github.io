var pageTest = {
 header: 'Тест по программированию',
 question: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
 answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3',
          'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3',
          'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
 checkboxName: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
 id: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
 submitButton: 'Проверить мои результаты'
};

var k = 0;

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
    var questionName = document.createElement('h4');
    questionName.innerHTML = pageTest.question[i];
    listItem.appendChild(questionName);

    for (j = 0; j < 3; j++) {
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = pageTest.checkboxName[k];
      checkbox.id = pageTest.id[k];
      var p = document.createElement('p');
      var label = document.createElement('label');
      label.htmlFor = pageTest.id[k];
      label.appendChild(document.createTextNode(pageTest.answer[k]));
      listItem.appendChild(p);
      p.appendChild(checkbox);
      p.appendChild(label);
      k++;
    }
}

var button = document.createElement('input');
button.type = 'submit';
button.value = pageTest.submitButton;
button.classList.add ('btn');
button.classList.add('btn-primary');
button.style.margin = '0 550px';
form.appendChild(button);
