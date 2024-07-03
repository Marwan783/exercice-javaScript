
// for (let i = prompt("écrie un nombre"); i <= 10; i++) {
//     if (i % 2 === 0) {
//         document.write( i + " est pair ");
//     }if (i % 2 === 1) {
//         document.write( i + " est impair ");
//     }
// }

let nb = parseInt(prompt("donne moi un nombre"));
let nbMax = nb + 10;
for(let liste = nb; liste <= nbMax; liste++){
    if (liste % 2 === 0){
        document.write("<p style='color:blue'> c'est un nombre pair " + liste + "</p>");
    }else {
        document.write("<p style='color:blue'> c'est un nombre impair " + liste + "</p>");
    }
}