//COMPLETE O COD PARA IMPRIMIR A AREA DOS 3 RECT.

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea
  //console.log(rectangle[0] * rectangle[1]);
});

// CRIE A FUNC SUM SE 1 NUM VARIÁVEL DE ELEM RETORNA A SOMA DESSES ELEM (PARAM REST)

const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0)

//console.log(sum(1, 2, 3));

//DADOS OS GOSTOS DE 1 OBJ PERSON RETORNA TODOS OS GOSTOS DAQUELA PESSOA
//obj destructuring

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
  // complete a assinatura da função abaixo
  const personLikes = ({ name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  
  ///console.log(personLikes(alex)) // 'Alex is 26 years old and likes fly fishing.'
  //console.log(personLikes(gunnar)) // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

  //RETORNA TODAS AS PESSOAS AUSTRALIANAS QUE NASCERAM NO SEC 20

  const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  // escreva filterPeople abaixo
//   const filterPeople = (arr) = arr.filter(
//     ({ nationality, bornIn }) =>
//       nationality === 'Australian'
//       && bornIn > 1900 && bornIn <= 2000,
//     );
  //Escreva a função swap , que dado um array de 3 elementos,
  // retorna um novo array com o primeiro e terceiro elementos trocados. 
  //Detalhe: você precisa fazer essa função gastando 1 linha só:
//Dica: use array destructuring.

const myList = [1, 2, 3];

const swap = ([a, b, c]) => [c, b, a];

//Suponha que você esteja lidando com carros e, da 
//forma como o problema lhe foi entregue, cada carro é 
//modelado como um array. Porém, essa modelagem está baixo nível. 
//Cria uma função toObject que, dada uma lista, retorna um objeto 
//representando o carro:
//Dica: use array destructuring e abbreviation object literal .

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([name, brand, year]) => ({ name, brand, year });

/* Escreva uma função shipLength que, dado um objeto representando 
um navio, retorna o comprimento dele, mostrando também a devida 
unidade de comprimento:
Dica: use object destructuring .
 */
const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
  ];
  
  // escreva shipLength abaixo
  
const shipLength = ({ name, length, measurementUnit }) => (
    `${name} is ${length} ${measurementUnit} long`
  );
  
//   console.log(shipLength(ships[0])) // 'Titanic is 269.1 meters long'
//   console.log(shipLength(ships[1])) // 'Queen Mary 2 is 1132 feet long'
//   console.log(shipLength(ships[2]))

  /* Escreva uma função greet que, dado o nome de uma pessoa, 
  retorna uma mensagem de cumprimento:
Dica: use default params . */

// escreva greet abaixo
const greet = (name, msg = 'Hi') => `${msg} ${name}`;

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'