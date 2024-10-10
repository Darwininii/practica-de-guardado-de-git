console.log('condiciones')
let nombre1=prompt("ingresa tu nombre: ")
let nombre2=prompt("ingresa tu nombre: ")
let jugador1=prompt(`${nombre1} ingresa: papel, piedra o tijera...`).toLowerCase();
let jugador2=prompt(`${nombre2} ingresa: papel, piedra o tijera...`).toLowerCase();

if (jugador1 === jugador2){
    console.log('Empate...')
}else if(jugador1 === 'papel' && jugador2==='tijera'){
    console.log(`ganó ${nombre2}`)
}else{
        console.log(`ganó ${nombre1}`)
if(jugador1 === 'piedra' && jugador2==='tijera'){
    console.log(`ganó ${nombre1}`)
}else{
    console.log(`ganó ${nombre2}`)
}if(jugador1 === 'tijera' && jugador2==='papel'){
    console.log(`ganó ${nombre1}`)
}else{
    console.log(`ganó ${nombre2}`)
}
}