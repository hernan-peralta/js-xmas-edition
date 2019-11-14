function probarValidarEdad(){
    console.assert(
        validarEdad('aslk.#j') === 'Este campo solo puede contener numeros enteros', 'validarEdad no valido que no se permitan solo caracteres numericos'
    );

    console.assert(
        validarEdad('') === 'El campo no puede estar vacio', 'validarEdad no valido que el campo no estuviera vacio.'
    );

    console.assert(
        validarEdad(20) === '', 'validarEdad no funcionó una edad valida.'
    );
}


probarValidarEdad();
