
// -------------------- EXERCICES - 1 ----------------------- //


// var couleur = ["rouge", "vert", "bleu", "jaune", "violet", "orange"];

// for(var i=0; i<couleur.length; i++){
//     console.log(couleur[i]);
//     // document.write(couleur);
// }

// document.write("<p>Dans le tableau, il y a donc :" + couleur + "</p>");
// // document.write(couleur.length);

// var green = couleur[1];
// document.write(couleur[1])


// -------------------- EXERCICES - 2 (exo_jour_3) ----------------------- //

// Un programme en js :
// 1- Implanter une fonction qui s'appelle "affichagePrenoms" qui prend en paramètre un tableau de 12 prénoms des devs de Vitry
// 2- La fonction doit afficher tous les prénoms en utilisant une boucle "for" et sur une page web
// 3- Déclarer une variable nommée "prenoms" de type tableau qui sera rempli au fur et à mesure dès qu'on saisie un prénom dans une boîte de dialogue, cette boît de dialoque sera affichée tant qu'on saisie 12 prénoms
// 4- Executer la fonction "affichagePrenoms", en lui passant la variable "prenoms"

// var developpeurs = ["Alexis", "Alin", "Cynthia", "Faïssal", "Jérémy", "Karima", "Michel", "Narcis", "Nawal", "Oliver", "Rahim", "Wassila", ];

// function affichagePrenoms(devWeb){

//     for( var i = 0 ; i < developpeurs.length ; i++){
//         document.write(" " + developpeurs[i]);
//     }
// }

// affichagePrenoms(developpeurs);


// -------------------- EXERCICES - 3 (exofunc) ----------------------- //


//----- 1

// affichage();

// function affichage(){
//     console.log('coucou')
// }



//----- 2

// affichageSurLeWeb('Hello');
// // var afficher = affichageSurLeWeb('Hello'); 

// // console.log(afficher);

// function affichageSurLeWeb (ChaineCaractere){
//     document.write(ChaineCaractere);
// }


// -------------------- EXERCICES - 4 (exo_jour_4) ----------------------- //

// Un programme en js :

// 1- Implanter une fonction qui s'appelle "affichagePrenoms2" qui prend deux paramètres : de type tableau(remplis de 12 prénoms) et de type string successivement
// 2- La fonction doit retourner un tableau qui contient deux éléments, le premier sera paramètre tableau, deuxième sera la chaîne de caractère

// 3- nous allons afficher le résultat à partir de la console


var developpeurs = ["Alexis", "Alin", "Cynthia", "Faïssal", "Jérémy", "Karima", "Michel", "Narcis", "Nawal", "Oliver", "Rahim", "Wassila", ];
var msgString = "Ce sont les meilleurs";

function affichagePrenoms2 (typeArray, typeString){
    var resultat = [typeArray + typeString];
    return resultat;
}

var res = affichagePrenoms2(developpeurs, msgString);
// var res = affichagePrenoms2(developpeurs, "Ce sont les meilleurs");
console.log(res);
// console.log(resultat);


// function affichagePrenoms2(paramArray, paramString) {
//     var resultat = [paramArray, paramString, 156];
//     return resultat;
//   }
//   var resultatDeLaFonction = affichagePrenoms2(developpeurs,"Mes développeurs sont géniaux");
//   console.log(resultatDeLaFonction);
//   console.log(resultat);
//   console.log(typeof resultat);