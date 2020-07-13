'use strict'

var boton = document.querySelector(".compartir");
var facebook = document.querySelector("#facebook");
var twitter = document.querySelector("#twitter");
var pinterest = document.querySelector("#pinterest");

boton.addEventListener("click", function(){
    var ventana = document.querySelector(".shared");
    var w = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
    if(ventana.style.display == "none"){
        ventana.style.display = "flex";
        if(w="730"){
            var ven= document.querySelector(".contacto");
            ven.style.display= "none";
        }
    }else{
        ventana.style.display = "none";
    }
})

facebook.addEventListener("click", function(){
    window.open("https://www.facebook.com/Davad2000/");
})
twitter.addEventListener("click", function(){
    window.open("https://twitter.com/DavidAtenciaD");
})
pinterest.addEventListener("click", function(){
    window.open("https://www.instagram.com/davatdm/");
})

