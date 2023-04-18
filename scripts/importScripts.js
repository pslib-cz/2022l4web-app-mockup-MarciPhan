import('./scriptsComponents/menu.js')
  .then(() => {
    console.log('menu.js byl načten.');
  })
  .catch((error) => {
    console.log(`menu.js se nepodařilo načíst. Chyba: ${error}`);
  });

//popup.js
  import('./scriptsComponents/popup.js')
  .then(() => {
    console.log('popup.js byl načten.');
  })
  .catch((error) => {
    console.log(`popup.js se nepodařilo načíst. Chyba: ${error}`);
  });
  
  //modalPopup-createBlockCloud.js
  import('./scriptsComponents/modalPopup-createBlockCloud.js')
  .then(() => {
    console.log('modalPopup-createBlockCloud.js byl načten.');
  })
  .catch((error) => {
    console.log(`modalPopup-createBlockCloud.js se nepodařilo načíst. Chyba: ${error}`);
  });

  //modalPopup-detailBlockCloud.js
  import('./scriptsComponents/modalPopup-detailBlockCloud.js')
  .then(() => {
    console.log('modalPopup-detailBlockCloud.js byl načten.');
  })
  .catch((error) => {
    console.log(`modalPopup-detailBlockCloud.js se nepodařilo načíst. Chyba: ${error}`);
  });

  //modalPopup-editBlockCloud.js
  import('./scriptsComponents/modalPopup-editBlockCloud.js')
  .then(() => {
    console.log('modalPopup-editBlockCloud.js byl načten.');
  })
  .catch((error) => {
    console.log(`modalPopup-editBlockCloud.js se nepodařilo načíst. Chyba: ${error}`);
  });


    //blockPopups.js
    import('./scriptsComponents/blockPopups.js')
    .then(() => {
      console.log('blockPopups.js byl načten.');
    })
    .catch((error) => {
      console.log(`blockPopups.js se nepodařilo načíst. Chyba: ${error}`);
    });
   
    

  //cimport('./scriptsComponents/accordion.js')
  //.then(() => {
  //  console.log('accordion.js byl načten.');
  // })
 // .catch(() => {
  //  console.log('accordion.js se nepodařilo načíst.');
 // });

