// najdeme tlačítka a div na stránce
var addButton = document.getElementById("addButton");
var removeButton = document.getElementById("removeButton");
var container = document.getElementById("container");

// přidáme posluchač událostí pro tlačítko Přidat
addButton.addEventListener("click", function() {
    // vytvoříme nový div s obsahem
    var newDiv = document.createElement("div");
    newDiv.textContent = "Toto je nový div!";

    // připojíme nový div k existujícímu divu na stránce
    container.appendChild(newDiv);
});

// přidáme posluchač událostí pro tlačítko Odebrat
removeButton.addEventListener("click", function() {
    // zjistíme, jestli existuje nějaký div, který můžeme odebrat
    if (container.children.length > 0) {
        // odebereme poslední div z containeru
        var lastDiv = container.lastChild;
        container.removeChild(lastDiv);
    }
});