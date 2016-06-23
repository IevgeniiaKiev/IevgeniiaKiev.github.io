let questions = {
      head: 'Тест по программированию',
      testQuestions: [
        {textHead: 'Вопрос №1',
         answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
         radioName: ['one', 'one', 'one'],
         id: ['1', '2', '3'],
         correctAnswer: 1},
         {textHead: 'Вопрос №2',
          answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
          radioName: ['two', 'two', 'two'],
          id: ['4', '5', '6'],
         correctAnswer: 5},
         {textHead: 'Вопрос №3',
          answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
          radioName: ['three', 'three', 'three'],
          id: ['7', '8', '9'],
         correctAnswer: 8},
      ],
      submitButton: 'Проверить мои результаты'
    };

  localStorage.setItem('myTest', JSON.stringify(questions));
