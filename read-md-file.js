// aqui se tiene que hacer la funcion que me lea el archivo md, se exporta esa funcion
// quie module export = read

const fs = require ('fs');
//esta funcion busca un archivo .md es sincrono, es bloqueante 

const path = './READMEE.md';
/* fs.access(path, fs.F_OK,(err) => {
    if (err) 
        console.log(err)
    }); */
fs.readFile(path,'utf8',(err,text) => {   
    // porque si mi reg ex no va entre parentesis y la consoleo como grupo no funciona???
    // esta variable va a contener info de cada match
    const r = /I have (\d+) (\w+)/g;         
    let result;  
// hay tres "sofia" en el texto
// el while loop me 
//por què no me lee null???? me repite r. R: por la flag g ¿por què?
//-g (don`t just match the first thing match all of them, single pattern multiple appearence of the pattern)
    console.log(r.exec(text));
    
     while ((result = r.exec(text)) !== null) {
        //aqui necesito un ciclo for que me saque los elementos de un array
        /* for (let index = 0; index < array.length; index++) {
            const element = array[index];
             */    
         console.log(result[0]);     
     }
    
     });

    /* ya funciona 
    while (result != null ) {
        console.log(result[1]);
        result = r.exec(text);
    } */


