PSEUDOCODIGO:

var palavra;
var fixa = 33;
FAZER{
  palavra = prompt('Insira uma frase');
  var palavra_codificada = codificada(palavra, fixa);
  var palavra_decodificada = decodificada = (palavra_codificada, fixa);
  document.getElementById('app').innerHTML = word + '</br>' + palavra_codificada + '</br>' + palavra_decodificada;
} ENQUANTO (!palavra);

LER codificada (palavra, fixa){
  
  var palavra_codificada = '';
  
  LOOP_PARA_A_PALAVRA (var i = 0 ; i < palavra.length ; i++){
   
    var code = palavra.charCodeAt(i);
    
    SE (code >= 48 && code <= 57){
      return null;
    } SE NAO (code >= 65 && code <= 90){
      palavra_codificada = palavra_codificada + String.fromCharCode((code - 65 + fixa) % 26 + 65);
    } SE NAO (code >= 97 && code <= 122){
      palavra_codificada = palavra_codificada + String.fromCharCode((code - 97 + fixa) % 26 + 97);
    }
  }
  return palavra_codificada;
}

LER decodificada (palavra_codificada, fixa){
  
  var word = '';
  
  LOOP_PARA_PROCESSO_INVERSO (var i = 0 ; i < palavra_codificada_tamanho ; i++){
    var code = palavra_codificada.charCodeAt(i);

    SE (code >= 65 && code <= 90){
      palavra = palavra + String.fromCharCode((((code - 65 - fixa) % 26)+ 26)% 26 + 65);
    } SE NAO (code >= 97 && code <= 122){
      palavra = palavra + String.fromCharCode((((code - 97 - fixa) % 26)+ 26)% 26 + 97);
    }
  }
  return palavra;
}

FLUXOGRAMA:

[Cifra de Cesar.pdf](https://github.com/gigihirao/Laborat-ria-2018/files/2081597/Cifra.de.Cesar.pdf)

