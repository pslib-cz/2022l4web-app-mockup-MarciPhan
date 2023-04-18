// Získání všech elementů s třídou .popup
const myPopups = document.querySelectorAll('.popup');

// Funkce pro skrytí popupu
function hidePopup(popup) {
  popup.style.display = 'none';
}

// Přidání event listeneru pro kliknutí na tlačítka s křížkem u všech popupů
myPopups.forEach((popup) => {
  const closeBtn = popup.querySelector('.popup_close');
  
  // Skrytí popupu po 3 sekundách (3000 ms)
  setTimeout(() => {
    hidePopup(popup);
  }, 3000);

  // Přidání event listeneru pro kliknutí na tlačítko s křížkem, pokud je tlačítko nalezeno
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      hidePopup(popup);
    });
  }
});
