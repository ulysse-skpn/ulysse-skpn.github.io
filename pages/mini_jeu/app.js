var formulaire = document.getElementById('inputForm');
formulaire.addEventListener("submit", onFormSubmit);
var gif = document.getElementById("gif_generator")
var tableau = ["food", "Food", "car", "Car", "fish", "Fish", "drawing", "Drawing"];
var randomCategory = "";
var result = document.getElementById('result')


function onFormSubmit(event){
    event.preventDefault();
    console.log(formulaire.elements.inputArea.value);
    var champ_input = formulaire.elements.inputArea.value;
    formulaire.elements.inputArea.value =""
    if( champ_input == randomCategory){
        result.textContent = "Bonne réponse !";
        result.classList.add('text-success');
        result.classList.remove('text-danger');
        displayRandomGif();
    }else{
        result.textContent = "Mauvaise réponse !";
        result.classList.add('text-danger');
        result.classList.remove('text-success');
    }
}

async function displayRandomGif()
{
    randomCategory = tableau[Math.floor(Math.random() * tableau.length)];

    await fetch(`http://api.giphy.com/v1/gifs/random?api_key=jq3NjUkHhN8TQjs9X6Zw9B7p8Of3cFJV&tag=${randomCategory}` , 
            {
                method: "GET",
                cors:"no-cors"
            })
            .then( async (response) => {

                if ( response.status == 200 )
                {
                    const data = await response.json()
                    const imgSrc = data.data.images.fixed_height.url
                    gif.setAttribute("src", imgSrc )
                }
                else 
                {
                    console.log("Status de la réponse: %d (%s)", response.status, response.statusText);
                }
            })
}

displayRandomGif();


/*Etapes :
Etapes :

** Mise en place : **
-> Créer le dossier du projet contenant index.html et app.js (30 sec)
-> Inclure bootstrap
-> Réaliser la mise en page du projet (voir schéma) (15-20mn)

** Formulaire : **
-> Executer une fonction "onFormSubmit" à l'envoi du formulaire (rajouter un écouteur d'évènements)
-> Empêcher le comportement par défaut de l'évènement
-> Faire un console.log de la valeur du champ de ce formulaire pour vérifier puis mettre cette valeur dans une variable

** Requête AJAX et utilisation de l'API Giphy : **
-> S'inscrire sur le site developers.giphy.com puis récupérer votre clé d'API
-> Dans la documentation Giphy, trouver le "endpoint" (l'adresse) permettant de récupérer un gif aléatoire correspondant à un mot clé (en choisir un quelconque)
-> Se reseigner sur le XMLHttpRequest en javascript, permettant d'effectuer des requêtes HTTP
-> Créer une fonction "displayRandomGif" dans laquelle on effectue une requête HTTP vers l'adresse trouvée sur la doc Giphy
-> À partir de la réponse reçue par le serveur, extraire l'URL du gif à afficher
-> Afficher ce gif sur la page

** Gif d'une catégorie aléatoire **
-> En dehors de toute fonction, créer un tableau contenant quelques catégories de gif (en chaines de caractères; ex: camion, ordinateur, lune)
-> En dehors de toute fonction, DÉCLARER une variable "randomCategory" sans lui donner de valeur.
-> Au tout début de la fonction "displayRandomGif", donner une valeur à la variable "randomCategory" qui doit être une catégorie au hasard du tableau
-> Dans l'adresse de la requête vers Giphy, remplacer le mot clé par la variable "randomCategory"
    
** Vérification de la réponse de l'utilisateur **
-> Dans la fonction "onFormSubmit", créer une condition (if/else) vérifiant si la valeur du champ du formulaire est égale à la catégorie générée aléatoirement (autrement dit la variable randomCategory)
    -> Si c'est le cas, rénégérer un nouveau gif, vider le champ et écrire "Bonne réponse" en vert
    -> Sinon, écrire "Mauvaise réponse" en rouge
*/

// jq3NjUkHhN8TQjs9X6Zw9B7p8Of3cFJV