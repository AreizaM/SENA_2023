function sum(){

    // Declaración de variable mediante el metodo en la busqueda del id --> getElementById();
    let firtsNumber = parseInt(document.getElementById('inputPrimerValor').value);
    let secondNumber = parseInt(document.getElementById('inputSegundoValor').value);
    let sum = firtsNumber+secondNumber;

    // Mostrar el resultado
    document.getElementById('p_resultadoSuma').textContent ='La suma es '.concat(sum);

}
function subtraction(){

    // Declaración de variable mediante el metodo en la busqueda del id --> getElementById();
    let firtsNumber = parseInt(document.getElementById('inputPrimerValor').value);
    let secondNumber = parseInt(document.getElementById('inputSegundoValor').value);
    let subtraction = firtsNumber-secondNumber;

    // Mostrar el resultado
    document.getElementById('p_resultadoResta').textContent ='La resta es '.concat(subtraction);

}

function multiplication(){

    // Declaración de variable mediante el metodo en la busqueda del id --> getElementById();
    let firtsNumber = parseInt(document.getElementById('inputPrimerValor').value);
    let secondNumber = parseInt(document.getElementById('inputSegundoValor').value);
    let multiplication = firtsNumber*secondNumber;

    // Mostrar el resultado
    document.getElementById('p_resultadoMultiplicacion').textContent ='La multiplicación es '.concat(multiplication);

}

function division(){

    // Declaración de variable mediante el metodo en la busqueda del id --> getElementById();
    let firtsNumber = parseInt(document.getElementById('inputPrimerValor').value);
    let secondNumber = parseInt(document.getElementById('inputSegundoValor').value);
    let division = firtsNumber/secondNumber;

    // Mostrar el resultado
    document.getElementById('p_resultadoDivision').textContent ='La división es '.concat(division);

}

function module(){

    // Declaración de variable mediante el metodo en la busqueda del id --> getElementById();
    let firtsNumber = parseInt(document.getElementById('inputPrimerValor').value);
    let secondNumber = parseInt(document.getElementById('inputSegundoValor').value);
    let module = firtsNumber%secondNumber;

    // Mostrar el resultado
    document.getElementById('p_resultadoModulo').textContent ='El módulo es '.concat(module);

}

