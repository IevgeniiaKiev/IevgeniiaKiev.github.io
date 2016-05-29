alert('Это script 1');
;var button = document.getElementsByClassName('button');

function handler() {
  alert( 'Это script 2' );
}

button[0].addEventListener("click", handler);
