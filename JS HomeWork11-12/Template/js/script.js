$(document).ready(function() {
  var html = $('#profile').html();
  var data = {
   name: 'Семенова Евгения Святославовна',
   profilePicture: {
     image: 'img/profile_pic.png',
     alt: 'Profile photo'
   },
   pictureCaption: 'Студент курса "Go Frontend" в GoIT',
   reasons: 'Хочу учить фронтенд, потому что:',
   reasonsList: ['Хочу сменить род деятельности',
   'Перспективное направление',
   'Постоянное саморазвитие'],
   contacts: {
    headerTel: 'Мой контактный телефон',
    telephone: '+38(099)737-83-32',
    headerFB: 'Мой профиль в фейсбук',
    linkFB: '<a href="https://www.facebook.com/Ievgeniia.Semenova">facebook.com/Ievgeniia.Semenova</a>'
   },
   headerFeedback: 'Мой фидбек:',
   feedback: 'Через 4,5 месяца буду верстать как Junior :)'
 };

  var content = tmpl(html, data);
  $('body').append(content);
});
