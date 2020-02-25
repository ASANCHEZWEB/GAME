let arrayZorros = [];
let zorrosContainer = document.querySelector(".zorros-container");
class Zorro {
  constructor(width, height, marginLeft, marginTop) {
    this.width = width;
    this.height = height;
    this.marginLeft = marginLeft;
    this.marginTop = marginTop;
  }
  addToDOM() {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<img src="./img/roca-redonda.png" alt=""></img>`;
    newDiv.style.width = `${this.width}px`;
    newDiv.style.height = `${this.height}px`;
    newDiv.style.marginLeft = `${this.marginLeft}px`;
    newDiv.style.marginTop = `${this.marginTop}px`;
    zorrosContainer.appendChild(newDiv);
  }
}
//PRIMERO CREAMOS UN ZORRO
let newZorro = function() {
  let widthCases = [100, 150, 200];
  let randomWidth = widthCases[Math.floor(Math.random() * widthCases.length)];
  let randomMarginL = Math.floor(Math.random() * (960 - 0 + 1) + 0);
  arrayZorros.push(new Zorro(randomWidth, 200, randomMarginL, 0));
  arrayZorros[arrayZorros.length - 1].addToDOM();
};
