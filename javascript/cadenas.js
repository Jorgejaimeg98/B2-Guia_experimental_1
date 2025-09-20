//Bloque A: Cadenas 
// Ejercicio 1: Contar caracteres de una palabra
//debugger;
function contarCaracteres(palabra) {
    for (let i = 0; i < palabra.length; i++) {
        console.log(palabra[i]);
    }
    console.log(`La palabra tiene ${palabra.length} caracteres`);
}
//let cadena = prompt("Ingrese una palabra");
//contarCaracteres(cadena);
//contarCaracteres("javascript");


// Ejercicio 2: Contar apariciones de una letra en una palabra
//debugger;
function contarApariciones(palabra, letra) {
    let contador = 0;   
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
            contador++;
        }
    }
    console.log(`La letra ${letra} aparece ${contador} veces en la palabra ${palabra}`);
}
//let cadena2 = prompt("Ingrese una palabra");
//let letra = prompt("Ingrese una letra a buscar");
//contarApariciones(cadena2, letra);
//contarApariciones("Programacion", "a");


//Ejercicio 3: Invertir una palabra
//debugger;
function invertirPalabra(palabra) { 
    let palabraInvertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }
    console.log(`La palabra invertida es: ${palabraInvertida}`);
}
//let cadena3 = prompt("Ingrese una palabra");
//invertirPalabra(cadena3);
//invertirPalabra("javascript");


// Ejercicio 4: Comparar longitudes de cadenas
//debugger;
function compararLongitudes(palabra1, palabra2) {
    if (palabra1.length > palabra2.length) {
        console.log(`El apellido ${palabra1} tiene más letras`);
    }
    else if (palabra1.length < palabra2.length) {
        console.log(`El apellido ${palabra2} tiene más letras`);
    }
    else {
        console.log("Ambos apellidos tienen la misma longitud");
    }
}
//let cadena1 = prompt("Ingrese la primera palabra");
//let cadena2 = prompt("Ingrese la segunda palabra");
//compararLongitudes(cadena1, cadena2);
//compararLongitudes("javascript", "java");
//compararLongitudes("html", "css");


// Ejercicio 5: Iniciales de un nombre completo
//debugger;
function obtenerIniciales(nombreCompleto) {
    let palabras = nombreCompleto.split(" "); // split separa las palabras por espacios
    let iniciales = ""; 
    for (let i = 0; i < palabras.length; i++) {
        iniciales += palabras[i][0].toUpperCase() + "."; // toUpperCase convierte a mayusculas
    }   
    console.log(`Las iniciales son: ${iniciales}`);
}
//let nombre = prompt("Ingrese su nombre completo");
//obtenerIniciales(nombre);
//obtenerIniciales("jorge luis borges");
//obtenerIniciales("ada lovelace");


// Ejercicio 6: Reemplazar caracteres en una cadena
//debugger;
function reemplazarCaracteres(palabra, caracterAntiguo, caracterNuevo) {
    let nuevaPalabra = "";
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === caracterAntiguo) {
            nuevaPalabra += caracterNuevo;
        } else {
            nuevaPalabra += palabra[i];
        }   
    }
    console.log(`La nueva palabra es: ${nuevaPalabra}`);
}   
//let cadena4 = prompt("Ingrese una palabra");
//let caracterAntiguo = prompt("Ingrese el caracter a reemplazar");
//let caracterNuevo = prompt("Ingrese el nuevo caracter");
//reemplazarCaracteres(cadena4, caracterAntiguo, caracterNuevo);
//reemplazarCaracteres("javascript", "a", "o");
//reemplazarCaracteres("programacion", "o", "0");


// Ejercicio 7: Palabra palíndroma
//debugger;
function esPalindromo(palabra) {
    let palabraInvertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }
    if (palabra === palabraInvertida) {
        console.log(`La palabra ${palabra} es un palíndromo`);
    } else {
        console.log(`La palabra ${palabra} no es un palíndromo`);
    }
}
//let cadena5 = prompt("Ingrese una palabra").toLowerCase();
//esPalindromo(cadena5); //
//esPalindromo("reconocer");
//esPalindromo("javascript");


// Ejercicio 8: Frase con mayor cantidad de caracteres
//debugger;
function fraseMasLarga(frase1, frase2) {
    if (frase1.length > frase2.length) {
        console.log(`La frase ${frase1} tiene más cantidad de caracteres`);
    }
    else if (frase1.length < frase2.length) {
        console.log(`La frase ${frase2} tiene más cantidad de caracteres`);
    }
    else {
        console.log(`Ambas frases tienen la misma cantidad de caracteres`);
    }
}
//let frase1 = prompt("Ingrese la primera frase");
//let frase2 = prompt("Ingrese la segunda frase");
//fraseMasLarga(frase1, frase2);
//fraseMasLarga("Hola mundo", "Hola a todos");
//fraseMasLarga("JavaScript es genial", "Me gusta programar");


// Ejercicio 9: Contar apariciones de una carácter elegido
//debugger;
function contarCaracter(palabra, caracter) {
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === caracter) {
            contador++;
        }
    }
    console.log(`El carácter '${caracter}' aparece ${contador} veces en el texto: '${palabra}'`);
}   
//let cadena6 = prompt("Ingrese una palabra");
//let caracter = prompt("Ingrese un carácter a buscar");
//contarCaracter(cadena6, caracter);
//contarCaracter("programacion", "o");
//contarCaracter("javascript", "a");


// Ejercicio 10: Dividir oración en palabras
//debugger;
function dividirOracion(oracion) {
    let palabras = oracion.split(" "); // split separa las palabras por espacios
    console.log("Las palabras son:");
    for (let i = 0; i < palabras.length; i++) {
        console.log(palabras[i]);
    }
    console.log(`La oración tiene ${palabras.length} palabras`);
}
let oracion = prompt("Ingrese una oración");
dividirOracion(oracion);
//dividirOracion("JavaScript es un lenguaje de programación");
//dividirOracion("Me gusta aprender cosas nuevas");
