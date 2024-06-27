let note = parseFloat(prompt("écrive votre note du bac"))

if( note < 10){
    alert("recalé")
}else if(note < 12){
    alert("reçu")
}else if(note >= 12){
    alert("reçu avec mention")
}
else{
    alert("récriver votre note")
}