let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let terms = document.getElementById("terminos")

function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  if(document.getElementById("alert-danger").classList.contains("show")){
  document.getElementById("alert-danger").classList.remove("show");}
  else {
  document.getElementById("alert-danger").classList.add("show");
  }
}

function blanquearColor(campo){ 
  document.getElementById(campo).style.borderColor="#212529"   
}

function cambiarColor(campo){
  document.getElementById(campo).style.borderColor="red";
}




function validarFormulario(){
    let todocorrecto = true;

  if(nombre.value.length < 2 || nombre.value == null || nombre.value == '') {
    showAlertError();
    cambiarColor("nombre");
    todocorrecto = false;
    addAlert()
    } else {
      blanquearColor("nombre");
    }
   
  if(apellido.value.length < 2 || apellido.value == null || apellido.value == '') {
    showAlertError();
    cambiarColor("apellido");
    todocorrecto = false;
    
  } else {
    blanquearColor("apellido");
  }
  if(email.value == null || email.value == "" || !email.value.includes("@")) {
    console.log(email.value)
    showAlertError();
    cambiarColor("email");
    todocorrecto = false;
  } else {
    blanquearColor("email");
  }

  if(password1.value == null || password1.value == "" || password1.value < 6 || password1.value != password2.value) {
    showAlertError();
    cambiarColor("password1");
    todocorrecto = false;
  } else {
    blanquearColor("password1");
  }

  if(password2.value == null || password2.value == "" || password2.value < 6 || password1.value != password2.value) {
    showAlertError();
    cambiarColor("password2");
    todocorrecto = false;
  } else {
    blanquearColor("password2");
  }

  if (!terms.checked) {
    showAlertError();
    cambiarColor("terminos");
    todocorrecto = false;
  } else {
    blanquearColor("terminos");
  }
  
  if(todocorrecto == true){
    document.getElementById("alert-danger").classList.remove("show");
    showAlertSuccess();
  }
}

document.getElementById("regBtn").addEventListener('click', validarFormulario); 
 