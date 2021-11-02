//EM PORTUGUÊS BR
// NOTA! As etapas neste arquivo são basicamente idênticas às que você
// executado no arquivo SpeakHello.js.

// PASSO 6: Envolva todo o conteúdo de SpeakGoodBye.js dentro de um IIFE
// Ver Aula 52, parte 2


// PASSO 7: Crie um objeto, chamado 'byeSpeaker', ao qual você irá anexar
// o método "falar" e que você irá expor ao contexto global
// Ver Aula 52, parte 1
// var byeSpeaker =

// NÃO anexe a variável speakWord ao objeto 'byeSpeaker'.


// PASSO 8: Reescreva a função 'falar' de forma que seja anexada ao
// objeto byeSpeaker em vez de ser uma função autônoma.
// Ver Aula 52, parte 2

// PASSO 9: Exponha o objeto 'byeSpeaker' ao escopo global. Diga
// 'byeSpeaker' no escopo global também.
// xxxx.xxxx = byeSpeaker;


(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);
