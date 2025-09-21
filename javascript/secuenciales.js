// Bloque 3: Problemas Secuanciales Numéricos
// Ejercicio 1: Calcular el promedio de 5 números fijados.
function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    let promedio = suma / numeros.length;
    console.log(`El promedio es: ${promedio}`);
}
//calcularPromedio([5, 7, 9, 3, 6]); // Salida: 6


//Ejercicio 2: Contar cuántos de 5 números son impares.
function contarImpares(numeros) {
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            contador++;
        }
    }
    console.log(`Cantidad de números impares: ${contador}`);
}
//contarImpares([4, 7, 2, 9, 6]); // Salida: 2


// Ejercicio 3: Leer 5 edades y contar cuántas son mayores de edad.
function contarMayoresDeEdad(edades) {
    let contador = 0;
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            contador++;
        }
    }
    console.log(`Cantidad de mayores de edad: ${contador}`);
}
//contarMayoresDeEdad([16, 21, 18, 15, 30]); // Salida: 3


// Ejercicio 4: Buscar un valor en 4 números.
function buscarValor(numeros, valorBuscado) {
    let encontrado = false; 
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === valorBuscado) {
            encontrado = true;
            break;
        }
    }
    if (encontrado) {
        console.log(`El valor ${valorBuscado} fue encontrado.`);
    } else {
        console.log(`El valor ${valorBuscado} no fue encontrado.`);
    }
}
//buscarValor([3, 5, 7, 9], 7); // Salida: El valor 7 fue encontrado.


// Ejercicio 5: Concatenar 3 palabras.
function concatenarPalabras(palabras) {
    let resultado = '';
    for (let i = 0; i < palabras.length; i++) {
        resultado += palabras[i];
        if (i < palabras.length - 1) {
            resultado += ' ';
        }
    }
    console.log(`Palabras concatenadas: ${resultado}`);
}
//concatenarPalabras(['Me', 'gusta', 'el', 'café']);


// Ejercicio 6: Calcular el cubo de 3 números.
function calcularCubo(numeros) {
    let cubos = [];
    for (let i = 0; i < numeros.length; i++) {
        cubos.push(Math.pow(numeros[i], 3));
    }
    console.log(`Cubos: ${cubos.join(', ')}`);
}
//calcularCubo([2, 3, 4]); // Salida: Cubos: 8, 27, 64


// Ejercicio 7: Mostar tabla de multiplicar de un número.
/* function mostrarTablaMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero * i}`);
    }   
}
mostrarTablaMultiplicar(5); */ // Salida: Tabla de multiplicar del 5: ...


// Ejercicio 7: Mostrar tabla de multiplicar de un número.
function tablaMultiplicar(numero) {
  console.log(`Tabla de multiplicar del ${numero}:`);

  let resultados = []; // Arreglo para almacenar los resultados
  for (let i = 1; i <= 10; i++) {
    resultados.push(numero * i); // Agrega el resultado al arreglo
  }
  console.log(resultados.join(", "));
}
//tablaMultiplicar(5);


// Ejercicio 8: Calcular el factorial de un número.
function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log(`El factorial de ${numero} es: ${factorial}`);
}
//calcularFactorial(4); // Salida: El factorial de 4 es: 24


// Ejercicio 9: Leer 4 números y mostrar los que sean pares.
function mostrarPares(numeros) {
    console.log(`Números ingresados: ${numeros.join(', ')}`);
    let pares = []; // Arreglo para almacenar los números pares
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]); // Agrega el número par al arreglo
        }
    }
    console.log(`Pares: ${pares.join(', ')}`);
    return `${pares.length} números pares encontrados.`;
}
//console.log(mostrarPares([3, 4, 7, 8])); // Salida: Números pares: 4, 8


// Ejercicio 10: Sumar 2 grupos A+B=C de 3 números.
function sumarGrupos(grupo1, grupo2) {
    let grupo3 = [];
    for (let i = 0; i < grupo1.length; i++) {
        grupo3.push(grupo1[i] + grupo2[i]); // Suma elemento a elemento
    }
    console.log(`Grupo A: [${grupo1.join(', ')}]`);
    console.log(`Grupo B: [${grupo2.join(', ')}]`);
    console.log(`Grupo C → (A+B): [${grupo3.join(', ')}]`);
}
//sumarGrupos([1, 2, 3], [4, 5, 6]); 


/* function sumarGrupos(grupo1, grupo2) {
    let suma1 = 0;
    let suma2 = 0;
    let resultado =[];
    let grupo3 = [];
    for (let i = 0; i < grupo1.length; i++) {
        suma1 += grupo1[i];
        suma2 += grupo2[i];
        resultado.push(grupo1[i] + grupo2[i]);
        grupo3.push(grupo1[i] + grupo2[i]);
    }
    console.log(`Grupo A: [${grupo1.join(', ')}]`);
    console.log(`Grupo B: [${grupo2.join(', ')}]`);
    console.log(`Grupo C → (A+B): [${grupo3.join(', ')}]`);
    return `Suma total del grupo C: ${suma1 + suma2}`; // Salida: Suma total: 21
}
console.log(sumarGrupos([1, 2, 3], [4, 5, 6]));  */
