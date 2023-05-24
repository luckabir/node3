const path = require('path');

//#1 Nazev souboru 
console.log(path.basename(__filename));

//#2 cesta ke souboru
console.log(path.dirname(__filename));

//#3 přípona souboru
console.log(path.extname(__filename));

//#4 objekt
console.log(path.parse(__filename));

//#5 concat
console.log(path.join(__dirname, 'test', 'hello.html'));


