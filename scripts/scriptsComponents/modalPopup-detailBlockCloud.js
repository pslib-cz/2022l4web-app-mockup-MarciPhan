var modal = document.getElementById('modalPopup-detailBlockCloud');
var modalClose = document.querySelector('.modalPopup-detailBlockCloud__close');
var myLinks = document.querySelectorAll('.button__detailBlockCloud');
var editBlockLink = document.querySelector('.modalPopup-openEditBlockCloud');
var cloudEditBlockPopup = document.getElementById('modalPopup-editBlockCloud');
var deleteBlockLink = document.querySelector('.popup-deleteBlockCloud2');
var cloudDeleteBlockPopup = document.querySelector('.popup-delete-block_plan');

// Otevření modálního popupu po kliknutí na odkazy
myLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'block';
  });
});

// Zavření modálního popupu po kliknutí na odkazy s třídou .modalPopup-detailBlockCloud__close
modalClose.addEventListener('click', function(event) {
  modal.style.display = 'none';
});

// Zavření modálního popupu a zobrazení popupu s ID modalPopup-editBlockCloud po kliknutí na odkaz s třídou .modalPopup-openEditBlockCloud
editBlockLink.addEventListener('click', function() {
  modal.style.display = 'none';
  cloudEditBlockPopup.style.display = 'block';
});

// Zavření modálního popupu a zobrazení popupu s ID modalPopup-deleteBlockCloud po kliknutí na odkaz s třídou .modalPopup-deleteBlockCloud
deleteBlockLink.addEventListener('click', function() {
  modal.style.display = 'none';
  cloudDeleteBlockPopup.style.display = 'block';
});