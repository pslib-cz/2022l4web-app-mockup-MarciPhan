// získání odkazu
var myLink = document.getElementById("myLink");

// získání popupu
var myPopup = document.getElementById("myPopup");

// získání tlačítka s křížkem
var closeBtn = myPopup.querySelector(".close");

// přidání event listeneru pro kliknutí na odkaz
myLink.addEventListener("click", function(event) {
  event.preventDefault(); // zamezení výchozího chování odkazu
  myPopup.style.display = "block"; // zobrazení popupu
});

// přidání event listeneru pro kliknutí na tlačítko s křížkem
closeBtn.addEventListener("click", function() {
  myPopup.style.display = "none"; // skrytí popupu
});
// přidání event listeneru pro kliknutí na odkaz
myLink.addEventListener("click", function(event) {
    event.preventDefault(); // zamezení výchozího chování odkazu
    myPopup.style.display = "block"; // zobrazení popupu
    setTimeout(function(){ myPopup.style.display = "none"; }, 3000); // skrytí popupu po 7 vteřinách
  });