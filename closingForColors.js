"use strict";
let c = function counter(counter = 5, counterLocation, delay = 500) {
    let counterOnDom = document.querySelector(counterLocation);
    setInterval(() => {
        counterOnDom.innerHTML = counter.toString();
        counter++;
    }, delay);
};
function howMany(amount) {
    for (let i = 0; i < amount; i++) {
        makeEm(i);
    }
    function makeEm(value) {
        let cloneTheTemplate = $('#templateDisplay').clone();
        let newCopy = cloneTheTemplate.html(`i am # ${value}`);
        newCopy.addClass(`classy${value}`);
        $('#container').append(newCopy);
        new c(value, `.classy${value}`, Math.random() * 500);
    }
}
howMany(500);
function watcher() {
    return Array.from($('#container').children());
}
function colors() {
    let colorsToPickFrom = ['green', 'blue', 'green', 'red', 'yellow', 'purple'];
    return colorsToPickFrom[Math.floor(Math.random() * colorsToPickFrom.length)];
}
//for logging purposes
function callColors() {
    for (let i = 0; i < 10; i++) {
        colors();
    }
}
watcher().forEach(function (element, index) {
    $(`.classy${index}`).css('color', colors);
});
// function grabOne() {
//   let length = $('#container').children().length;
//   let arrayOf = Array.from( $('#container').children());
//   let randomOne = arrayOf[Math.floor(Math.random() * length)]
//   console.log(randomOne);
//   return randomOne.className;
// }
// function andPlayWithIt () {
//   let myOne = $(`.classy${grabOne()}`); 
//   console.log(myOne);
//   for (let i = 0; i < 300; i ++){
//       myOne.css('font-size', i)
//   }
// }
