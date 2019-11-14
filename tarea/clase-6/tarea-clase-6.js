//Aclaración: el tipo de campo para el input de la edad lo puse como type = "text" para que la validación con RegEx tengan sentido, lo mejor creo que seria usar type= "number" en cualquier otro caso

const $formEdades = document.querySelector('#edades');
const $agregarEdad = document.querySelector('#agregar-integrante');
const $calcular = document.querySelector('#calcular');
const $errores = document.querySelector('#errores');
let $camposEdad = document.getElementsByClassName('edad');
const $divDondeVanLosInputs = document.getElementById('div-inputs'); //mas explícito imposible
const $resultado = document.getElementById("resultado");
const $empezarDeNuevo = document.getElementById("empezar-de-nuevo");


function agregarInput(){
    let inputEdad = document.createElement("input");
    inputEdad.setAttribute("type", "text");
    inputEdad.setAttribute("class", "edad");
    inputEdad.setAttribute("placeholder", "Edad del miembro familiar");
    $divDondeVanLosInputs.appendChild(inputEdad);
    $divDondeVanLosInputs.appendChild(document.createElement('br')); //agregado por proposito estetico
    event.preventDefault();
}



function validarEdad(edad){
    if (edad === ''){
        return 'El campo no puede estar vacio';
    }
    if (!/^[0-9]*$/.test(edad)){
        return 'Este campo solo puede contener numeros enteros';
    }
    else{
        return '';
    }
}



function calcularEdad(){
    let edades = [];

    for (let i = 0; i< $camposEdad.length; i++){
        edades.push($camposEdad[i].value);
    }

    const errores = {
    };

    edades.forEach(function(currentValue, index, edades){
        errores[index] = validarEdad(edades[index])
    });
  
    if (manejarErroresEdades(errores) === 0){
        edades.forEach(function(currentValue, index, edades){
            edades[index] = Number(edades[index])
        });
        let mayoredad = Math.max(...edades);
        let menoredad = Math.min(...edades);
        let promedio = edades.reduce((accumulator, currentValue) =>  accumulator + currentValue) / edades.length;
        
        $resultado.innerText = `La mayor edad es ${mayoredad}, la menor edad es ${menoredad} y el promedio es ${promedio}.`;
    }
    else{
        $resultado.innerText = '';
    }

    event.preventDefault();
}




function manejarErroresEdades(errores){
    const keys = Object.keys(errores);
    $errores.innerHTML = '';
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];

        if (error){
            cantidadErrores ++;
            $camposEdad[key].classList.add("error");
            const li = document.createElement('li');
            li.innerText = errores[key];
            $errores.appendChild(li);
            cantidadErrores ++;
        }
        else{
            $camposEdad[key].classList.remove("error");
        }
    });
    return cantidadErrores;
}




function empezarDeNuevo(){
    $errores.innerHTML = ''
    $divDondeVanLosInputs.innerHTML = '';
    $resultado.innerText = '';
    event.preventDefault();

}



$agregarEdad.onclick = agregarInput;

$calcular.onclick = function(event){
    calcularEdad(event);
};

$empezarDeNuevo.onclick = empezarDeNuevo;
