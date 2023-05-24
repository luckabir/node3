const fs = require('fs');
const path = require('path');

//#1 vytvoření souboru
/*fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Složka se vytvořila');
}); */

//#2 vytvoření a zapsání (do souboru)
/*fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Heya!', err => {
    if (err) throw err;
    console.log('Bylo zapsáno...');
}); */

//#3 Připsání
/*fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Heya!', err => {
    if (err) throw err;
    console.log('Bylo zapsáno...');
}); */


//#4 přečtení souboru
/*fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});*/

//#5 přejmenování ouboru
/*fs.rename(
path.join(__dirname, '/test', 'hello.txt'), 
path.join(__dirname, '/test', 'heya.txt'), err => {
    if (err) throw err;
    console.log('Soubor byl prejmenovan');
});*/


