//ANIMACIÓN DE NUBES
//creo un setInterval que moverá las nubes cada x milisegundos
setInterval(function() {
  //Ahora busco en el DOM los hijos del contenedor de nubes (.nubes-container) para obtener las nubes en un array.
  let nubesChilds = [...document.querySelectorAll(".nubes-container>img")];
  //ahora recorremos cada imagen y le vamos restando la posicion left para que se muevan.
  nubesChilds.forEach(function(element) {
    //obtenemos la propiedad css ("left"), eliminamos el "px" y lo convertimos en numero
    let elementLeftCss = Number(window.getComputedStyle(element).getPropertyValue("left").split("px")[0]);
    //ahora cogemos el valor y le sumamos pixeles , las nubes ya se mueven .
    element.style.left = `${elementLeftCss - 1}px`;
  });
}, 30);

