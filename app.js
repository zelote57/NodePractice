/* Ejercio usando File System*/

const fs = require('fs');
const userName = 'Gus'

fs.writeFile('user-data.txt', 'Nombre: ' + userName, 
(err)=> {
    if (err){
        console.log(err);
        return;
    }
    console.log("File created");
});