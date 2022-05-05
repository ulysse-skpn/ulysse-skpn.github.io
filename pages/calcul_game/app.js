// Récupérer le h1 qui affichera le premier nombre de l'opération
var randomNumberOne = document.getElementById("numberOne");
// Récupérer le h1 qui affichera le deuxième nombre de l'opération
var randomNumberTwo = document.getElementById("numberTwo");
// Récupérer le h1 qui affichera le résultat (soit "Bonne réponse" soit "Mauvaise réponse")
var resultAnswer = document.getElementById("resultat");
// Déclarer une variable qui contiendra le premier nombre de l'opération
var cardNumberOne 
// Déclarer une variable qui contiendra le deuxième nombre de l'opération
var cardNumberTwo 
//Créer une fonction qui :
// - génère 2 nombres aléatoire et les donne en valeur des deux variables préalablement créés en dehors de la fonction
function getRandomInt(){
    cardNumberOne = Math.floor(Math.random() * (10+1 -1) + 1);
    cardNumberTwo = Math.floor(Math.random() * (10+1 -1) + 1);
    randomNumberOne.innerHTML = cardNumberOne;
    randomNumberTwo.innerHTML = cardNumberTwo;
}
// - Ecrit le premier nombre dans le premier h1
/*randomNumberOne.innerHTML = cardNumberOne;*/
/*randomNumberOne.textContent = cardNumberOne;*/
// - Ecrit le deuxième nombre dans le deuxième h1
/*randomNumberTwo.innerHTML = cardNumberTwo;*/
/*randomNumberTwo.textContent = cardNumberTwo;*/


// Executer cette fonction
getRandomInt();

// Ajout d'un écouteur d'événement sur le bouton submit
var buttonSubmit = document.getElementById('buttonSubmit');
buttonSubmit.addEventListener('click', onSubmitCalcul);
// Récupérer le formulaire
var formulaire = document.getElementById("calculform");
// Ajouter un écouteur d'évènement au formulaire (écouter l'envoi de celui-ci)

// Créer la fonction qui se délenchera à l'envoi du formulaire
function onSubmitCalcul(event){
    event.preventDefault();
   /* var formulaire = document.getElementById("calculform");
    formulaire.addEventListener("submit", onSubmitCalcul);*/
    var resultAddition = formulaire.elements.resultAddition.value;
    resultAddition = parseFloat(resultAddition);
    var colorText = document.getElementById("changeText");
    
if( resultAddition == cardNumberOne + cardNumberTwo){
    resultAnswer.textContent = "Bonne réponse !";
    resultAnswer.classList.add("text-success");
    resultAnswer.classList.remove("text-danger");
    getRandomInt();
}else{
    resultAnswer.textContent = "Mauvaise réponse !";
    resultAnswer.classList.add("text-danger");
    resultAnswer.classList.remove("text-success");
}
}



// Cette fonction devra vérifier que la valeur entrée par l'utilisateur est égale à la somme des deux nombres générés aléatoirement





// Si ce n'est pas égal, on écrit "Mauvaise réponse" dans le h1 du résultat, auquel on ajoute la class "text-danger" et retire la class "text-success"


// Sinon, si c'est égal, on écrit "Bonne réponse" dans le h1 du résultat, auquel on ajoute la class "text-success" et retire la class "text-danger", puis on réexecute la fonction qui génère les 2 nombres.
