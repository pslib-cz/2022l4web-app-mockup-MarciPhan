const vyberMoznosti = document.getElementById('vyber-moznosti');
        const obsahDivs = document.querySelectorAll('.obsah');
      
        function zobrazObsah() {
          // Skryjte všechny divy s obsahem
          obsahDivs.forEach(div => {
            div.style.display = 'none';
          });
      
          // Zobrazte pouze div s odpovídajícím class atributem
          const vybranaMoznost = vyberMoznosti.value;
          const vybranyDiv = document.querySelector(`.obsah.${vybranaMoznost}`);
          if (vybranyDiv) {
            vybranyDiv.style.display = 'block';
          }
        }
      
        // Přidejte posluchači změny pro výběrové pole
        vyberMoznosti.addEventListener('change', zobrazObsah);
      
        // Zobrazte výchozí obsah pro počáteční hodnotu výběrového pole
        zobrazObsah();