var formulaire = document.getElementById("todoform")

/*Qu'est ce qu'on fait ?
Dans le document, on rcupère l'élément ayant l'ID "todoform" et on le stocké dans la variable "formulaire"

Pourquoi ?
Pour pouvoir manipuler l'élément (ex: ajouter des écouteurs d'événement, modifier les class, son contenu,...)*/




var listesDesTaches = document.getElementById("tasksList")

/*Qu'est ce qu'on fait ?
Dans le document, on rcupère l'élément ayant l'ID "tasksList" et on le stocké dans la variable "listesDesTaches"

Pourquoi ?
Pour pouvoir rajouter du contenu html*/





formulaire.addEventListener("submit", onSubmitAddTodo);

/*Qu'est ce qu'on fait ?
-On ajoute un écouteur d"événement à l'élément qui se trouve dans la variable "formulaire"
-On écoute l'événement "submit" (l'envoi du formulaire)
-Quand cet événement se produit, la fonction "onSubmitAddTodo"s'execute

Pourquoi ?
-Pour réagir à un événement qui se produit sur la page
*/


function onSubmitAddTodo(event){
    event.preventDefault();                                   
    var taskToAdd = formulaire.elements.task.value;             // On récupère la valeur du champ "task" depuis le formulaire et on le met dans la variable "taskToAdd" 
    /* Rajouter un nouvel "article" dans l'élément ayant l'ID "tasksList"*/
   
   
   // On crée une balise "article" et on la met dans la variable "taskArticle"
    var taskArticle = document.createElement("article");
    // On ajoute les class "card" et "mb-3" à l'élément qui se trouve dans "taskArticle"
    taskArticle.classList.add("card", "mb-3");

    // On crée une balise "div" et on la met dans la variable "taskBody"
    var taskBody = document.createElement("div");
    // On ajoute la class"card-body" à l'élément qui se trouve dans la variable "taskBody"
    taskBody.classList.add("card-body");
    // On ajoute taskBody dans taskArticle
    taskArticle.appendChild(taskBody);

    var taskTitre = document.createElement("h1");
    taskTitre.classList.add("h5");
    taskTitre.textContent = taskToAdd;
    // On ajoute taskTitre dans taskBody
    taskBody.appendChild(taskTitre);


    listesDesTaches.appendChild(taskArticle);
    taskArticle.addEventListener("click", onClickCard);
    taskArticle.addEventListener("dblclick", ondblClickCard);
   /* listesDesTaches.innerHTML += taskToAdd;*/
}
/*
Qu'est ce qu'on fait ?
-On crée une fonction qui s'appelle "onSubmitAddTodo"
-Pour le moment, cette fonction ne prend pas de paramètres
-On empêche le comportement par défaut du navigateur pour l'événement qui se produit (submit)
*/


// Cette fonction s'execute lorsqu'on clique sur une tâche
function onClickCard(event){
  /*  event.preventDefault();*/
  // On ajoute la classe "line" à l'élément sur lequel on vient de cliquer
  this.classList.toggle("line");
  /*this.style.textDecoration = "line-through";*/
   
}

function ondblClickCard(){
    this.remove();
}
