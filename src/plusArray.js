/*
 * /!\ À faire seul !
 * L'objectif est d'additionner les valeurs des deux tableaux :
 * si arr1 = [5, 6, 7]
 * et arr2 = [5, 4, 3]
 * alors plusArray(arr1, arr2) retournera 30 
 */
function plusArray(arr1, arr2) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
   if (arr1.length < 1 || arr2.length < 1){
      if(arr1.length > 1) {
        return arr1.reduce(reducer);
      } else {
        return arr2.reduce(reducer);
      }
  } else {
    return (arr1.reduce(reducer)) + (arr2.reduce(reducer));
  }
  
}

export { plusArray };