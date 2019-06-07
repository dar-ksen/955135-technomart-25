var writeUs = document.querySelector('.modal-write-us'),
    form    = writeUs.querySelector('form'),
    userName = document.getElementById('user-name'),
    userEmail = document.getElementById('user-email'),
    userLetter = document.getElementById('user-letter'),
    openWriteUs = document.querySelector('.btn-write-us'),
    closeWriteUs = writeUs.querySelector('.modal-close');
var modalMap = document.querySelector('.modal-map'),
    openModalMap = document.querySelector('.contacts-image'),
    closeModalMap = modalMap.querySelector('.modal-close');

window.addEventListener('keydown', function (evt){
  if (evt.keyCode === 27) {
    console.log('Нажато ESC');
    evt.preventDefault();
    if (writeUs.classList.contains('modal--show')) {
      writeUs.classList.remove('modal--show');
    }
    if (modalMap.classList.contains('modal--show')) {
      modalMap.classList.remove('modal--show');
    }
    if (modalCart.classList.contains('modal--show')) {
      modalCart.classList.remove('modal--show');
    }
  }
});

var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("userName");
} catch (err) {
    isStorageSupport = false;
}
console.log(storage);

openWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUs.classList.add('modal--show');
  if (!storage) {
    userName.value = storage;/*Данные не отображает*/
    userEmail.value = storage;/*Здесь точно ошибка*/
    userLetter.focus();
  } else {
    userName.focus();
  }
});

closeWriteUs.addEventListener('click', function () {
  writeUs.classList.remove('modal--show');
});

form.addEventListener('submit', function (evt){
  if (!userName||!userEmail) {
    evt.preventDefault();
    console.log('Введите имя и email');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('userName', userName.value);
      localStorage.setItem('userEmail', userEmail.value);
    }
  }
})


openModalMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal--show');
});

closeModalMap.addEventListener('click', function () {
  modalMap.classList.remove('modal--show');
});

var modalCart = document.querySelector('.modal-cart');
var closeModalCarts = modalCart.querySelector('.modal-close');
var continueModalCarts = modalCart.querySelector('.btn-continue');
var carts = document.querySelector('.card-list');

carts.onclick =function(evt) {
  var target = evt.target;
  console.log('target');
  if (!event.target.classList.contains('btn-buy')) return;
  console.log(evt.target);
  evt.preventDefault();
  modalCart.classList.add('modal--show');
}

closeModalCarts.addEventListener('click', function () {
  modalCart.classList.remove('modal--show');
});

continueModalCarts.addEventListener('click', function () {
  modalCart.classList.remove('modal--show');
});


/*var modalCart = document.querySelector('.modal-cart');
var openModalCarts = document.querySelectorAll('.btn-buy');
var closeModalCarts = modalCart.querySelector('.modal-close');
var continueModalCarts = modalCart.querySelector('.btn-continue');

for (var i = 0; i < openModalCarts.length; i++){
  var openModalCart = openModalCarts[i];
  openModalCart.addEventListener('click', clickModalCart);
}

function clickModalCart(evt) {
  evt.preventDefault();
  modalCart.classList.add('modal--show');
}

closeModalCarts.addEventListener('click', function () {
  modalCart.classList.remove('modal--show');
});

continueModalCarts.addEventListener('click', function () {
  modalCart.classList.remove('modal--show');
});*/
