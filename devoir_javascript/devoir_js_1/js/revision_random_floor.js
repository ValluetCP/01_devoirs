// var chiffreRandom = Math.random();
// chiffreRandom = Math.random*12;
// chiffreRandom = Math.floor(chiffreRandom);


var prenom = [];

var prenom2;

while (prenom.length <= 12){
    prenom2 = prompt("Saisir votre prénom");
    prenom.push(prenom2);
}

document.write(prenom);