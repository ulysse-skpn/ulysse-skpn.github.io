firebase.initializeApp(config);
  // Get a reference to the Firebase Realtime Database
  var chatRef = firebase.database().ref();

  // Create an instance of Firechat
  var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));

  // Listen for authentication state changes
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // If the user is logged in, set them as the Firechat user
      chat.setUser(user.uid, "Anonymous" + user.uid.substr(10, 8));
      document.getElementById("displayChat").style.display = "block";
    } else {
      // If the user is not logged in, sign them in anonymously
      firebase.auth().signInAnonymously().catch(function() {
        document.getElementById("displayChat").style.display = "none";
      });
    }
  });