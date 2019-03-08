// npm install --save @optimizely/optimizely-sdk request request-promise prompt-input

const userId = process.argv[2] || 'anonymous123';

const url = 'https://cdn.optimizely.com/datafiles/Pex4GNxQnzDErs3TJZ7cc3.json';
const rp = require('request-promise');
const Input = require('prompt-input');
const options = {uri: url, json: true};
const optimizelySDK = require('@optimizely/optimizely-sdk');
const dimColor = '[2m%s[0m';

//request to retrieve the datafile
rp(options).then(function(datafile) {

  // Instantiate an Optimizely client upon retrieving datafile
const optimizelyClientInstance = optimizelySDK.createInstance({
  datafile: datafile,
});
var attribute = /* ? */;
// A/B Test
var variation = /* ? */;
if (variation === /* ? */ || null) {
  menu_1();
} else if (variation === /* ? */) {
  menu_2();
}

// Feature Flag

var prixFixeEnabled = /* ? */;
if (prixFixeEnabled) {
  console.log("   -- prix fixe --    ");
  console.log('Appetizer: ', /* ? */);
  console.log('Entree: ', /* ? */);
  console.log('Dessert: ', /* ? */);
  var price = /* ? */
  console.log(dimColor, `DEBUG: [Feature ON] The feature "prix_fixe" is on for user "${userId}"`);
  var input = new Input({
    message: `Tonight we are also offering a prix fixe meal for $${price}, are you interested?`
  });
  input.run().then(function(response) {
      if (response.toLowerCase() === 'yes') {
        optimizelyClientInstance.track('ordered_prix', userId);
        console.log('Coming right up!');
        console.log(dimColor, `DEBUG: Tracked event "ordered_prix" for user "${userId}"`);
      } else {
        menuOrder();
      }
    });
} else menuOrder();



/*************** functions ***************/

// Menu order prompts
function menuOrder() {
var appetizer = new Input({
  message: "Would you like to start with an appetizer?"
});
appetizer.run().then(function(response) {
  if (response.toLowerCase() === 'yes') {

     /* ? */  //app tracking call

    console.log(dimColor, `DEBUG: Tracked event "ordered_app" for user "${userId}"`);
  }
      var entree = new Input({
        message: "Would you like the entree?"
      });
      entree.run().then(function(response) {
        if (response.toLowerCase() === 'yes') {

            /* ? */  //entree tracking call

          console.log(dimColor, `DEBUG: Tracked event "ordered_entree" for user "${userId}"`);
        }
            var dessert = new Input({
              message: "Would you like dessert?"
            });
            dessert.run().then(function(response) {
              if (response.toLowerCase() === 'yes') {

                /* ? */   //Dessert tracking call

                console.log(dimColor, `DEBUG: Tracked event "ordered_dessert" for user "${userId}"`);
              }
   });
  });
 });
}


// Menu variations
function menu_1() {
    console.log(dimColor, `DEBUG: [Variation_1] User "${userId}" has been bucketed in Variation 1`);
    console.log(`       Hi ${userId}!       `);
    console.log("     ~ Optimizeli's ~      ");
    console.log("          Menu 1           ");
    console.log(" -----   Appetizers  ----- ");
    console.log("Grilled Brussel Sprouts ");
    console.log("  -----  Entrees   -----   ");
    console.log("Duck Confit        ");
    console.log("   ----- Desserts -----    ");
    console.log("Cheesecake                 ");
    console.log("   ");
}

function menu_2() {
  console.log(dimColor, `DEBUG: [Variation_1] User "${userId}" has been bucketed in Variation 2`);
  console.log(`       Hi ${userId}!    `);
  console.log("~ Welcome to Optimizeli's ~");
  console.log("           Menu 2           ");
  console.log("  ----   Appetizers  ----   ");
  console.log("Guac            ");
  console.log("  -----   Entrees   -----  ");
  console.log("Big Mac          ");
  console.log("   ----- Desserts   -----  ");
  console.log("Snickers          ");
  console.log("  ");
}

});
