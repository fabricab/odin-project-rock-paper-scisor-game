/* este programa va a se un juego de piedra papelo o tijeras
por ahora va a tener 5 funciones principales que van a lograr el funcionamiento del juego
van a ser:playerselection(se va a encargar de guardar la eleccion del jugador),
computerselection(va a tener una funcion dentro que va a generar un valor random para q compita con no el jggador)
playground(va acrear una ronda en la que se va a calcular el ganador y va a desplegar una cadena que diga quie ngano)
game(va a contar los ganadores de la ronda y va a temrinar despues de 5 rondas y informa el ganador mediante cadenas) */ 

const options = ["piedra", "papel", "tijera"]


function playerSelection(){
    playerSelection = prompt("piedra, papel o tijeras?")
    return playerSelection};
function getComputerChoice(){
   let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
};
function checkwinner (playerSelection , computerSelection){
    if (playerSelection == computerSelection){
        return "empate";
    }
else if(
    (playerSelection == "piedra" && computerSelection == "tijera" ) ||            
    (playerSelection == "papel" && computerSelection == "piedra") ||       
    (playerSelection == "tijera" && computerSelection == "papel" )){
       return "player";
    }   
else{
        return "computer";
}


}

function playground(playerSelection, computerSelection){
    const result = checkwinner(playerSelection, computerSelection)
    if (result == "empate"){
        return "Es un empate!";
    }
    else if(result == "player"){
        return `Ganaste! ${playerSelection} es mejor que ${computerSelection}`
    }else{
        return `Perdiste! ${computerSelection} es mejor que ${playerSelection}`
    }
   


}   

function game(){
    let puntajeJugador = 0
    let puntajeComputadora = 0
     for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("piedra, papel o tijera?")
    const computerSelection = getComputerChoice()
    console.log(playground(playerSelection, computerSelection))
    if(checkwinner(playerSelection, computerSelection) == "player"){ 
        puntajeJugador++
    }
    else if(checkwinner(playerSelection, computerSelection) == "computer"){
        puntajeComputadora++
    }
    if(puntajeJugador > puntajeComputadora){
        console.log("Has ganado!")
    }
    else if (puntajeComputadora > puntajeJugador){
        console.log("Has perdido el juego!")
    }
    else{
        console.log("Hubo empate!")
    }
}
}