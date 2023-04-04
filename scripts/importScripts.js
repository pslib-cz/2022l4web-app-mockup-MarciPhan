import('./scriptsComponents/menu.js')
  .then(() => {
    console.log('menu.js byl načten.');
  })
  .catch(() => {
    console.log('menu.js se nepodařilo načíst.');
  });
  import('./scriptsComponents/popup.js')
  .then(() => {
    console.log('popup.js byl načten.');
  })
  .catch(() => {
    console.log('popup.js se nepodařilo načíst.');
  });
  //cimport('./scriptsComponents/accordion.js')
  //.then(() => {
  //  console.log('accordion.js byl načten.');
  // })
 // .catch(() => {
  //  console.log('accordion.js se nepodařilo načíst.');
 // });

