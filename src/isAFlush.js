/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une couleur (5 cartes de même type), exemple : 
 * cards = ["As", "10s", "Js", "Qs", "Ah", "2s", "3c"] isFlushed(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isFlushed(cards) retournera false
 * 
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : d => ♦, c => ♣, h => ♥, s => ♠
 */


// TO DO use regexp to check if there's 5 time the same match on an array
// const cards = ["As", "10s", "Js", "Qs", "Ah", "2s", "3c"];
// let i= 0;
// function isFlushed(cards){

//   cards.forEach(element => {
//      if(element.match(/s/)){
//        i+=1;
//      }
//   });
  
//   return i;
// }

// console.log(isFlushed(cards));


function isAFlush(cards) {

  let signs = ['d','c','h','s'];
  let result = [];
  let flush = false;

  for(let card in cards){
    result.push(cards[card].slice(-1));
  }  

  for(let sign in signs){
    if(result.filter(value => value == signs[sign]).length >= 5) flush = true;
  }

  return flush;
}
export { isAFlush };