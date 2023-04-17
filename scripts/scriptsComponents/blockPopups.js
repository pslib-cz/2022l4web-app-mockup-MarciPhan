var modalClose = document.querySelector('.modalPopup-detailBlockCloud__close');
var modalClose = document.querySelector('.modalPopup-detailBlockCloud__close');
var myLinks = document.querySelectorAll('.button__detailBlockCloud');


// Zavření modálního popupu a zobrazení popupu s ID modalPopup-editBlockCloud po kliknutí na odkaz s třídou .modalPopup-openEditBlockCloud
editBlockLink.addEventListener('click', function() {
  cloudEditBlockPopup.style.display = 'block';
});
