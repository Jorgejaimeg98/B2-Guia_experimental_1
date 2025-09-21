// Bloque 3: Problemas Secuenciales Numéricos Sin Arreglos
// Ejercicio 1: Calcular el promedio de 5 números fijados.
//debugger;
function calcularPromedio(n) {
    let contador = 0, suma = 0, numero = 0;
    while (contador < n) {
        numero = parseFloat(prompt(`Ingrese su calificación (${contador + 1}/5):`));
        suma += numero;
        contador++;
    }
    let promedio = suma / n;
    console.log(`El promedio de los ${n} números es: ${promedio}`);
}
//calcularPromedio(5); // Salida: El promedio de los 5 números es: ...


//Ejercicio 2: Contar cuántos de 5 números son impares.
//debugger;
function contarImpares(n) {
    let contador = 0, i = 0, numeros;
    while (i < n) {
        numeros = parseInt(prompt(`Ingrese su número ${i + 1}:`));  
        if (numeros % 2 !== 0) {
            contador++;
        }
        i++;
    }
    console.log(`Cantidad de números impares: ${contador}`);
}
//contarImpares(5); // Salida: Cantidad de números impares: ...


// Ejercicio 3: Leer 5 edades y contar cuántas son mayores de edad.
//debugger;
function contarMayoresDeEdad(n) {
    let contador = 0, i = 0, edades;
    while (i < n) {
        edades = parseInt(prompt(`Ingrese la edad ${i + 1}:`));
        if (edades >= 18) {
            contador++;
        }
        i++;
    }
    console.log(`Cantidad de mayores de edad: ${contador}`);
}
//contarMayoresDeEdad(5); // Salida: Cantidad de mayores de edad: ...


// Ejercicio 4: Buscar un valor en 4 números.
//debugger;
function buscarNumero(n1, n2, n3, n4, valor){
    let encontrado = false;
    let i = 1; // Contador para los 4 números
    while(i <= 4){
        if(
            (i === 1 && n1 === valor) ||
            (i === 2 && n2 === valor) ||
            (i === 3 && n3 === valor) ||
            (i === 4 && n4 === valor)
        ){
            encontrado = true;
        }
        i++;
    }
    console.log(`${n1}, ${n2}, ${n3}, ${n4} Búsqueda del valor: ${valor}`);
    if(encontrado){
        console.log(`El valor ${valor} fue encontrado.`);
    } else {
        console.log(`El valor ${valor} no fue encontrado.`);
    }
}
//buscarNumero(4, 8, 15, 23, 15);

//let n1 = parseInt(prompt("Ingresa el primer número:"));
//let n2 = parseInt(prompt("Ingresa el segundo número:"));
//let n3 = parseInt(prompt("Ingresa el tercer número:"));
//let n4 = parseInt(prompt("Ingresa el cuarto número:"));
//let valor = parseInt(prompt("Ingresa el número que quieres buscar:"));
//buscarNumero(n1, n2, n3, n4, valor);


// Ejercicio 5: Concatenar 3 palabras.
//debugger;
function concatenarPalabras(palabra1, palabra2, palabra3) {
    let resultado = palabra1 + ' ' + palabra2 + ' ' + palabra3;
    console.log(`Palabras concatenadas: ${resultado}`);
}
//concatenarPalabras('Me', 'gusta', 'viajar'); // Salida: Palabras concatenadas: Hola mundo !


// Ejercicio 6: Calcular el cubo de 3 números.
//debugger;
function calcularCubo(n1, n2, n3) {
    let cubo1 = Math.pow(n1, 3);
    let cubo2 = Math.pow(n2, 3);
    let cubo3 = Math.pow(n3, 3);
    console.log(`Cubos: ${cubo1}, ${cubo2}, ${cubo3}`);
    //return `Cubos: ${cubo1}, ${cubo2}, ${cubo3}`;
}
//calcularCubo(2, 3, 4);
//console.log(calcularCubo(2, 3, 4)); // Salida: Cubos: 8, 27, 64


// Ejercicio 7: Mostar tabla de multiplicar de un número.
//debugger;
function tablaMultiplicar(numero) {
    let i = 1;
    let resultados = '';
    while (i <= 10) {
        resultados += (numero * i) + ', ';
        i++;
    }
    console.log(`Tabla de multiplicar del ${numero}: ${resultados}`);
    //return `Tabla de multiplicar del ${numero}: ${resultados}`;
}
//tablaMultiplicar(5)
//console.log(tablaMultiplicar(5)); // Salida: Tabla de multiplicar del 5: 5, 10, 15, ..., 50


// Ejercicio 8: Calcular el factorial de un número.
//debugger;
function calcularFactorial(n) {
    let factorial = 1;
    let i = 1; // Contador desde 1 hasta n
    while (i <= n) {
        factorial *= i; // Multiplicamos el factorial por el contador
        i++;
    }
    console.log(`El factorial es ${n}!: ${factorial}`);
}
//calcularFactorial(4);


// Ejercicio 9: Leer 4 números y mostrar los que sean pares.
//debugger;
function mostrarParescadena(numeros) {
    let pares = '';
    let i = 0; // Contador para los 4 números
    while (i < numeros.length) {
        if (numeros[i] % 2 === 0) {
            if (pares === '') {
                pares += numeros[i]; // primer número par sin coma
            } else {
                pares += ', ' + numeros[i]; // agregamos coma antes del siguiente
            }
        }
        i++;
    }
    console.log(`Números ingresados: ${numeros.join(', ')}`);
    console.log(`Pares: ${pares}`); // ya esta en formato cadena
}
//mostrarParescadena([3, 4, 7, 8, 9, 10]);


// Ejercicio 10: Sumar 2 grupos A+B=C de 3 números.
//debugger;
function sumarGruposCadena(grupo1, grupo2) {
    let grupo3 = ''; // cadena vacía para ir concatenando los resultados
    let i = 0; // Contador para los 3 números
    while (i < grupo1.length) {
        let suma = grupo1[i] + grupo2[i];
        if (grupo3 === '') { // primer número sin espacio
            grupo3 += suma; // primer número sin coma
        } else {
            grupo3 += ', ' + suma; // agregamos coma antes del siguiente
        }
        i++;
    }
    console.log(`Grupo A: [${grupo1.join(', ')}]`);
    console.log(`Grupo B: [${grupo2.join(', ')}]`);
    console.log(`Grupo C → (A+B): [${grupo3}]`); // ya esta en formato cadena
}
//sumarGruposCadena([1, 2, 3], [4, 5, 6]);


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
} */
//sumarGruposV2([1, 2, 3], [4, 5, 6]);