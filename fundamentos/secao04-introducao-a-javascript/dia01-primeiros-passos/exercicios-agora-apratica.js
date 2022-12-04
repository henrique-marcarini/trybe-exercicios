const a = 50;
const b = 25;

console.log('Soma ' + (a + b));
console.log('Subtração ' + (a - b));
console.log('Multiplicação ' + (a * b));
console.log('Divisão ' + (a / b));
console.log('Módulo ' + (a % b));

if (a > b) {
    console.log("'a' é maior que 'b'");
} else {
    console.log("'b' é maior que 'a'");
}

const c = 75;

if (a > b && a > c) {
    console.log("O maior número é " + a + " (a)");
} else if (b > a && b > c) {
    console.log("o maior número é " + b + " (b)");
} else {
    console.log("o maior número é " + c + " (c)");
}

const number = 5;

if (number > 0) {
    console.log('positive');
} else if (number < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}

