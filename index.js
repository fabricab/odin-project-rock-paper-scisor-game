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
console.log(options)

