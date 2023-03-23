
function Validar(){
    
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  var validEmail =  /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;
  var validPassword = /^[A-Z][A-Za-z0-9]{5}$/;
  if (validEmail.test(email)) {
    if (validPassword.test(password)) {
        window.location.href = "./Src/vistas/vista4.html"
    } else {
      alert("La contraseña debe iniciar con mayuscula, ser de 6 digitos y contener un número como mínimo.");
    }
  } else {
    alert("Correo electronico no valido, intentelo de nuevo.");
  }

  return false;
}