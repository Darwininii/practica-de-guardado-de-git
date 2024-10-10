// let num = 20
/* while(num<10){
    console.log(num)
    num=num+1
}

do{
    console.log(num);
    num=num+1
}while(num<10)
 */

/* let objetos = ['pelota','telefono','tenedor','moneda','pluma','disco']
// console.log(objetos[0])
// console.log(objetos[1])
// console.log(objetos[2])
// console.log(objetos[3])

for(let i = 0; i < objetos.length; i++){
    console.log(objetos[i])
} */

    //haz un ciclo que empiece en -1000 y termine en 2000 pero avance de dos en dos

    for(let i=-1000;i<=2000;i=i+2){
        console.log(i)
    }

    // un ciclo que muestre los numeros pares del 0 al 100

    for(let i=0;i<=100;i++){
        if(i%2==0){
            console.log(i)
        }   
    }

    // 'anita lava la tina'
    // un ciclo que te diga si una palabra o frase es un palindromo
    // ..............................................................
    function esPalindromo(texto) {
        // Convertimos el texto a minúsculas y eliminamos los espacios y caracteres especiales
        let textoLimpio = texto.toLowerCase().replace(/[\W_]/g, '');
        let longitud = textoLimpio.length;
        // Ciclo para comparar los caracteres de inicio y fin
        for (let i = 0; i < longitud / 2; i++) {
            if (textoLimpio[i] !== textoLimpio[longitud - 1 - i]) {
                return false; // No es un palíndromo
            }
        }
        return true; // Es un palíndromo
    }
    let frase = prompt("Ingresa una palabra o frase: ");
    if (esPalindromo(frase)) {
        console.log("Es un palíndromo.");
    } else {
        console.log("No es un palíndromo.");
    }