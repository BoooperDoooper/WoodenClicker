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
var toFix = 0;

var add1 = 15;
var add2 = 100;
var add3 = 1100;
var add4 = 12000;
var add5 = 130000;
var add6 = 1400000;
var add7 = 20000000;
var add8 = 330000000;
var add9 = 5100000000;
var add10 = 75000000000;
var add11 = 1000000000000;


/*
var posX = e.clientX
var posY = e.clientY
*/      

nails.addEventListener("click", addToAutoIncrement1);
screws.addEventListener("click", addToAutoIncrement2);
axe.addEventListener("click", addToAutoIncrement3);
saw.addEventListener("click", addToAutoIncrement4);
drill.addEventListener("click", addToAutoIncrement5);
nailGun.addEventListener("click", addToAutoIncrement6);
chainSaw.addEventListener("click", addToAutoIncrement7);
lumberJack.addEventListener("click", addToAutoIncrement8);
woodChiper.addEventListener("click", addToAutoIncrement9);
woodWorking.addEventListener("click", addToAutoIncrement10);
beaver.addEventListener("click", addToAutoIncrement11);
click.addEventListener("click", woodAdd);

function addToAutoIncrement1() {
    if (woodDisplay >= add1) {
        woodDisplay -= add1;
        add1 += 3;
        autoWoodincrement += 0.001;
        autowoodDisplay += 0.1;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement2() {
    if (woodDisplay >= add2) {
        woodDisplay -= add2;
        add2 += 15;
        autoWoodincrement += 0.01;
        autowoodDisplay += 1.0;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement3() {
    if (woodDisplay >= add3) {
        woodDisplay -= add3;
        add3 += 165;
        autoWoodincrement += 0.08;
        autowoodDisplay += 8.0;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement4() {
    if (woodDisplay >= add4) {
        woodDisplay -= add4;
        add4 += 1800;
        autoWoodincrement += 0.47;
        autowoodDisplay += 47.0;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement5() {
    if (woodDisplay >= add5) {
        woodDisplay -= add5;
        add5 += 19500;
        autoWoodincrement += 2.6;
        autowoodDisplay += 260.0;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement6() {
    if (woodDisplay >= add6) {
        woodDisplay -= add6;
        add6 += 210000;
        autoWoodincrement += 14.0;
        autowoodDisplay += 1400.0;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement7() {
    if (woodDisplay >= add7) {
        woodDisplay -= add7;
        add7 += 3000000;
        autoWoodincrement += 78.0;
        autowoodDisplay += 7800.0;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement8() {
    if (woodDisplay >= add8) {
        woodDisplay -= add8;
        add8 += 49500000;
        autoWoodincrement += 440.0;
        autowoodDisplay += 44000.0;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement9() {
    if (woodDisplay >= add9) {
        woodDisplay -= add9;
        add9 += 765000000;
        autoWoodincrement += 2600.0;
        autowoodDisplay += 260000.0;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement10() {
    if (woodDisplay >= add10) {
        woodDisplay -= add10;
        add10 += 11250000000;
        autoWoodincrement += 16000.0;
        autowoodDisplay += 1600000.0;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement11() {
    if (woodDisplay >= add11) {
        woodDisplay -= add11;
        add11 += 150000000000;
        autoWoodincrement += 100000.0;
        autowoodDisplay += 10000000.0;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}



function woodAdd() {
    woodDisplay += woodIncrement;
    woodCount.innerHTML = woodDisplay.toFixed(toFix) + statiq;
    if (woodDisplay >= 10000) {
        statiq = " Wood";
    }
}
setInterval(autoAdd, 10);

function autoAdd() {
    woodDisplay += autoWoodincrement;
    if (woodDisplay >= 10000) {
        statiq = " Wood";
    }
    woodCount.innerHTML = woodDisplay.toFixed(toFix) + statiq;
}

  // if (woodDisplay >= 500){
    //     saw.classList.remove("hiddenSup");
    // }
    // if (woodDisplay >= 1000){
    //     drill.classList.remove("hiddenSup");
    // }
    // if (woodDisplay >= 10000){
    //     nailGun.classList.remove("hiddenSup");
    // }
    // if (woodDisplay >= 100000){
    //     chainSaw.classList.remove("hiddenSup");
    // }
    // if (woodDisplay >= 1000000){
    //     lumberJack.classList.remove("hiddenSup");
    //     woodChiper.classList.remove("hiddenSup");
    //     woodWorking.classList.remove("hiddenSup");
    //     beaver.classList.remove("hiddenSup");
    // }
