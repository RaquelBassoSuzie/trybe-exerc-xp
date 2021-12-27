// const numbers = [32, 15, 3, 2, -5, 56, 10];
// let sumNumbers = 0;

// for(let i = 0; i  < numbers.length; i += 1) {
//     sumNumbers += numbers[i];
// }
// console.log(sumNumbers);

// COM REDUCE

// const numbers = [32, 15, 3, 2, -5, 56, 10];
// const sumNumbers = numbers.reduce((result, number) => result + number);
// // o param result é o acc, ele recebe, do `reduce`, o retorno
// // da função a cada iteração.
// console.log(sumNumbers);

// const getSum = (result, number) => result + number;
// const sumNumbers = numbers.reduce(getSum);

// console.log(sumNumbers);

// AO ADICIONAR UM SEGUNDO PARAM VC ESTÁ COLOCANDO UM VALOR INICIAL NA
// VARIAVEL RESULT(ACC). ELE É O VALOR INIC DO REDUCE. CASO NÃO SEJA PASSADO
// O PRIMEIRO VALOR SERÁ O PRIMEIRO ITEM DO ARRAY

//COMPARAR PARA ACHAR MAIOR VALOR DE 1 ARRAY
// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger);
// DADA 1 MATRIZ, TRANSFORME EM 1 ARRAY

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce((acc, curr) => acc.concat(curr), [])
  };
  //console.log(flatten);
  // Agora vamos criar um novo array de objetos a partir das informações abaixo,
  // onde cada objeto terá o formato { name: nome do aluno, average: media das notas }
  //Para isso vamos assumir que a posição 0 de notes refere-se ao aluno na posição 0 de students,
  // aqui além de reduce será necessário utilizar também a função map .
  //Dica: Você pode acessar o index do array dentro de map , 
  //e você pode ver o objeto esperado na constante expected .

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const nameAndAverage = students.map((student, index) => ({
      name: student,
      average: (notes[index].reduce((acc, curr) => acc + curr, 0) / notes[index].length),

  }));
  return nameAndAverage;
}


const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];