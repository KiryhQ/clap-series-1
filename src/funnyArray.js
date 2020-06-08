/*
 * /!\ À faire seul !
 * 
 * L'objectif est le suivant :
 *
 * - Si le nombre d'éléments dans le tableau est impair, je retourne l'élément du milieu, exemple :
 * ary = ['un', 'petit', 'tableau'] alors midArray(ary) retournera 'petit'
 * - Si le nombre d'éléments dans le tableau est pair, je retourne une concaténation des éléments exemple :
 * ary = [1,2,3,4] alors funnyArray(ary) retournera 2 + 3 soit 5
 * ary = ['un', 'plus', 'grand', 'tableau'] alors midArray(ary) retournera 'plusgrand'
 * - Si le tableau est vide, je retourne le mot 'rien'
 */
function funnyArray(ary) {
  function isEven(n) {
    return n % 2 == 0;
 };
 
 function isOdd(n) {
    return Math.abs(n % 2) == 1;
 };

 if (ary.length < 1 ){

  return "rien";

} else if ( isEven(ary.length)){

  return ary[1] + ary[2];

} else if (isOdd(ary.length)){

 return ary[1];

} else {

 return "rien";

}
}

export { funnyArray };