const $formulario = document.querySelector('#carta-a-santa');


// const nombre = $formulario.nombre.value;
// const ciudad = $formulario.ciudad.value;
// const descripcionRegalo = $formulario['descripcion-regalo'].value;
const comportamiento = $formulario.comportamiento.value;
const $botonEnviarCarta = document.querySelector('#enviar-carta');
const $exito = document.querySelector('#exito');
const $errores = document.querySelector('#errores');


function validarNombre(nombre){

    if(nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }
    if(nombre.length > 50){
        return 'Este campo debe tener menos de 50 caracteres';
    }
    else{
        return '';
    }
}



function validarCiudad(ciudad){

    if (ciudad.length === 0){
        return 'Debes seleccionar una provincia.';
    }
    else {
        return '';
    }
}



function validarDescripcionRegalo(descripcionRegalo){

    if (descripcionRegalo.length === 0){
        return 'Debes describir tu regalo.';
    }

    if (descripcionRegalo.length > 50) {
        return 'Tienes hasta 50 caracteres para describir tu regalo';
    }

    else {
        return '';
    }
}



function validarTodo(nombre, ciudad, descripcionRegalo){
    if (validarNombre(nombre) === '' && validarCiudad(ciudad) === '' && validarDescripcionRegalo(descripcionRegalo) ===''){
        $exito.className = '';
    }
}



$botonEnviarCarta.onclick = () => {
    const descripcionRegalo = $formulario['descripcion-regalo'].value;
    const ciudad = $formulario.ciudad.value;
    const nombre = $formulario.nombre.value;
    validarTodo(nombre, ciudad, descripcionRegalo);
}
