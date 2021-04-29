console.log("[==Hey, what's hangin==]")

const click = document.getElementById("wood");
const woodCount = document.getElementById("woodcount");
const testBox = document.getElementById("box1");
const autoDisplay = document.getElementById("autowood");

var woodDisplay = 0;
var woodIncrement = 1;
var autoWoodincrement = 0;
var autowoodDisplay = 0
var statiq = " Planks";
var toFix = 3;

/*
var posX = e.clientX
var posY = e.clientY
*/

testBox.addEventListener("click", addToAutoIncrement);
click.addEventListener("click", woodAdd);

function addToAutoIncrement() {
    autoWoodincrement += 0.005;
    autowoodDisplay += 0.5;
    autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay;
}

function woodAdd() {
    woodDisplay += woodIncrement;
    if (woodDisplay %1 == 0) {
        toFix = 0;
    } else {
        toFix = 3;
    }
    woodCount.innerHTML = woodDisplay.toFixed(toFix) + statiq;
    if (woodDisplay >= 10000) {
        statiq = " Wood";
    }
}
setInterval(autoAdd, 10);

function autoAdd() {
    woodDisplay += autoWoodincrement;
    if (woodDisplay %1 == 0) {
        toFix = 0;
    } else {
        toFix = 3;
    }
    woodCount.innerHTML = woodDisplay.toFixed(toFix) + statiq;
}
