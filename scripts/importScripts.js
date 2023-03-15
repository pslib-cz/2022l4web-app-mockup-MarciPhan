import('./scriptsComponents/menu.js')
  .then(() => {
    console.log('menu.js byl načten.');
    // zde můžete používat funkce a proměnné z menu.js
  })
  .catch(() => {
    console.log('menu.js se nepodařilo načíst.');
  });
