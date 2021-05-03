console.log("[==Hey, what's hangin==]")


const click = document.getElementById("wood");
const woodCount = document.getElementById("woodcount");
const testBox = document.getElementById("box1");
const autoDisplay = document.getElementById("autowood");
const title = document.getElementById("title");


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


const cost1 = document.getElementById("cost1");
const cost2 = document.getElementById("cost2");
const cost3 = document.getElementById("cost3");
const cost4 = document.getElementById("cost4");
const cost5 = document.getElementById("cost5");
const cost6 = document.getElementById("cost6");
const cost7 = document.getElementById("cost7");
const cost8 = document.getElementById("cost8");
const cost9 = document.getElementById("cost9");
const cost10 = document.getElementById("cost10");
const cost11 = document.getElementById("cost11");


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

var x1 = 1;
var x2 = 1;

setInterval(autoAdd, 10);
setInterval(titleChg, 5000);


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

click.onclick = (e) => {
    woodAdd();
    mouseAnimation(e);
}

// click.addEventListener("click", () => {
//     woddAdd();
//     mouseAnimation()
// });

// function mouseAnimation(event) {
//     var amiton = document.createElement("DIV");
//     amiton.innerHTML = '+' + x2;
//     amiton.setAttribute("class", "amiton");
//     document.body.appendChild(amiton);

//     amiton.style.left = event.clientX + 'px';
//     amiton.style.top = event.clientY - 10 + 'px';

//     amiton.style.transition = "all 0.3s linear 0s";

//     amiton.style.left = amiton.offsetLeft - 20 + 'px';
//     amiton.style.top = amiton.offsetTop - 20 + 'px';

//     amiton.style.color = whitesmoke;
//     amiton.style.width = "10px";
//     amiton.style.height = "10px";
//     amiton.style.fontSize = "21px";
//     amiton.style.opacity = 0;
//     amiton.style.zindex = 100;

//     amiton.remove();
// }





function addToAutoIncrement1() {
    if (woodDisplay >= add1) {
        woodDisplay -= add1;
        add1 *= 1.15;
        cost1.innerHTML = add1.toFixed(2);
        autoWoodincrement += 0.001 * x1;
        autowoodDisplay += 0.1 * x1;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement2() {
    if (woodDisplay >= add2) {
        woodDisplay -= add2;
        add2 *= 1.15;
        cost2.innerHTML = add2.toFixed(2);
        autoWoodincrement += 0.01 * x1;
        autowoodDisplay += 1.0 * x1;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement3() {
    if (woodDisplay >= add3) {
        woodDisplay -= add3;
        add3 *= 1.15;
        cost3.innerHTML = add3.toFixed(2);
        autoWoodincrement += 0.08 * x1;
        autowoodDisplay += 8.0 * x1;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement4() {
    if (woodDisplay >= add4) {
        woodDisplay -= add4;
        add4 *= 1.15;
        cost4.innerHTML = add4.toFixed(2);
        autoWoodincrement += 0.47 * x1;
        autowoodDisplay += 47.0 * x1;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement5() {
    if (woodDisplay >= add5) {
        woodDisplay -= add5;
        add5 *= 1.15;
        cost5.innerHTML = add5.toFixed(2);
        autoWoodincrement += 2.6 * x1;
        autowoodDisplay += 260.0 * x1;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement6() {
    if (woodDisplay >= add6) {
        woodDisplay -= add6;
        add6 *= 1.15;
        cost6.innerHTML = add6.toFixed(2);
        autoWoodincrement += 14.0 * x1;
        autowoodDisplay += 1400.0 * x1;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement7() {
    if (woodDisplay >= add7) {
        woodDisplay -= add7;
        add7 *= 1.15;
        cost7.innerHTML = add7.toFixed(2);
        autoWoodincrement += 78.0 * x1;
        autowoodDisplay += 7800.0 * x1;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement8() {
    if (woodDisplay >= add8) {
        woodDisplay -= add8;
        add8 *= 1.15;
        cost8.innerHTML = add8.toFixed(2);
        autoWoodincrement += 440.0 * x1;
        autowoodDisplay += 44000.0 * x1;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement9() {
    if (woodDisplay >= add9) {
        woodDisplay -= add9;
        add9 *= 1.15;
        cost9.innerHTML = add9.toFixed(2);
        autoWoodincrement += 2600.0 * x1;
        autowoodDisplay += 260000.0 * x1;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement10() {
    if (woodDisplay >= add10) {
        woodDisplay -= add10;
        add10 *= 1.15;
        cost10.innerHTML = add10.toFixed(2);
        autoWoodincrement += 16000.0;
        autowoodDisplay += 1600000.0;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}
function addToAutoIncrement11() {
    if (woodDisplay >= add11) {
        woodDisplay -= add11;
        add11 *= 1.15;
        cost11.innerHTML = add11.toFixed(2);
        autoWoodincrement += 100000.0;
        autowoodDisplay += 10000000.0;
        autoDisplay.innerHTML = "Wood per second: " + autowoodDisplay.toFixed(1);
    }
}

function titleChg() {
    title.innerHTML = woodDisplay.toFixed(0) + ' | Wood Clicker'
}


function AddAdd() {
    woodCount.innerHTML = woodDisplay.toFixed(toFix) + statiq;
    if (woodDisplay >= add1) {
        nails.style = 'filter: brightness(97%);';
    } else {
        nails.style = 'filter: brightness(50%);'
    } 
    if (woodDisplay >= add2) {
        screws.style = 'filter: brightness(97%);';
    } else {
        screws.style = 'filter: brightness(50%);'
    } 
    if (woodDisplay >= add3) {
        axe.style = 'filter: brightness(97%);';
    } else {
        axe.style = 'filter: brightness(50%);'
    } 
    if (woodDisplay >= add4) {
        saw.style = 'filter: brightness(97%);';
    } else {
        saw.style = 'filter: brightness(50%);'
    } 
    if (woodDisplay >= add5) {
        drill.style = 'filter: brightness(97%);';
    } else {
        drill.style = 'filter: brightness(50%);'
    } 
    if (woodDisplay >= add6) {
        nailGun.style = 'filter: brightness(97%);';
    } else {
        nailGun.style = 'filter: brightness(50%);'
    } 
    if (woodDisplay >= add7) {
        chainSaw.style = 'filter: brightness(97%);';
    } else {
        chainSaw.style = 'filter: brightness(50%);'
    } 
    if (woodDisplay >= add8) {
        lumberJack.style = 'filter: brightness(97%);';
    } else {
        lumberJack.style = 'filter: brightness(50%);'
    } 
    if (woodDisplay >= add9) {
        woodChiper.style = 'filter: brightness(97%);';
    } else {
        woodWorking.style = 'filter: brightness(50%);'
    } 
    if (woodDisplay >= add10) {
        woodWorking.style = 'filter: brightness(97%);';
    } else {
        woodWorking.style = 'filter: brightness(50%);'
    } 
    if (woodWorking >= add11) {
        beaver.style = 'filter: brightness(97%);';
    } else {
        beaver.style = 'filter: brightness(50%);'
    } 
}

function autoAdd() {
    woodDisplay += autoWoodincrement;
    if (woodDisplay >= 10000) {
        statiq = " Wood";
    }
    AddAdd();
}
function woodAdd() {
    woodDisplay += woodIncrement;
    AddAdd();
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
