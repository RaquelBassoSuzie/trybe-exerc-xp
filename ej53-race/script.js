//Evento de carregamento de todos os eventos pagina
// 1
// EVENTO: Quando todos os elementos da página forem 
// carregados, chame meu código.
// Evento de carregamento vinculado ao objeto window, --> objeto onde o elemento existe
//window.addEventListener('load', fullPageLoaded )
//function fullPageLoaded(e){
 // console.log('carregado!: ' , e);
//}

/*  2 */
//window.onload = function(){
  //  console.log('Carregado!')
  //window.onload = fullPageLoaded;

    //function fullPageLoaded(){
     //console.log('carregado!');

//Evento de caareg. do DOM
//document.addEventListener('DOMContentLoaded' , onDOMLoaded )
//unction onDOMLoaded(e){
   // console.log('DOM carregado!: ');
//}
///let bt = document.querySelector(' .hey');

//bt.addEventListener( 'click' , onClicked )
//function onClicked(e){
   // console.log('clicou: ', e)

// GERAR NUMEROS ALEATÓREOS
//let n = Math.round ( Math.random() * 60 )
//console.log(n)
//let width = '500px'
// converter string em number
//console.log(parseInt(width))
/* COMO PEGAR O VALOR DA LARGURA DO BROWSER */
//console.log( 'largura: ', window.innerWidth);
let bt = document.querySelector(' .hey');
let car1 = document.querySelector('.car1');
let car2 = document.querySelector('.car2');


bt.addEventListener('click', onClicked );

car1.style.marginLeft = '3px';
car2.style.marginLeft = '3px';


function onClicked(){
  
  let currentPos = car1.style.marginLeft;
  let random1 =( Math.random() * 20 )
  console.log(random1)
  let newPos = parseInt(currentPos) + random1;

  let currentPos2 = car2.style.marginLeft;
  let random2 =( Math.random() * 20 )
  console.log(random2)
  let newPos2 = parseInt(currentPos2) + random2;

  

  car1.style.marginLeft = newPos + 'px'
  car2.style.marginLeft = newPos2 + 'px'
}
