var popup = document.querySelector('.modal-write-us');
var openPopupButton = document.querySelector('.btn-write-us');
var closePopupButton = popup.querySelector('.modal-close');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal--show');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal--show');
});
