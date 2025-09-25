//Bloque A: Cadenas 
// Ejercicio 1: Contar caracteres de una palabra
//debugger;
function contarCaracteres(palabra) {
    for (let i = 0; i < palabra.length; i++) {
        console.log(palabra[i]);
    }

    return `La palabra '${palabra}' tiene ${palabra.length} caracteres`;
}
//let cadena = prompt("Ingrese una sola palabra");
//console.log(contarCaracteres(cadena));
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

    return `La letra '${letra}' aparece ${contador} veces en la palabra '${palabra}'`;
}
//let cadena2 = prompt("Ingrese una palabra");
//let letra = prompt("Ingrese una letra a buscar");
//console.log(contarApariciones(cadena2, letra));
//contarApariciones("Programacion", "a");


//Ejercicio 3: Invertir una palabra
//debugger;
function invertirPalabra(palabra) { 
    let palabraInvertida = "";

    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }

    return `La palabra '${palabra}' invertida es: ${palabraInvertida}`;
}
//let cadena3 = prompt("Ingrese una palabra");
//console.log(invertirPalabra(cadena3));
//invertirPalabra("javascript");


// Ejercicio 4: Comparar longitudes de cadenas
//debugger;
function compararLongitudes(palabra1, palabra2) {
    if (palabra1.length > palabra2.length) {
        return `La palabra '${palabra1}' tiene más letras que '${palabra2}'`;
        
    }else if (palabra1.length < palabra2.length) {
        return `La palabra '${palabra2}' tiene más letras que '${palabra1}'`;
        
    }else {
        return `La palabras '${palabra1}' y '${palabra2}' Ambas tienen la misma longitud`;
        
    }
}
//let cadena1 = prompt("Ingrese la primera palabra");
//let cadena2 = prompt("Ingrese la segunda palabra");
//console.log(compararLongitudes(cadena1, cadena2));
//compararLongitudes("javascript", "java");
//compararLongitudes("html", "css");


// Ejercicio 5: Iniciales de un nombre completo
//debugger;
function inicialesNombre(nombreCompleto) {
    let palabras = nombreCompleto.split(" "); // split separa las palabras por espacios
    let iniciales = "";

    for (let i = 0; i < palabras.length; i++) {
        iniciales += palabras[i][0].toUpperCase() + "."; // toUpperCase convierte a mayusculas
    }

    return `Las iniciales son: ${iniciales}`;
}
//let nombre = prompt("Ingrese su nombre completo");
//console.log(inicialesNombre(nombre));
//inicialesNombre("jorge Luis Jaime");
//inicialesNombre("adalis Sugey Suarez");


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

    return `La nueva palabra es: ${nuevaPalabra}`;
}   
//let cadena4 = prompt("Ingrese una palabra");
//let caracterAntiguo = prompt("Ingrese el caracter a reemplazar");
//let caracterNuevo = prompt("Ingrese el nuevo caracter");
//console.log(reemplazarCaracteres(cadena4, caracterAntiguo, caracterNuevo));
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
        return `La palabra '${palabra}' es un palíndromo`;
        
    } else {
        return `La palabra '${palabra}' no es un palíndromo`;
        
    }
}
//let cadena5 = prompt("Ingrese una sola palabra").toLowerCase();
//console.log(esPalindromo(cadena5));
//esPalindromo("reconocer");
//esPalindromo("javascript");


// Ejercicio 8: Frase con mayor cantidad de caracteres
//debugger;
function fraseMasLarga(frase1, frase2) {
    if (frase1.length > frase2.length) {
        return `La frase '${frase1}' tiene más cantidad de caracteres`;
    
    }else if (frase1.length < frase2.length) {
        return `La frase '${frase2}' tiene más cantidad de caracteres`;
        
    }else {
        return `Las frases '${frase1}' y '${frase2}' Ambas frases tienen la misma cantidad de caracteres`;
    
    }
}
//let frase1 = prompt("Ingrese la primera frase");
//let frase2 = prompt("Ingrese la segunda frase");
//console.log(fraseMasLarga(frase1, frase2));
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
    return `El carácter '${caracter}' aparece ${contador} veces en el texto: '${palabra}'`;
    
}   
//let cadena6 = prompt("Ingrese una palabra");
//let caracter = prompt("Ingrese un carácter a buscar");
//console.log(contarCaracter(cadena6, caracter));
//contarCaracter("programacion", "o");
//contarCaracter("javascript", "a");


// Ejercicio 10: Dividir oración en palabras
//debugger;
function dividirOracion(oraciones) {
    let palabras = oraciones.split(" "); //.split(" ;") split separa las palabras por espacios
    console.log(`Las palabras son:`);

    for (let i = 0; i < palabras.length; i++) {
        console.log(palabras[i]);
    }

    return `La oración tiene ${palabras.length} palabras`;
}
//let oracion = prompt("Ingrese una oración");
//console.log(dividirOracion(oracion));
//dividirOracion("JavaScript es un lenguaje de programación");
//dividirOracion("Me gusta aprender cosas nuevas");
