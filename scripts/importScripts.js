import('./scriptsComponents/menu.js')
  .then(() => {
    console.log('menu.js byl načten.');
  })
  .catch(() => {
    console.log('menu.js se nepodařilo načíst.');
  });

  //cimport('./scriptsComponents/accordion.js')
  //.then(() => {
  //  console.log('accordion.js byl načten.');
  // })
 // .catch(() => {
  //  console.log('accordion.js se nepodařilo načíst.');
 // });

