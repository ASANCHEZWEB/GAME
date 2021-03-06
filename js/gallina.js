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
  modifyMarginL(map) {
    if (map.ArrowLeft == true) {
      chickenContainer.childNodes[0].style.marginLeft = `${(this.marginLeft -= 10)}px`;
    }
    if (map.ArrowRight == true) {
      chickenContainer.childNodes[0].style.marginLeft = `${(this.marginLeft += 10)}px`;
    }
  }
}
