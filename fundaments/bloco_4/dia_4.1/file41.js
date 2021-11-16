const myName = "Raquel";
const birthCity = "Beirute";
let birthYear = 1965;
console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;
console.log(birthYear);
birthCity = "The Sky";
console.log(birthCity);

/* typeof */
//Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , 
//isEnrolled , patientInfo e patientEmail . Esse operador retorna qual o tipo 
//de uma variável, objeto, função ou expressão.
// Exemplo: console.log(typeof patientId) retornará number .

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

//console.log(patientInfo)


// retângulo

const base = 5;
const height = 8;
const area  = base * height;
//console.log(area);
const perimeter = 5 + 5 + 8 + 8;
//console.log(perimeter);
/* ej 1 */

const a = 10;
const b = 5;

//console.log('Soma: ' + (a + b));
//console.log('Subtração: ' + (a - b));
//console.log('Multiplicação: ' + (a * b));
//console.log('Divisão: ' + (a / b));
//console.log('Módulo: ' + (a % b));

/* ej 2 */


const a = 10;
const b = 5;

if (a > b) {
  //console.log("'a' é maior que 'b'");
} else {
  //console.log("'b' é maior que 'a'");
};

/* ej 3 */

const a = 10;
const b = 5;
const c = 20;

if( a > b && a > c ){
   // console.log ( "'a' é maior" );
} else if ( b > a && b > c ){
    //console.log( "'b' é maior");
} else {
    //console.log( "'b' é maior");
}

/* ej 4 */


const number = 5;

if (number > 0) {
  //console.log('positive');
} else if (number < 0) {
  //console.log('negative');
} else {
  //console.log('zero');
};
/* ej 5 */


let angleA = 80;
let angleB = 100;
let angleC = 25;

let sumOfAngles = angleA + angleB + angleC;

let allPositives = angleA > 0 && angleB > 0 && angleC > 0;

if(allPositives){
  if (sumOfAngles === 180) {
    //console.log(true);
  } else {
    //console.log(false);
  };
} else {
  //console.log('Erro: ângulo inválido');
}

/* ej 6 */

const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
   // console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    //console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    //console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    //console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    //console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    //console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    //console.log('Erro, peça inválida!');
    break;
};

/* ej 7 */


const grade = 76;

if (grade < 0 || grade > 100) {
  //console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  //console.log("A");
} else if (grade >= 80) {
  //console.log("B");
} else if (grade >= 70) {
  //console.log("C");
} else if (grade >= 60) {
  //console.log("D");
} else if (grade >= 50) {
  //console.log("E");
} else {
  //console.log("F");
}

/* ej 8 */ //isEven: par //

const a = 20;
const b = 15;
const c = 6;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
//console.log(isEven);
/* ej 9 */ // isOdd // impar


const a = 1;
const b = 3;
const c = 5;

let isOdd = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  isOdd = true;
};
//console.log(isOdd);

/*  */
