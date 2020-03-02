//ANIMACIÓN DE NUBES
//creo un setInterval que moverá las nubes cada x milisegundos
setInterval(function () {
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
//GENERA LA CARRETA DE LA GALLINA
let newGallina = new Gallina(86, 86, 342, 10);
newGallina.createGallina();
//PULSACIONES DEL TECLADO
let keyEvents = {};


document.addEventListener("keydown", function (e) {
   setInterval(() => {
       if (e.keyCode == 32) {
            keyEvents.space = true;
        }
        if (e.keyCode == 37) {
            keyEvents.left = true;
        }
        if (e.keyCode == 39) {
            keyEvents.right = true;
        }
        newGallina.modifyMarginL(keyEvents);
   }, 100);
});