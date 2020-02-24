let arrayZorros = [];

let zorrosContainer = document.querySelector(".zorros-container");

class Zorro {
  constructor(width, marginLeft, marginTop, speed) {
    this.width = width;
    this.marginLeft = marginLeft;
    this.marginTop = marginTop;
    this.speed = speed;
  }

  addToDOM() {
    let newDivZorro = document.createElement("div");
    newDivZorro.innerHTML = `<img src="./img/roca-redonda.png" alt="">`;
    newDivZorro.style.width = `${this.width}px`;
    newDivZorro.style.marginLeft = `${this.marginLeft}px`;
    newDivZorro.style.marginTop = `${this.marginTop}px`;
    zorrosContainer.appendChild(newDivZorro);
  }
}
//FUNCIONES RELACIONADAS CON LOS ZORROS

let nuevoZorro = function(size) {
  let randomMarginLeft = Math.floor(Math.random() * 760);
  let sizeZorro = size;
  arrayZorros.push(new Zorro(sizeZorro, randomMarginLeft, 0, 0));
  arrayZorros[arrayZorros.length - 1].addToDOM();
  return;
};
