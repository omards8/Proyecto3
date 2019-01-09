var posInicial=[0,0];
var posFinal=[0,0];
console.log("Posicion Final: " + posFinal);
console.log("Posicion Inicial: " + posInicial);

function casillaAleatoria(posInicial,posFinal){
  while (posFinal[0] == posInicial[0] && posFinal[1]==posInicial[1]) {
    posFinal.pop();
    posFinal.pop();
    posFinal.push(Math.floor(Math.random() * 6) + 1);
    posFinal.push(Math.floor(Math.random() * 6) + 1);
    posInicial.pop();
    posInicial.pop();
    posInicial.push(Math.floor(Math.random() * 6) + 1);
    posInicial.push(Math.floor(Math.random() * 6) + 1);
  }
}
casillaAleatoria(posInicial,posFinal);

console.log("Posicion Inicial: " + posInicial);
console.log("Posicion Final: " + posFinal);
