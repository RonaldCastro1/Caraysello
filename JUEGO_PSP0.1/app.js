let userScore=0;
let compScore=0;
const userScore_span= document.getElementById('user-score');
const compScore_span= document.getElementById('comp-score');
const scoreBoard_div= document.querySelector('marcador');
const result_div= document.querySelector('.result p');
const cara_div= document.getElementById('c');
const sello_div= document.getElementById('s');

function movidaComp(){
    const opciones=['c','s'];
    const random= Math.floor (Math.random()*2);
    const movida=opciones[random];
    return (movida);
}
function convertir (opcion){
    if (opcion == 'c') {
        return "cayo cara"
    } else if(opcion == 's'){
        return "cayo Sello"
    }
}
function cambiaLetra(opcion){
    if (opcion == 'c') {
        return "cara"
    } else {
        return "sello"
    }
}
function ganar(opcionUser, opcionPc){
    userScore++;
    userScore_span.innerHTML= userScore;
    result_div.innerHTML= "Elegiste "+cambiaLetra(opcionUser)+" y "+convertir(opcionUser)+", ganaste!!";
    
}
function apuesta(){
    
}
function perder(opcionUser, opcionPc){
    compScore++;
    compScore_span.innerHTML= compScore;
    result_div.innerHTML= "Elegiste "+cambiaLetra(opcionUser)+" y "+convertir(opcionPc)+", perdiste!!";
}
movidaComp()
function game(opcion){
    const movidaPc= movidaComp();
    const movidaUser= opcion;
    alert("MONEDA GIRANDO")
    switch (movidaUser+movidaPc) {
        case 'cc':
        case 'ss':
        ganar(movidaUser, movidaPc)
            break;
        case 'sc':
        case 'cs':
        perder(movidaUser, movidaPc)
           break;
    }
}
function main(){
    cara_div.addEventListener('click', () => game("c"));
    sello_div.addEventListener('click', () => game("s"));
}
main();
