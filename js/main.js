//ANIMACIÓN DE NUBES
//creo un setInterval que moverá las nubes cada x milisegundos
setInterval(function() {
  let nubesContainer = document.querySelector(".nubes-container");
  let marginLeft = Number(window.getComputedStyle(nubesContainer).getPropertyValue("margin-left").split("px")[0]);
  if (marginLeft == -960) {
    nubesContainer.style.marginLeft = "0px";
  } else {
    nubesContainer.style.marginLeft = `${marginLeft - 1}px`;
  }
}, 30);

