let arrayZorros = [];
let zorrosContainer = document.querySelector(".zorros-container");
let widthContainer = Number(window.getComputedStyle(zorrosContainer).getPropertyValue("width").split("px")[0]);
let heightContainer = Number(window.getComputedStyle(zorrosContainer).getPropertyValue("width").split("px")[0]);
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
  modifyMarginL(element, index) {
    
console.log(widthcontainer)
  }
}
//FUNCIÓN CREA ZORRO
let newZorro = function() {
  let widthCases = [100, 150, 200];
  let randomWidth = widthCases[Math.floor(Math.random() * widthCases.length)];
  let randomMarginL = Math.floor(
    Math.random() * (960 - randomWidth - 0 + 1) + 0
  );
  arrayZorros.push(new Zorro(randomWidth, 200, randomMarginL, 0));
  arrayZorros[arrayZorros.length - 1].addToDOM();
};
//FUNCIÓN MODIFICAR ZORROS
let speedZorros = 30;
setInterval(function() {
  arrayZorros.forEach(function(element, index) {
    element.modifyMarginL(element, index);
  });
}, speedZorros);
