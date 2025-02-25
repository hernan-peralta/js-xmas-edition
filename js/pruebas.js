function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'validarNombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'validarNombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
      validarNombre('Hernan') === '', 'validarNombre no funcionó correctamente'
  );
}

probarValidarNombre();



function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Debes seleccionar una provincia.', 'validarCiudad no validó que se haya elegido alguna provincia.'
    );
    console.assert (
        validarCiudad('Mendoza') === '', 'validarCiudad no funcionó correctamente'
    );
}

probarValidarCiudad();



function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Debes describir tu regalo.', 'validarDescripcionRegalo no validó que se haya ingresado una descripcion del regalo.'
    )

    console.assert(
        validarDescripcionRegalo('ljkldsgjlkjsladjgsajldgjiowejtljasldgusaiodjgklasdjgasñdjgksjgñljljg') === 'Tienes hasta 50 caracteres para describir tu regalo', 'validarDescripcionRegalo no validó que se hayan escrito hasta 50 caracteres.'
    )
    console.assert(
        validarDescripcionRegalo('Bicicleta') === '', 'validarDescripcionRegalo no funcionó correctamente'
    );
};

probarValidarDescripcionRegalo();
