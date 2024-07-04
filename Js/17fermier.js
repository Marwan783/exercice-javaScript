function Totalanimaux(a, b, c) {;
    return  a + b + c
};
function Totalpatte(a, b, c) {;
    return  a * 2 + b * 4 + c * 4
}; 
let poulet = parseFloat(prompt("écrie combien de poulet tu as"));
let vaches = parseFloat(prompt("écrie combien de vaches tu as"));
let chevaux = parseFloat(prompt("écrie combien de chevaux tu as"));
let resultat = Totalanimaux(poulet, vaches, chevaux);
document.write("<p style='color:red'> J'ai " + resultat + " animaux <p>");
let resultatpatte = Totalpatte(poulet, vaches, chevaux);
document.write("<p style='color:red'> il y a " + resultatpatte + " patte dans tout t'est animaux <p>");