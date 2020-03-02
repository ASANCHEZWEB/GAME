let chickenContainer = document.querySelector(".chicken-player");
class Gallina {
  constructor(width, height, marginL, speed) {
    this.width = width;
    this.height = height;
    this.marginLeft = marginL;
    this.speed = speed;
  }
  createGallina() {
    let carreta = document.createElement("img");
    carreta.setAttribute("src", "./img/carreta.png");
    carreta.style.width = `${this.width}px`;
    carreta.style.height = `${this.height}px`;
    carreta.style.marginLeft = `${this.marginLeft}px`;
    chickenContainer.appendChild(carreta);
  }
  modifyMarginL(keyEvents) {
    if (keyEvents.left && this.marginLeft > 0) {

      chickenContainer.childNodes[0].style.marginLeft = `${this
        .marginLeft--}px`;
        keyEvents.left = false;
    }
    if (keyEvents.right && this.marginLeft < 684) {
      
      chickenContainer.childNodes[0].style.marginLeft = `${this
        .marginLeft++}px`;
        keyEvents.right = false;
    }
  }
}
