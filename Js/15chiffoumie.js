let utilisateur = prompt("Choisie entre Pierre feuille et ciseau.");

let ordinateur = ["pierre", "feuille", "ciseau"];
let ordinateurchoix = ordinateur[Math.floor(Math.random() * ordinateur.length)];

document.write(" Vous avez choisi : " + utilisateur);
document.write(" L'ordinateur a choisi : " + ordinateurchoix );


if (utilisateur === ordinateurchoix) {
    document.write(" C'est une égalité ! ");
} else if (
    (utilisateur === "pierre" && ordinateurchoix === "ciseau")
    (utilisateur === "feuille" && ordinateurchoix === "pierre") 
    (utilisateur === "ciseau" && ordinateurchoix === "feuille")
) {
    document.write(" Vous avez gagné ! ");
} else {
    document.write(" L'ordinateur a gagné ! ");
}