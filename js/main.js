const $formulario = document.querySelector('#carta-a-santa');
const $exito = document.querySelector('#exito');
const $errores = document.querySelector('#errores');


function validarNombre(nombre){

    if(nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }
    if(nombre.length > 50){
        return 'Este campo debe tener menos de 50 caracteres';
    }
    if (!/^[A-z]+$/.test(nombre)){
        return 'Este campo debe contener caracteres válidos';
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
    if (!/^[A-z0-9]+$/i.test(descripcionRegalo)){
        return 'Este campo debe contener caracteres válidos';
    }
    else {
        return '';
    }
}


function validarForm(){
    const nombre = $formulario.nombre.value;
    const descripcionRegalo = $formulario['descripcion-regalo'].value;
    const ciudad = $formulario.ciudad.value;
    
    const errores = {
    nombre: validarNombre(nombre),
    ciudad: validarCiudad(ciudad),
    'descripcion-regalo': validarDescripcionRegalo(descripcionRegalo)
    };

    manejarErrores(errores);

    event.preventDefault();
}


function manejarErrores(errores){

    const keys = Object.keys(errores);
    $errores.innerHTML = '';
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];

        if (error){
            cantidadErrores ++;
            $formulario[key].className = "error";
            const li = document.createElement('li');
            li.innerText = errores[key];
            $errores.appendChild(li);
        }
        else{
            $formulario[key].className = '';
        }
    });

    if (cantidadErrores === 0) {
        $formulario.className = "oculto";
        $exito.className = '';
        setTimeout(function(){
            window.location.replace("wishlist.html")
        }, 5000);
    }
    
}

$formulario.onsubmit = validarForm;
