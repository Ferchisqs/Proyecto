
function Validar() {

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;

  var validEmail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;
  var validPassword = /^[A-Z][A-Za-z0-9]{5}$/;
  if (validEmail.test(email)) {
    if (validPassword.test(password)) {
      {
        if (password == password2) {
          sessionStorage.setItem("llave", "verdadero");
          window.location.href = "../vistas/vista2.html"
        }


        else {
          alert("La contraseña no coincide, intentelo de nuevo");
     
        
          

        }
      }

    } else {
      alert("La contraseña debe iniciar con mayuscula, ser de 6 digitos y contener un número como mínimo.");
    }
  } else {
    alert("Correo electronico no valido, intentelo de nuevo.");
  }

  return false;
}

function Validar2() {
  let i=sessionStorage.getItem("llave");
  if (i=="verdadero") {
  window.alert("APARTADO CON EXITO");
  let element = document.getElementById("boton1");
  let element1 = document.getElementById("boton2");
  let element2 = document.getElementById("boton3");
  element.classList.remove("desactivado");    
  element1.classList.remove("desactivado");
  element2.classList.remove("desactivado");
  element.classList.remove("letra"); 
  element1.classList.remove("letra"); 
  element2.classList.remove("letra"); 
    
  } else {
      window.alert("Inicia sesion para reservar");
      console.log("Inicia sesion para reservar"); 
  }
}

function Eliminar() {
  let i=sessionStorage.getItem("llave");
  if (i=="verdadero") {
  window.alert("Ya ha inciado sesión")
  let elemento = document.getElementById("inicio");  
  elemento.classList.remove("e5_96");
  document.getElementById("inicio").innerHTML="";
  } 
  else {
    window.location.href = "../vistas/vista1.html"
  }
}





