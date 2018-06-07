PSEUDOCÓDIGO;

var numero_do_cartao;
FAZER {
  numero_do_cartao = prompt('Insira o número do Cartão de Crédito');
} ENQUANDO(!numero_do_cartao);


LER validacao(numero){
  
  LOOP_NO_NUMERO_DO_CARTAO (var i = 0 ; i < tamanho_do_numero ; i++){
    numero_reverso[i] = numero.charAt(i);
  }
  inverter_numeros = numero_reverso.reverse();
  
  LOOP_NOS_NUMEROS_INVERSOS (var j = 0 ; j < tamanho_do_inverter_numeros ; j+=2){
    numero_dobrado = inverter_numeros[j] * 2;
    SE (numero_dobrado >= 10){
      novo_numero = numero_dobrado.paraString().separar("");
      numero_soma = parseInt(novo_numero[0]) + parseInt(novo_numero[1]) + numero_soma;
    } SE NÃO {
      numero_soma = numero_dobrado + numero_soma;
    }
  }

  LOOP_PARA_OS_NUMEROS_IMPARES (var j = 1 ; j < tamanho_do_inverter_numeros ;  j+=2) {
    numero_soma = parseInt(inverter_numeros[j]) + numero_soma;
  }

  if (numero_soma % 10 == 0){
    document.getElementById('app').innerHTML = 'Válido';
  } else {
    document.getElementById('app').innerHTML = 'Inválido';
  }
}

validacao(numero_do_cartao);


FLUXOGRAMA;

link: https://www.lucidchart.com/documents/edit/d66f598b-fde2-4a41-a9c4-9471dfa438a0/0?shared=true&

