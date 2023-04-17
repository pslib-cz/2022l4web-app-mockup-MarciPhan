var modal = document.getElementById('modalPopup-editBlockCloud');
var modalClose = document.querySelector('.modalPopup-editBlockCloud__close');
var myLinks = document.querySelectorAll('.button__editBlockCloud');
var saveBlockLink = document.querySelector('.modalPopup-saveBlockCloud');
var cloudSaveBlockPopup = document.getElementById('popup_cloud-save-block_plan');
var deleteBlockLink = document.querySelector('.popup-deleteBlockCloud');
var cloudDeleteBlockPopup = document.getElementById('popup-deleteBlockCloud');

// Otevření modálního popupu po kliknutí na odkazy
myLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'block';
  });
});

// Zavření modálního popupu po kliknutí na odkazy s třídou .modalPopup-editBlockCloud__close
modalClose.addEventListener('click', function(event) {
  modal.style.display = 'none';
});

// Zavření modálního popupu a zobrazení popupu s ID popup_cloud-save-block_plan po kliknutí na odkaz s třídou .save-block_plan
saveBlockLink.addEventListener('click', function() {
  modal.style.display = 'none';
  cloudSaveBlockPopup.style.display = 'block';
});
// Zavření modálního popupu a zobrazení popupu s ID modalPopup-deleteBlockCloud po kliknutí na odkaz s třídou .modalPopup-deleteBlockCloud
deleteBlockLink.addEventListener('click', function() {
  modal.style.display = 'none';
  cloudDeleteBlockPopup.style.display = 'block';
});