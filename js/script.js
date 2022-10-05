const popup = document.querySelector('.modal');
const open = document.querySelector('.button-contacts');
const close = popup.querySelector('.modal-close');
const name = popup.querySelector('.modal-name');

open.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  name.focus();
});
close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});