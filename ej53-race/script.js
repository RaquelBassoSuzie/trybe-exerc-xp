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
let bt = document.querySelector(' .hey');

bt.addEventListener( 'click' , onClicked )
function onClicked(e){
    console.log('clicou: ', e)
}