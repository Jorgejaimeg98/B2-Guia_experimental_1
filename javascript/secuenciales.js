// Bloque 3: Problemas Secuenciales Numéricos Sin Arreglos
// Ejercicio 1: Calcular el promedio de 5 números fijados.
//debugger;
function calcularPromedio(...numeros) { // Usamos rest operator para aceptar múltiples argumentos
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    let promedio = suma / numeros.length;
    return `El promedio es: ${promedio}`;
}
//console.log(calcularPromedio(10, 5, 7, 8, 8));  // → El promedio es: 7.6


//Ejercicio 2: Contar cuántos de 5 números son impares.
//debugger;
function contarImpares(...numeros) {
    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) { // es impar
            contador++;
        }
    }

    return `Cantidad de números impares: ${contador}`;
}
//console.log(contarImpares(3, 4, 7, 8, 9)); // Salida: Cantidad de números impares: 3


// Ejercicio 3: Leer 5 edades y contar cuántas son mayores de edad.
//debugger;
function contarMayoresDeEdad(...edades) {
    let contador = 0;

    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) { // es mayor de edad
            contador++;
        }
    }

    return `Cantidad de mayores de edad: ${contador}`;
}
//console.log(contarMayoresDeEdad(15, 22, 17, 30, 18)); // Salida: Cantidad de mayores de edad: 3


// Ejercicio 4: Buscar un valor en 4 números.
//debugger;
function buscarValorEnNumeros(valorBuscado, ...numeros) {
    let encontrado = false;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === valorBuscado) { // Valor encontrado
            encontrado = true;
            break; // Salimos del bucle si encontramos el valor
        }
    }

    if (encontrado) {
        return `El valor ${valorBuscado} fue encontrado en los números.`;
        
    } else {
        return `El valor ${valorBuscado} NO fue encontrado en los números.`;

    }
}
//console.log(buscarValorEnNumeros(7, 3, 4, 7, 8)); // Salida: El valor 7 fue encontrado en los números.


// Ejercicio 5: Concatenar 3 palabras.
//debugger;
function concatenarPalabras(...palabras) {
    let resultado = ""; // cadena vacía para ir concatenando las palabras

    for (let i = 0; i < palabras.length; i++) {
        resultado += palabras[i]; // Concatenamos la palabra actual
        if (i < palabras.length - 1) { // Si no es la última palabra
            resultado += " "; // Agregamos espacio entre palabras, pero no al final
        }
    }

    return `Palabras concatenadas: ${resultado}`;
}
//console.log(concatenarPalabras('Me', 'gusta', 'viajar')); // Salida: Palabras concatenadas: Me gusta viajar


// Ejercicio 6: Calcular el cubo de 3 números.
//debugger;
function calcularCubo(...numeros) {
    let cubos = ""; // cadena vacía para ir concatenando los cubos

    for (let i = 0; i < numeros.length; i++) {
        let cubo = Math.pow(numeros[i], 3); // Calculamos el cubo

        //concatenamos el cubo
        cubos += cubo;

        if (i < numeros.length - 1) { // Si no es el último número
            cubos += ", "; // Agregamos coma entre números, pero no al final
        }
    }

    return `Cubos: ${cubos}`;
}
//console.log(calcularCubo(2, 3, 4)); // Salida: Cubos: 8, 27, 64


// Ejercicio 7: Mostar tabla de multiplicar de un número.
//debugger;
function mostrarTablaMultiplicar(n) {
    let resultado = "";
    
    for (let i = 1; i <= 10; i++) {
        resultado += (n * i) + ', ';

    }

    return `Tabla de multiplicar del ${n}: ${resultado.slice(0, - 2)}`; // Quitamos la última coma y espacio
}
//console.log(mostrarTablaMultiplicar(5)); // Salida: Tabla de multiplicar del 5: ...

/* function mostrarTablaMultiplicar(n) {
    let resultado = [];
    let i = 1;
    
    while (i <= 10) {
        resultado.push(n * i);
        //let resultado = n * i;
        //console.log(`${resultado}`);
        i++;
    }
    console.log(`Tabla de multiplicar del ${n}: ${resultado.join(', ')}`); // Quitamos la última coma y espacio
} 
//mostrarTablaMultiplicar(5);*/ // Salida: Tabla de multiplicar del 5: ...


// Ejercicio 8: Calcular el factorial de un número.
//debugger;
function calcularFactorial(n) {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;

    }

    return factorial; 
}
//let num = prompt("Ingrese un número para calcular su factorial: ");
//console.log(calcularFactorial(num)); // Salida: El factorial de 3 es: 6
//console.log(`Entrada: ${num}`);
//console.log(`Salida: ${salidaF}`);


// Ejercicio 9: Leer 4 números y mostrar los que sean pares.
//debugger;
function mostrarParescadena(...numeros) {
    let pares = ""; // cadena vacía para ir concatenando los números pares

    for(let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) { // es par

            if (pares === '') { // primer número sin espacio
                pares += numeros[i]; // primer número sin coma

            } else {
                pares += ', ' + numeros[i]; // agregamos coma antes del siguiente

            }
        }
    }

    return pares;
}
//let num = prompt("Ingrese números separados por comas (ej: 3,4,7,8): ");
//num = num.split(',').map(Number); // Convertimos la entrada en un arreglo de números
//console.log(mostrarParescadena(...num));

//let salidaPares = mostrarParescadena(...num); // expandimos el arreglo en parámetros
//let entradaPares = (3, 4, 7, 8);
//console.log(`Entrada: ${entradaPares.join(', ')}`);
//console.log(`Salida: ${salidaPares}`); // Salida: Números pares: 4, 8


// Ejercicio 10: Sumar 2 grupos A+B=C de 3 números.
//debugger;
function sumarGrupos(grupo1, grupo2) {
    let grupo3 = ""; // cadena vacía para ir concatenando los resultados

    for (let i = 0; i < grupo1.length; i++){
        let suma = grupo1[i] + grupo2[i];

        if (grupo3 === '') {
            grupo3 += suma; // primer número sin coma

        } else {
            grupo3 += ', ' + suma; // agregamos coma antes del siguiente

        }
    }

    return grupo3;
}
let g1 = [1, 2, 3];
let g2 = [4, 5, 6]; 
let salidaS = sumarGrupos(g1, g2);
//console.log(`Entrada A=(${g1.join(', ')}), B=(${g2.join(', ')})`);
//console.log(`Salida C=(${salidaS})`);


/* function sumarGruposV2(grupo1, grupo2) {
    let grupo3 = '';
    for (let i = 0; i < grupo1.length; i++) {
        let suma = grupo1[i] + grupo2[i];
        if (grupo3 === '') {
            grupo3 += suma; // primer número sin coma
        } else {
            grupo3 += ', ' + suma; // agregamos coma antes del siguiente
        }       
    }           
    console.log(`Grupo A: [${grupo1.join(', ')}]`);
    console.log(`Grupo B: [${grupo2.join(', ')}]`);
    console.log(`Grupo C → (A+B): [${grupo3}]`); // ya esta en formato cadena
} 
//sumarGruposV2([1, 2, 3], [4, 5, 6]);*/