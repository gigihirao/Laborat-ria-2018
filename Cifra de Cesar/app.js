var word;
var n = 33;
do{
  word = prompt('Insira uma frase');
  var cipherWord = cipher(word, n);
  var decipherWord = decipher(cipherWord, n);
  document.getElementById('app').innerHTML = word + '</br>' + cipherWord + '</br>' + decipherWord;
} while (!word);

//n = deslocamento de cada letra

function cipher (word, n){
  
  var cipherWord = '';
  
  for (var i = 0 ; i < word.length ; i++){
   
    var code = word.charCodeAt(i);

    //check number
    
    if (code >= 48 && code <= 57){
      return null;
    } else if (code >= 65 && code <= 90){
      cipherWord = cipherWord + String.fromCharCode((code - 65 + n) % 26 + 65);
    } else if (code >= 97 && code <= 122){
      cipherWord = cipherWord + String.fromCharCode((code - 97 + n) % 26 + 97);
    }
  }
  return cipherWord;
}

function decipher(cipherWord, n){
  
  var word = '';
  
  for (var i = 0 ; i < cipherWord.length ; i++){
    var code = cipherWord.charCodeAt(i);

    //descriptografar

    if (code >= 65 && code <= 90){
      word = word + String.fromCharCode((((code - 65 - n) % 26)+ 26)% 26 + 65);
    } else if (code >= 97 && code <= 122){
      word = word + String.fromCharCode((((code - 97 - n) % 26)+ 26)% 26 + 97);
    }
  }
  return word;
}
