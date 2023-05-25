document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("FORMULARIO").addEventListener('submit', validarFormulario);
})

function validarFormulario(evento) {
    evento.preventDefault()
    var usuario = document.getElementById ('nombre').value;
    if(usuario.length == 0)
    {
        alert("No escribiste el nombre");
        return;
    }
    var apellido = document.getElementById ('apellido').value;
    if(apellido.length == 0)
    {
        alert("No escribiste el apellido");
        return;
    }
    var correo = document.getElementById ('correo').value;
    if(correo.length == 0)
    {
        alert("No escribiste el correo");
        return;
    }
    var radios = document.getElementsByName("GRAMMYS");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
                if (radios[i].checked) formValid = true;
                i++;    
    } 
    if (!formValid)
    {    
        alert("Tienes que seleccionar una opcion, en la pregunta 1");
            return formValid;
    } 
    var radios = document.getElementsByName("POSICION");
     var formValid = false;

     var i = 0;
     while (!formValid && i < radios.length) {
                 if (radios[i].checked) formValid = true;
                 i++;    
     } 
     if (!formValid)
    {    
         alert("Tienes que seleccionar una opcion, en la pregunta 2");
            return formValid;
     } 
     if(!document.querySelector("input[name='TRAUMAS']:checked"))
    {
        alert("Tienes que seleccionar una opcion, en la pregunta 3");
        return;
    }
    var radios = document.getElementsByName("SAD");
     var formValid = false;

     var i = 0;
     while (!formValid && i < radios.length) {
                 if (radios[i].checked) formValid = true;
                 i++;    
     } 
     if (!formValid)
    {    
         alert("Tienes que seleccionar una opcion, en la pregunta 4");
            return formValid;
     } 
     var es = document.getElementById("nacimiento").value;
    if(es.length == 0) {
        alert("Debes introducir su lugar de nacimiento");
        return;
    }
    var radios = document.getElementsByName("OPINION");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
                if (radios[i].checked) formValid = true;
                i++;    
    } 
    if (!formValid)
   {    
        alert("Tienes que seleccionar una opcion, en la pregunta 6");
           return formValid;
}
}