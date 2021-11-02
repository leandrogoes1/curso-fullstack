//EM PORTUGUÊS BR

// COMECE AQUI SE VOCÊ DESEJA UM PONTO DE PARTIDA MAIS FÁCIL PARA ESTA ATRIBUIÇÃO

// Módulo 4 Instruções de atribuição.

//  A ideia desta atribuição é pegar uma matriz existente de nomes e, em seguida, envie
//  Hello 'Name' ou Good bye 'Name' para o console. O programa deve dizer "Olá" para
//  qualquer nome, exceto nomes que começam com um "J"ou "j" caso contrário,
//  o programa deve dizer "Adeus". Então, o resultado final no console deve ser assim:

// O código NÃO funciona atualmente! É SEU trabalho fazer funcionar
// conforme descrito nos requisitos e as etapas para concluir este
// atribuição.

// Passo 1: (NADA PARA FAZER. JÁ ESTÁ FEITO PARA VOCÊ)
// Envolva todo o conteúdo de script.js dentro de um IIFE
// Veja a Aula 52, parte 2
// (Observe que a Etapa 2 será realizada no arquivo SpeakHello.js.)


// PASSO 10: (NADA A FAZER. JÁ FEITO PARA VOCÊ)
// Faça um loop na matriz de nomes e diga 'Olá' ou "Tchau"
// usando o método 'speak' do helloSpeaker ou do byeSpeaker.
// Veja a aula 50, parte 1


// PASSO 11: (NADA A FAZER. JÁ FEITO PARA VOCÊ)
// Recupera a primeira letra do nome atual no loop.
// Use a função 'charAt' do objeto string. Uma vez que estamos procurando por
// nomes que começam com maiúsculas ou minúsculas 'J' / 'j', chame
// método 'toLowerCase' do objeto string no resultado para que possamos comparar
// para minúsculo caractere 'j' depois.
// Procure esses métodos no site da Mozilla Developer Network, se necessário.
  

// PASSO 12: (NADA A FAZER. JÁ FEITO PARA VOCÊ)
// Compare a 'primeiraLeta' recuperada no PASSO 11 com letras minúsculas
// 'j'. Se for o mesmo, chame o método 'speak' de byeSpeaker com o nome atual
// no loop. Caso contrário, chame o método 'speak' de helloSpeaker com o atual
// nome no loop.
 

(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();