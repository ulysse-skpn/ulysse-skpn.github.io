var connectForm = document.getElementById('connectForm');
connectForm.addEventListener("submit", onSubmitConnect);

var signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener("submit", onSubmitSignUp);


function onSubmitConnect(event){
    event.preventDefault();
    var champ_email_connexion = connectForm.elements.inputEmailConnexion.value;
    var champ_password_connexion = connectForm.elements.inputPasswordConnexion.value;

    firebase.auth().signInWithEmailAndPassword(champ_email_connexion, champ_password_connexion).catch(function(error) {
        erreur.innerHTML = error.message;
      });

}

function onSubmitSignUp(event){
    event.preventDefault();
    var champ_email_inscription = signUpForm.elements.inputEmailInscription.value;
    var champ_password_inscription = signUpForm.elements.inputPasswordInscription.value;
    var champ_another_password_inscription = signUpForm.elements.inputAnotherPasswordInscription.value;

    
    firebase.auth().createUserWithEmailAndPassword(champ_email_inscription, champ_password_inscription).catch(function(error) {  
        console.log(error);
        erreur.innerHTML = error.message;
      });
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Si l'utilisateur est connecté
      console.log('utilisateur connecté');
      // var displayName = user.displayName;
      // var email = user.email;
      // var emailVerified = user.emailVerified;
      // var photoURL = user.photoURL;
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // var providerData = user.providerData;
      document.getElementById("displayChat").style.display = "block";
    } else {
      // Si l'utilisateur est déconnecté
      console.log('utilisateur déconnecté');
      document.getElementById("displayChat").style.display = "none";
      // ...
    }
  });

  //!
  function maintenance()
  {
    alert('Cette fonctionnalité est en maintenance...')
  }



