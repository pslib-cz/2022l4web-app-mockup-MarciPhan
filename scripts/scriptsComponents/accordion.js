// vybereme všechny bloky
const blocks = document.querySelectorAll('.block');

// pro každý blok přidáme event listener
blocks.forEach(block => {
  // najdeme formulář uvnitř bloku
  const form = block.querySelector('.form__textarea');
  
  // přidáme event listener na kliknutí na celý blok
  block.addEventListener('click', () => {
    // přepneme třídu pro zobrazení/skrytí formuláře
    form.classList.toggle('form--hidden');
  });
});
