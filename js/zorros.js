let arrayZorros = [];
let zorrosContainer = document.querySelector(".zorros-container");
class Zorro {
  constructor(width, height, marginLeft, marginTop, x, y) {
    this.width = width;
    this.height = height;
    this.marginLeft = marginLeft;
    this.marginTop = marginTop;
    this.x = x;
    this.y = y;
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
    if (this.marginLeft <= 0) {
      this.x = "right";
    }
    if (this.marginLeft >= 770 - this.width) {
      this.x = "left";
    }
    if (this.x === "left") {
      this.marginLeft--;
    }
    if (this.x === "right") {
      this.marginLeft++;
    }
    element.modifyDOM(element, index);
  }
  modifyMarginT(element, index) {
    if (this.marginTop <= 0) {
      this.y = "down";
    }
    if (this.marginTop >= 346 - this.width) {
      this.y = "top";
    }
    if (this.y === "top") {
      this.marginTop -= 1.9;
    }
    if (this.y === "down") {
      this.marginTop += 1.9;
    }
    element.modifyDOM(element, index);
  }
  modifyDOM(element, index) {
    let zorroStyles = zorrosContainer.childNodes[index];
    zorroStyles.style.marginLeft = `${this.marginLeft}px`;
    zorroStyles.style.marginTop = `${this.marginTop}px`;
  }
}
//FUNCIÓN CREA ZORRO
let newZorro = function() {
  let widthCases = [80, 110, 130];
  let randomWidth = widthCases[Math.floor(Math.random() * widthCases.length)];
  let randomMarginL = Math.floor(Math.random() * (770 - randomWidth - 0 + 1) + 0);
  let directions = ["right", "left"];
  let randomDirection = directions[Math.floor(Math.random() * 2)];
  arrayZorros.push(new Zorro(randomWidth,randomWidth,randomMarginL,0,randomDirection,"down"));
  arrayZorros[arrayZorros.length - 1].addToDOM();
};
//FUNCIÓN MODIFICAR ZORROS
let speedZorros = 10;
setInterval(function () {
    arrayZorros.forEach(function (element, index) {
        element.modifyMarginL(element, index);
        element.modifyMarginT(element, index);
    });
}, speedZorros);
