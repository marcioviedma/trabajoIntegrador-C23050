/*
function captura(){
    const nombre=document.getElementById("name").value;
    const apellido = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const cantidad=document.getElementById("cantidad").value;
    const categoria=document.getElementById("categoria").value;
    if (nombre=="" && apellido=="" && email=="" && cantidad=="" && categoria=="") {
        alert("Debe completar todos los campos");
        document.getElementById("name").focus();
    } else if (apellido=="") {
        alert("Debe completar el campo con el apellido");
        document.getElementById("surname").focus();
    }else if (categoria=="") {
    alert("Debe completar el campo con la categoria");
    document.getElementById("categoria").focus();
    }
    else if (cantidad=="") {
        alert("Debe completar el campo con la cantidad");   
        document.getElementById("cantidad").focus();
        }
    else if (email=="" ){
        alert("Debe completar el campo con el email");
        document.getElementById("email").focus();
        }
        else if (!isValidEmail(email)) {
            alert('Ingrese un correo electrónico válido');
            document.getElementById("email").focus();
        }else if (nombre=="") {
            
            alert("Debe completar el campo con el nombre");
            document.getElementById("nombre").focus();
        }
     else{
        let totalValorTickets = (cantidad.value) * valorTicket;

        // Aplico descuentos según categoría
        if (categoria.value == 0) {
            totalValorTickets = totalValorTickets ;
        }
        if (categoria.value == 1) {
            totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
        }
        if (categoria.value == 2) {
            totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
        }
        if (categoria.value == 3) {
            totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
        }
        console.log(nombre,apellido,email,cantidad,categoria);
        total.innerHTML = totalValorTickets;
     }       
                     
}

   function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
*/ 


 // Defino valor de ticket
const valorTicket = 200;

// Defino porcentajes de descuento según categoría
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

// Elementos en variables
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidad");
let categoria       = document.getElementById("categoria");

// Función para quitar el estilo de error a los elementos del form
function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

// Cálculo total a pagar
function total_a_pagar() {

    // Ejecuto función para que quite todos los estilos de error en los campos que los tuvieran
    quitarClaseError();

    // Verifico si lleno los siguientes campos, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (nombre.value === "") {
        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor, escribí tu email.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Para determinar si el correo electrónico es válido o no
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(mail.value)) {
        alert("Por favor, escribí un correo electrónico válido.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Verifico si está ingresado al menos 1 ticket, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if ( (cantidad.value == 0) || (isNaN(cantidad.value)) ) {
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        cantidad.classList.add("is-invalid");
        cantidad.focus();
        return;
    }

    // Verifico que haya seleccionado una categoría, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (categoria.value == "") {
        alert("Por favor, seleccioná una categoría.");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    // Multiplico cantidad de tickets por el valor
    let totalValorTickets = (cantidad.value) * valorTicket;

    // Aplico descuentos según categoría
    if (categoria.value == 0) {
        totalValorTickets = totalValorTickets ;
    }
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    }

    // Inserto el valor en el HTML
    total.innerHTML = totalValorTickets;
}

// Botón Resumen recibe un escuchador y la funcion del cálculo
btnResumen.addEventListener('click', total_a_pagar);

// Función para el botón Borrar para que borre el valor
function reset_total_a_pagar() {
    quitarClaseError();
    total.innerHTML = "";
}
btnBorrar.addEventListener('click', reset_total_a_pagar); 

 
