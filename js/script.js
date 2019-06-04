var writeUs = document.querySelector('.modal-write-us');
var openWriteUs = document.querySelector('.btn-write-us');
var closeWriteUs = writeUs.querySelector('.modal-close');

openWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUs.classList.add('modal--show');
});

closeWriteUs.addEventListener('click', function () {
  writeUs.classList.remove('modal--show');
});

var modalMap = document.querySelector('.modal-map');
var openModalMap = document.querySelector('.contacts-image');
var closeModalMap = modalMap.querySelector('.modal-close');

openModalMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal--show');
});

closeModalMap.addEventListener('click', function () {
  modalMap.classList.remove('modal--show');
});

/*var modalCart = document.querySelector('.modal-cart');
var openModalCart = document.querySelector('.btn-buy');
var closeModalCart = modalCart.querySelector('.modal-close');

openModalCart.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalCart.classList.add('modal--show');
});

closeModalCart.addEventListener('click', function () {
  modalCart.classList.remove('modal--show');
});*/
