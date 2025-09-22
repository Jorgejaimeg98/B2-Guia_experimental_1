// Bloque 3: Problemas Secuenciales Numéricos Sin Arreglos
// Ejercicio 1: Calcular el promedio de 5 números fijados.
//debugger;
function calcularPromedio(...numeros) { // Usamos rest operator para aceptar múltiples argumentos
    let suma = 0;
    let i = 0;

    while (i < numeros.length) {
        suma += numeros[i];
        i++;
    }

    let promedio = suma / numeros.length;
    console.log("El promedio es: " + promedio);
}
//calcularPromedio(10, 5, 7, 8, 8);  // → El promedio es: 7.6


//Ejercicio 2: Contar cuántos de 5 números son impares.
//debugger;
function contarImpares(...numeros) {
    let contador = 0;
    let i = 0;

    while (i < numeros.length) {
        if (numeros[i] % 2 !== 0) {
            contador++;
        }

        i++;
    }

    console.log(`Cantidad de números impares: ${contador}`);
}
//contarImpares(3, 4, 7, 8, 9); // Salida: Cantidad de números impares: 3


// Ejercicio 3: Leer 5 edades y contar cuántas son mayores de edad.
//debugger;
function contarMayoresDeEdad(...edades) {
    let contador = 0;
    let i = 0;

    while (i < edades.length) {
        if (edades[i] >= 18) {
            contador++;
        }

        i++;
    }
    console.log(`Cantidad de mayores de edad: ${contador}`);
}
//contarMayoresDeEdad(15, 22, 17, 30, 18); // Salida: Cantidad de mayores de edad: 3


// Ejercicio 4: Buscar un valor en 4 números.
//debugger;
function buscarValorEnNumeros(valorBuscado, ...numeros) {
    let encontrado = false;
    let i = 0;

    while (i < numeros.length) {
        if (numeros[i] === valorBuscado) {
            encontrado = true;
            break; // Salimos del bucle si encontramos el valor
        }

        i++;
    }

    if (encontrado) {
        console.log(`El valor ${valorBuscado} fue encontrado en los números.`);
    } else {
        console.log(`El valor ${valorBuscado} NO fue encontrado en los números.`);
    }
}
//buscarValorEnNumeros(7, 3, 4, 7, 8); // Salida: El valor 7 fue encontrado en los números.


// Ejercicio 5: Concatenar 3 palabras.
//debugger;
function concatenarPalabras(...palabras) {
    let resultado = palabras.join(' ');
    console.log(`Palabras concatenadas: ${resultado}`);
    //return `Palabras concatenadas: ${resultado}`;
}
//concatenarPalabras('Me', 'gusta', 'viajar'); // Salida: Palabras concatenadas: Me gusta viajar


// Ejercicio 6: Calcular el cubo de 3 números.
//debugger;
function calcularCubo(...numeros) {
    let cubos = []; // arreglo para almacenar los cubos
    let i = 0;

    while (i < numeros.length) {
        let cubo = Math.pow(numeros[i], 3); // Calculamos el cubo
        cubos.push(cubo);
        i++;
    }

    console.log(`Cubos: ${cubos.join(', ')}`);
}
//calcularCubo(2, 3, 4); // Salida: Cubos: 8, 27, 64


// Ejercicio 7: Mostar tabla de multiplicar de un número.
//debugger;
function mostrarTablaMultiplicar(n) {
    let resultado = '';
    let i = 1;
    
    while (i <= 10) {
        resultado += (n * i) + ', ';
        i++;
    }

    console.log(`Tabla de multiplicar del ${n}: ${resultado.slice(0, - 2)}`); // Quitamos la última coma y espacio
    console.log('--- Fin de la tabla de multiplicar ---');
}
//mostrarTablaMultiplicar(5); // Salida: Tabla de multiplicar del 5: ...

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
    let i = 1;

    while (i <= n) {
        factorial *= i;
        i++;
    }

    return factorial; 
}
let num = 5;
let salidaF = calcularFactorial(num); // Salida: El factorial de 5 es: 120
//console.log(`Entrada: ${num}`);
//console.log(`Salida: ${salidaF}`);


// Ejercicio 9: Leer 4 números y mostrar los que sean pares.
//debugger;
function mostrarParescadena(...numeros) {
    let pares = ''; // cadena vacía para ir concatenando los números pares
    let i = 0;

    while (i < numeros.length) {
        if (numeros[i] % 2 === 0) {
            if (pares === '') { // primer número sin espacio
                pares += numeros[i]; // primer número sin coma
            } else {
                pares += ', ' + numeros[i]; // agregamos coma antes del siguiente
            }
        }

        i++;
    }

    return pares;
}
let entradaPares = [3, 4, 7, 8];
let salidaPares = mostrarParescadena(...entradaPares);
//console.log(`Entrada: ${entradaPares.join(', ')}`);
//console.log(`Salida: ${salidaPares}`); // Salida: Números pares: 4, 8


// Ejercicio 10: Sumar 2 grupos A+B=C de 3 números.
//debugger;
function sumarGrupos(grupo1, grupo2) {
    let grupo3 = ''; // cadena vacía para ir concatenando los resultados
    let i = 0;

    while (i < grupo1.length) {
        let suma = grupo1[i] + grupo2[i];
        if (grupo3 === '') {
            grupo3 += suma; // primer número sin coma
        } else {
            grupo3 += ', ' + suma; // agregamos coma antes del siguiente
        }

        i++;
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