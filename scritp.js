
function captura(){
    const nombre=document.getElementById("name").value;
    const apellido = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const cantidad=document.getElementById("cantidad").value;
    const categoria=document.getElementById("categoria").value;
    if (nombre=="") {
        alert("Debe completar el campo con el nombre");
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
        }
     else{
        console.log(nombre,apellido,email,cantidad,categoria);
        
     }       
                     
}

   function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
 function totalAPagar() {
    let total=0;
    if (categoria==1) {
        total =(cantidad*40);
        console.log(total);
    }
} 

 /* switch (categoria) {
    case value="1"  :
           total= cantidad * 40;
        break;
    case value= "2":
           total= cantidad * 50;
        break
    case value= "3":
           total= cantidad * 170;
        break         
    default:
        break;
 }
  */
