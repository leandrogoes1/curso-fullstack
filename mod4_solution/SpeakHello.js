// EM PORTUGUÊS BR
// Passo 2: Envolva todo o conteúdo do SpeakHello.js dentro de uma IIFE

// Passo 3: Crie um objeto, chamado 'helloSpeaker', ao qual você irá anexar
// o método "falar" e que você irá expor ao contexto global
// Veja a Aula 52, parte 1

// var helloSpeaker =

// NÃO anexe a variável speakWord ao objeto 'helloSpeaker'

// PASSO 4: Reescreva a função 'falar' de forma que seja anexada ao
// objeto helloSpeaker em vez de ser uma função autônoma.
// Veja a aula 52, parte 2

// PASSO 5: Exponha o objeto 'helloSpeaker' ao escopo global. Diga
// 'helloSpeaker' no escopo global também.
// Veja a aula 52, parte 2
// (Observação, a Etapa 6 será realizada no arquivo SpeakGoodBye.js.)

// xxxx.xxxx = helloSpeaker;


(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;
})(window);

