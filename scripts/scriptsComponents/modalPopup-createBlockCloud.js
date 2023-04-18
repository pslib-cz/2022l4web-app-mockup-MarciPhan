var modal = document.getElementById('modalPopup-createBlockCloud');
var modalClose = document.querySelector('.modalPopup-createBlockCloud__close');
var myLinks = document.querySelectorAll('.button__createBlockCloud');
var createBlockLink = document.querySelector('.modalPopup-createBlockCloud');
var cloudCreateBlockPopup = document.querySelector('.popup_add-block_plan');

// Otevření modálního popupu po kliknutí na odkazy
myLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'block';
  });
});

// Zavření modálního popupu po kliknutí na odkazy s třídou .modalPopup-createBlockCloud__close
modal.addEventListener('click', function(event) {
  if (event.target.classList.contains('modalPopup-createBlockCloud__close') || event.target.classList.contains('active__popup')) {
    modal.style.display = 'none';
  }
});

// Zavření modálního popupu a zobrazení popupu s ID modalPopup-createBlockCloud po kliknutí na odkaz s třídou .popup-createBlockCloud
createBlockLink.addEventListener('click', function() {
  modal.style.display = 'none';
  cloudCreateBlockPopup.style.display = 'block';
});
