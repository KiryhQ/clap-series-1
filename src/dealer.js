/*
 * /!\ À faire seul !
 * Le but de cette fonction est de générer deux tableaux contenants 5 cartes différentes
 * il ne doit y avoir aucun doublon dans les tableaux !
 * 
 * Exemple dealer() => [["As", "3s", "2h", "8d", "8s"], ["As", "3s", "2h", "8d", "8s"]]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 */
function dealer() {
  // CODE HERE

  $firstArray = [];
  $secondArray = [];

  function getRandomInt(min, max) {
    return Math.floor(Math.random(min) * Math.floor(max));
  }

  $eachCardValue=getRandomInt(2, 10);
  $eachCardSymbol=getRandomInt(1, 4);
  
}

export { dealer };