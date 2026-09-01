//parte del dom 
const foco=document.getElementById('bombilla');
const encendido=document.getElementById('encendido');
const apagado=document.getElementById('apagado');
const titulo=document.getElementById('titulo');

//estado del foco se coloca por que son 2 prendido y apagado
titulo.addEventListener('mouseenter',()=>{
 

})
 
let estadoFoco=false;

encendido.addEventListener('click', ()=>{
    estadoFoco=true;
    cambiodeEstados(estadoFoco);
})

apagado.addEventListener('click', ()=>{
    estadoFoco=false;
    cambiodeEstados(estadoFoco);
})

function cambiodeEstados(estadoFoco){
    if (estadoFoco) {
        foco.src="/assets/svg/foco encendico.svg";

        
    } else {
        foco.src="/assets/svg/foco apagado.svg";
        
    }

}