// získání odkazů
var myLinks = document.querySelectorAll(".active__popup");

// získání popupu
var myPopup = document.getElementById("popup");

// získání tlačítka s křížkem
var closeBtn = myPopup.querySelector(".popup_close");

// funkce pro skrytí popupu
function hidePopup() {
  myPopup.style.display = "none"; // skrytí popupu
}

// přidání event listeneru pro kliknutí na každý odkaz
myLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // zamezení výchozího chování odkazu
    myPopup.style.display = "block"; // zobrazení popupu
    setTimeout(hidePopup, 7000); // skrytí popupu po 7 vteřinách
  });
});

// přidání event listeneru pro kliknutí na tlačítko s křížkem
closeBtn.addEventListener("click", function() {
  myPopup.style.display = "none"; // skrytí popupu
});
