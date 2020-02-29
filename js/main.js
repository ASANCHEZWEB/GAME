//ANIMACIÓN DE NUBES
//creo un setInterval que moverá las nubes cada x milisegundos
setInterval(function() {
  let nubesContainer = document.querySelector(".nubes-container");
  let marginLeft = Number(window.getComputedStyle(nubesContainer).getPropertyValue("margin-left").split("px")[0]);
  if (marginLeft == -770) {
      nubesContainer.style.marginLeft = "0px";
  } else {
      nubesContainer.style.marginLeft = `${marginLeft - 1}px`;
  }
  }, 30);
  //GENERAR 4 ZORROS AL INICIO DEL JUEGO
  let zorrosCount = 1;
  const intervalId = setInterval(function () {
      newZorro();
      zorrosCount++;
      if (zorrosCount > 4) {
          clearInterval(intervalId);
      }
  }, 2000);
//PULSACIONES DEL TECLADO
document.addEventListener("keydown", myFunction);

function myFunction(e) {
    console.log(e.code);
}