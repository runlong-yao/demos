var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

var result1 = document.querySelector('.result1');

if (!!window.SharedWorker) {
  var myWorker = new SharedWorker("./worker.js");

  myWorker.port.onmessage = function(e) {
    result1.textContent = e.data;
  }

  window.addEventListener("beforeunload", () => {
    myWorker.port.postMessage('close')
  })
}
