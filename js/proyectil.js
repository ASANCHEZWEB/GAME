let proyectilArr = [];
let eggsContainer = document.querySelector(".egg-container");
class Proyectil {
  constructor(marginL, marginT, speed) {
    this.marginL = marginL;
    this.marginT = marginT;
    this.speed = speed;
  }
  createEgg() {
    let newEgg = document.createElement("div");
    newEgg.innerHTML = '<img src="./img/chicken-egg-1.jpg">';
    newEgg.style.marginLeft = `${this.marginL}px`;
    newEgg.style.marginTop = `${this.marginT}px`;
    eggsContainer.appendChild(newEgg);
  }
  moveOrDestroy(element, index) {
    if (this.marginT < -91) {
      array.splice(index, 1);
      eggsContainer.removeChild(eggsContainer.childNodes[index]);
    } else {
      eggsContainer.childNodes[index].style.marginTop = `${this.marginL--}px`;
    }
  }
}
let newEgg = function() {
  proyectilArr.push(new Proyectil(newGallina.marginLeft + 28, 270, 20));
  proyectilArr[proyectilArr.length - 1].createEgg();
};
setInterval(() => {
  proyectilArr.forEach(function(element, index) {
    proyectilArr[index].moveOrDestroy(element, index);
  });
}, 100);
