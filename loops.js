function forLoop(list) {
}

function whileLoop(numero) {
  while (numero > 0) {
    console.log(--numero);
  }
  return 'done'
}

function doWhileLoop(int) {
  var n = 0;
  function incrementVariable() {
  n = n + 1;
  return n;
}
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < int);
}