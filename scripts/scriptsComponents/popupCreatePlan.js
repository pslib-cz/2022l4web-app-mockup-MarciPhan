// získání odkazu
var myLink = document.querySelector(".active__createpopup");

// získání popupu
var myPopup = document.getElementById("popup_create-plan");

// získání tlačítka s křížkem
var closeBtn = myPopup.querySelector(".popup_close");

// funkce pro skrytí popupu
function hidePopup() {
  myPopup.style.display = "none"; // skrytí popupu
}

// přidání event listeneru pro kliknutí na odkaz, pokud je odkaz nalezen a popup je načten
if (myLink && myPopup) {
  myLink.addEventListener("click", function(event) {
    event.preventDefault(); // zamezení výchozího chování odkazu
    myPopup.style.display = "block"; // zobrazení popupu
  });
}

