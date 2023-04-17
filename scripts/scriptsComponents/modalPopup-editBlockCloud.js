var modal = document.getElementById('modalPopup-editBlockCloud');
var modalClose = document.querySelector('.modalPopup-editBlockCloud__close');
var myLinks = document.querySelectorAll('.button__editBlockCloud');
var editBlockLink = document.querySelector('.modalPopup-editBlockCloud');
var cloudEditBlockPopup = document.getElementById('popup-editBlockCloud');

// Otevření modálního popupu po kliknutí na odkazy
myLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'block';
  });
});

// Zavření modálního popupu po kliknutí na ikonu kříže nebo na odkazy s třídou .modalPopup-editBlockCloud__close
modal.addEventListener('click', function(event) {
  if (event.target.classList.contains('modalPopup-editBlockCloud__close') || event.target.classList.contains('active__popup')) {
    modal.style.display = 'none';
  }
});

// Zavření modálního popupu a zobrazení popupu s ID popup_cloud-save-block_plan po kliknutí na odkaz s třídou .save-block_plan
editBlockLink.addEventListener('click', function() {
  modal.style.display = 'none';
  cloudEditBlockPopup.style.display = 'block';
});
