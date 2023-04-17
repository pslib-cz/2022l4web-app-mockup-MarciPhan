var modal = document.getElementById('modal');
var modalClose = document.querySelector('.modal__close');
var myLinks = document.querySelectorAll('.active__popup');
var saveBlockLink = document.querySelector('.save-block_plan');
var cloudSaveBlockPopup = document.getElementById('popup_cloud-save-block_plan');

// Otevření modálního popupu po kliknutí na odkazy
myLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'block';
  });
});

// Zavření modálního popupu po kliknutí na ikonu kříže nebo na odkazy s třídou .modal__close
modal.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal__close') || event.target.classList.contains('active__popup')) {
    modal.style.display = 'none';
  }
});

// Zavření modálního popupu a zobrazení popupu s ID popup_cloud-save-block_plan po kliknutí na odkaz s třídou .save-block_plan
saveBlockLink.addEventListener('click', function() {
  modal.style.display = 'none';
  cloudSaveBlockPopup.style.display = 'block';
});
