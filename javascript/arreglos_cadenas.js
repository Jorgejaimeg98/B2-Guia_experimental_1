// Bloque 2: Ejercicios de Cadenas y Arreglos (loa mismos 10, varios datos)
// Ejercicic 1: Contar caracteres de varias palabras arreglos
function contarCaracteresArreglos(palabras) {
    for (let i = 0; i < palabras.length; i++) {
        contarCaracteres(palabras[i]);
    }
    return `${palabras.length} palabras procesadas Exitosamente`;
}
//let palabras = ["javascript", "html", "css", "python"];
//console.log(contarCaracteresArreglos(palabras)); // llama a la función dentro de console.log para mostrar el return -> retorno


// Ejercicio 2: Contar apariciones de una letra en varias frases
function contarAparicionesArreglos(frases, letra) {
    for (let i = 0; i < frases.length; i++) {
        contarApariciones(frases[i], letra);
    }
    return `${frases.length} frases procesadas Exitosamente`;
}
//let frase = ["Hola mundo", "Me gusta programar"];
//let caracter = "a";
//console.log(contarAparicionesArreglos(frase, caracter)); // llama a la función dentro de console.log para mostrar el return -> retorno


// Ejercicio 3: Invertir varias palabras
function invertirPalabrasArreglos(palabras) {
    for (let i = 0; i < palabras.length; i++) {
        invertirPalabra(palabras[i]);
    }
    return `${palabras.length} palabras procesadas Exitosamente`;
}   
//let palabra = ["Montaña", "Velero", "Avión", "Café"];
//console.log(invertirPalabrasArreglos(palabra)); // llama a la función dentro de console.log para mostrar el return -> retorno


// Ejercicio 4: Comparar longitudes de pares de palabras
function compararLongitudesArreglos(pares) {
    for (let i = 0; i < pares.length; i++) {
        compararLongitudes(pares[i][0], pares[i][1]);
    }
    return `${pares.length} pares procesados Exitosamente`;
}
//let paresPalabras = [["javascript", "python"], ["html", "css"], ["casa", "tasa"]];
//console.log(compararLongitudesArreglos(paresPalabras)); // llama a la función dentro de console.log para mostrar el return -> retorno

// Ejercicio 5: Iniciales de varios nombres completos
function inicialesNombresArreglos(nombres) {
    for (let i = 0; i < nombres.length; i++) {
        inicialesNombre(nombres[i]);
    }
    return `${nombres.length} nombres procesados Exitosamente`;
}
//let nombresCompletos = ["Juan Luis Pérez", "María Jose Gómez", "Carlos Stiven Sánchez"];
//console.log(inicialesNombresArreglos(nombresCompletos)); // llama a la función dentro de console.log para mostrar el return -> retorno


// Ejercicio 6: Reemplazo de caracteres en varias palabras
function reemplazarCaracteresArreglos(palabras, charViejo, charNuevo) {
    for (let i = 0; i < palabras.length; i++) {
        reemplazarCaracteres(palabras[i], charViejo, charNuevo);
    }
    return `${palabras.length} palabras procesadas Exitosamente`;
}
//let palabra = ["banana", "manzana", "naranja"];
//let letra1 = "a";
//let letra2 = "$";
//console.log(reemplazarCaracteresArreglos(palabra, letra1, letra2)); // llama a la función dentro de console.log para mostrar el return -> retorno


// Ejercicio 7: Palíndromos en un arreglo
function esPalindromoArreglos(palabras) {
    for (let i = 0; i < palabras.length; i++) {
        esPalindromo(palabras[i]);
    }
    return `${palabras.length} palabras procesadas Exitosamente`;
}
//let palabra = ["radar", "nivel", "javascript", "ana"];
//console.log(esPalindromoArreglos(palabra)); // llama a la función dentro de console.log para mostrar el return -> retorno


// Ejercicio 8: Frases con más caracteres en varios pares
function fraseMasLargaArreglos(pares) {
    for (let i = 0; i < pares.length; i++) {
        fraseMasLarga(pares[i][0], pares[i][1]);
    }
    return `${pares.length} pares procesados Exitosamente`;
}
//let paresFrases = [["Hola bienvenidos", "Me gusta el café"], ["JavaScript es genial", "Python también es genial"]];
//console.log(fraseMasLargaArreglos(paresFrases)); // llama a la función dentro de console.log para mostrar el return -> retorno


// Ejercicio 9: Contar apariciones de un carácter en varias palabras
function contarCaracterArreglos(palabras, caracter) {
    for (let i = 0; i < palabras.length; i++) {
        contarCaracter(palabras[i], caracter);
    }
    return `${palabras.length} palabras procesadas Exitosamente`;
}
//let palabra = ["programacion", "javascript", "banana"];
//let letra = "a";
//console.log(contarCaracterArreglos(palabra, letra)); // llama a la función dentro de console.log para mostrar el return -> retorno


// Ejercicio 10: Dividir varias oraciones en palabras arreglos
function dividirOracionesArreglos(oraciones) {
    let contador = 0;
    for (let i = 0; i < oraciones.length; i++) {
    let palabras = oraciones[i].split(" ");
    contador++;
    console.log(`Oración ${contador}:  ${palabras.join(", ")}`);
    }
    return `${oraciones.length} oraciones procesadas Exitosamente`;
}
//let oracion = ["Me gusta programar en JavaScript", "Aprender nuevos lenguajes de programación"];
//console.log(dividirOracionesArreglos(oracion));