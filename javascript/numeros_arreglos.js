//Bloque 4: Problemas Numéricos con Arreglos
// Ejercicio 1: Promedio de un Arreglo
//debugger;
function calcularPromedioArreglo(n) {
    // usamos spread operator para expandir el arreglo en parámetros
    calcularPromedio(...n);      
}
let numeros = [5, 9, 10, 7, 8];
//calcularPromedioArreglo(numeros); // Salida: El promedio de los números en el arreglo es: ...


// Ejercicio 2: Contar Impares en un Arreglo
//debugger;
function contarImparesArreglo(n) {
    // usamos spread operator para expandir el arreglo en parámetros
    contarImpares(...n); // expandimos el arreglo en parámetros
}
let numeros2 = [1, 5, 7, 11, 17];
//contarImparesArreglo(numeros2); // Salida: Cantidad de números impares: ...


// Ejercicio 3: Mayores de edad en un arreglo
//debugger;
function contarMayoresDeEdadArreglo(edades) {
    // usamos spread operator para expandir el arreglo en parámetros
    contarMayoresDeEdad(...edades); // expandimos el arreglo en parámetros
}
let edades = [18, 22, 12, 30, 21];
//contarMayoresDeEdadArreglo(edades); // Salida: Cantidad de mayores de edad: ...


// Ejercicio 4: Buscar valor en un arreglo
//debugger;
function buscarValorEnArreglo(valorBuscado, numeros) {
    // usamos spread operator para expandir el arreglo en parámetros
    buscarValorEnNumeros(valorBuscado, ...numeros); // expandimos el arreglo en parámetros
}
let numeros3 = [3, 6, 9, 12];
//buscarValorEnArreglo(9, numeros3); // Salida: El valor 9 fue encontrado en los números.


// Ejercicio 5:Concatenar palabras de un arreglo
//debugger;
function concatenarPalabrasArreglo(palabras) {
    // usamos spread operator para expandir el arreglo en parámetros
    concatenarPalabras(...palabras); // expandimos el arreglo en parámetros
}
let palabras = ['JavaScript', 'es', 'genial'];
//concatenarPalabrasArreglo(palabras); // Salida: Palabras concatenadas: JavaScript es genial


// Ejercicio 6:Cubo de elementos en arreglo
//debugger;
function calcularCuboArreglo(numeros) {
    // usamos spread operator para expandir el arreglo en parámetros
    calcularCubo(...numeros); // expandimos el arreglo en parámetros
}
let numeros4 = [5, 6, 7];
//calcularCuboArreglo(numeros4); // Salida: Cubos de los números: 125, 216, 343


// Ejericio 7:Tabla de multiplicar de elementos en arreglo
//debugger;
function tablaMultiplicarArreglo(numeros) {
    for (let num of numeros) { // recorremos cada número en el arreglo
        mostrarTablaMultiplicar(num); // expandimos el arreglo en parámetros
    }

    console.log('--- Fin de las tablas de multiplicar ---');
}
let numeros5 = [2, 4, 5];
//tablaMultiplicarArreglo(numeros5); // Salida: Tabla de multiplicar


// Ejercicio 8: Factorial de elementos en arreglo
//debugger;
function calcularFactorialArreglo(numeros) {    
    let resultado = [];

    for (let num of numeros) { // recorremos cada número en el arreglo
        resultado.push(calcularFactorial(num)); // expandimos el arreglo en parámetros
    }

    return resultado;
}
let numeros6 = [4, 6];
let salida = calcularFactorialArreglo(numeros6);
//console.log("Entrada:", numeros6);
//console.log("Salida:", salida);

// Ejercicio 9: Mostrar números pares en un arreglo
//debugger;
function mostrarParesArreglo(numeros) {
    // usamos spread operator para expandir el arreglo en parámetros
    let stringPares= mostrarParescadena(...numeros); // expandimos el arreglo en parámetros

    let resultArray = stringPares.split(', ').map(Number); // convertimos "2, 4, 6" → ["2","4","6"] → [2,4,6]
    
    return resultArray; // retornamos el arreglo de números pares
}
let numeros7 = [1, 2, 3, 4, 5, 6];
let SalidaPares = mostrarParesArreglo(numeros7);
//console.log("Entrada:", numeros7);
//console.log("Salida:", SalidaPares);


// Ejercicio 10: Sumar 2 grupos A+B=C de elementos en arreglos
//debugger;
function sumarGruposArreglo(grupo1, grupo2) {
    // llamamos a la primera función
    let resultadoCadena = sumarGrupos(A, B);  

    // convertimos "5, 7, 9" → ["5","7","9"] → [5,7,9]
    let resultadoArreglo = resultadoCadena.split(', ').map(Number);  

    return resultadoArreglo; // retornamos el arreglo de números
}
let A = [1, 2, 3];
let B = [4, 5, 6];
let salidaArr = sumarGruposArreglo(A, B); 
//console.log("Entrada A", A);
//console.log("Entrada B", B);
//console.log("Salida C:", salidaArr); // Salida: Grupo C: [5, 7, 9]