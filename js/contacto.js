const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const descripcion = document.getElementById('descripcion');

form.addEventListener('submit', e=>{
    e.preventDefault();
    verifEntradas();
});

function verifEntradas(){
    const vNombre = nombre.value.trim();
    const vEmail = email.value.trim();
    const vDescripcion = descripcion.value.trim();

    if(vNombre === '') {
		mostrarMensaje(nombre,'Por favor, ingrese su Nombre Completo');
	}else if (!verifNombre(vNombre)){
		mostrarMensaje(nombre,'El valor ingresado no es correcto');
	}else{ocultarMensaje(nombre);}

    if(vEmail === '') {
		mostrarMensaje(email,'Por favor, ingrese su e-mail');
	}else if (!verifEmail(vEmail)){
		mostrarMensaje(email,'Ingrese un e-mail válido');
	}else{ocultarMensaje(email);}

    if(vDescripcion === '') {
		mostrarMensaje(descripcion,'No ha ingresado su mensaje');
	}else{ocultarMensaje(descripcion);}
}

function mostrarMensaje(entrada,mensaje){
    const mostrarMensaje = entrada.parentElement;
    const small = mostrarMensaje.querySelector('small');
    mostrarMensaje.className = 'cGridC2InputDiv error';
    small.innerText = mensaje;
}

function ocultarMensaje(entrada){
    const ocultarMensaje = entrada.parentElement;
    ocultarMensaje.className = 'cGridC2InputDiv success';
}

function verifNombre(nombre){
    return /^[A-Za-z]+$/.test(nombre);
}

function verifEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}