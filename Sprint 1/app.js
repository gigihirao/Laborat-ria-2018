var cardNumb;
do{
  cardNumb = prompt('Insira o número do Cartão de Crédito');
} while (!cardNumb);


function isValidCard(numb){
  var numbRev = [];
  var invertNumb = [];
  var doubleNumb = 0;
  var sumNumbs = 0
  var newNumb = [];
  
  for (var i = 0 ; i < numb.length ; i++){
    numbRev[i] = numb.charAt(i);
  }
  invertNumb = numbRev.reverse();
  
  for (var j = 0 ; j < invertNumb.length ; j+=2){
    doubleNumb = invertNumb[j] * 2;
    if (doubleNumb >= 10){
      newNumb = doubleNumb.toString().split("");
      sumNumbs = parseInt(newNumb[0]) + parseInt(newNumb[1]) + sumNumbs;
    } else {
      sumNumbs = doubleNumb + sumNumbs;
    }
  }

  for (var j = 1 ; j < invertNumb.length ;  j+=2) {
    sumNumbs = parseInt(invertNumb[j]) + sumNumbs;
  }

  if (sumNumbs % 10 == 0){
    document.getElementById('app').innerHTML = 'Válido';
  } else {
    document.getElementById('app').innerHTML = 'Inválido';
  }
}

isValidCard(cardNumb);

