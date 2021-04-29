console.log("[==Hey, what's hangin==]")

const click = document.getElementById("wood");
const woodCount = document.getElementById("woodcount");
const testBox = document.getElementById("box1");
const autoDisplay = document.getElementById("autowood");


const nails = document.getElementById("nails");
const screws = document.getElementById("screw");
const axe = document.getElementById("axe");
const saw = document.getElementById("saw");
const drill = document.getElementById("drill");
const nailGun = document.getElementById("nailGun");
const chainSaw = document.getElementById("chainSaw");
const lumberJack = document.getElementById("lumberJack");
const woodChiper = document.getElementById("woodChiper");
const woodWorking = document.getElementById("woodWorking");
const beaver = document.getElementById("beaver");


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
    if (woodDisplay >= 10000) {
        statiq = " Wood";
    }
    woodCount.innerHTML = woodDisplay.toFixed(toFix) + statiq;
}
