function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function generateCard(value, symbol){
    return value + symbol;
}

function generateValue(value){
    let newValue = null;
        switch (value) {
            case 10:
              return newValue = 'J';
            case 11:
              return newValue = 'Q';
            case 12:
              return newValue = 'K';
            case 13:
              return newValue = 'A';
            default:
              return value;
          };
}

function generateSymbol(symbol){
    if(symbol >= 1 && symbol <= 4){
        switch (symbol) {
            case 1:
              symbol = 'd';
              break;
            case 2:
              symbol = 'c';
              break;
            case 3:
              symbol = 'h';
              break;
            case 4:
              symbol = 's';
              break;
            default:
              symbol = "Sorry, no symbol allowed for number" + symbol;
          };
      }
      return symbol;
}

function createHands(){
    const tenCards = [];
    let firstHand = [];
    let secondHand = [];
    handsGenerator(10,tenCards);
    if(tenCards.length < 10) {
        let rerollCards = 10 - tenCards.length; 
        handsGenerator(rerollCards,tenCards);
    }
    firstHand = tenCards.slice(0, 5);
    secondHand = tenCards.slice(5, 10);
    console.log("Dealer hand : " + tenCards);
    console.log("First hand : " + firstHand);
    console.log("Second hand : " + secondHand);
};

function handsGenerator(nbOfCards, array){
    let i = 0;
    while(i <= nbOfCards){
        let randomValue=getRandomInt(2, 13);
        let randomSymbol=getRandomInt(1, 4);
        let lastCardGenerated = generateCard(generateValue(randomValue),generateSymbol(randomSymbol));
        if(array.includes(lastCardGenerated)){
            console.log('Error, doublons : ' + lastCardGenerated);
        } else {
            array.push(lastCardGenerated);
        };
        i++;
    };
};

createHands();
