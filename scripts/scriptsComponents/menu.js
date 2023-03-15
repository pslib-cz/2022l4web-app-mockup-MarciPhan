const menuLinks = document.querySelectorAll('.menu-link');
  const contentDivs = document.querySelectorAll('.content1, .content2');

  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const target = link.getAttribute('data-target');

      // Skryjte všechny divy s obsahem
      contentDivs.forEach(div => {
        div.style.display = 'none';
      });

      // Zobrazte pouze vybraný div
      const selectedDiv = document.querySelector(`.${target}`);
      selectedDiv.style.display = 'block';
    });
  });