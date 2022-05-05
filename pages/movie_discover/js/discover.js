var dev = document.getElementById('discover');
$('#decouverte').click(function(){
  var tab = new Array("Bienvenue_a_Zombieland_2.png","Avengers_Endgame.jpg","Avatar_2.jpg","Captain_Marvel.jpg","Dragons_3_Le_Monde_cache.jpg","Toy_Story_4.jpg","Star_Wars_Episode_IX.jpg","1aladin.jpg","1anna.jpg","1aqua.jpg","1dumbo.jpg","1glass.jpg","1joker.jpg","1mary.jpg","1men.jpg","1mule.jpg","1nicky.jpg","1terminator.jpg");
  var n = parseInt(Math.random() * tab.length)
  while (isNaN(n)) {
    n = parseInt(Math.random() * tab.length)  
  }
  dev.src="assets/images/"+tab[n];
});
