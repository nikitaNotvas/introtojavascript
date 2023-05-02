function start() {
("Why would you clicled me im start buttton")

}
function stop() {
    alert("Why would you clicled me im stop button")
    }
function reset() { 
   alert("Why would you clicled me im reset button!")
    }


let mil = 0
let sec = 0
let min = 0



let digits = document.getElementById("digits")

let interval;

let startButton = document.getElementById('sbut')

let lapList = document.getElementById('loopi')

function start () {

    
startButton.disabled = true

interval = setInterval(function (){
    mil = mil+10

    if (mil >= 1000) {
        sec = sec + 1
        mil = 0
     }
     
    if (sec >= 60){
        min = min + 1
        sec = 0
    }
    console.log(mil)
    console.log(sec)
    console.log(min)
    digits.innerHTML = String(min).padStart(2, "0") + ":" + String(sec).padStart(2, "0") + ":" + mil/10



}, 10);


}
function stop () {
    startButton.disabled = false

    clearInterval(interval)
}
function reset () {
    startButton.disabled = false

stop()
digits.innerHTML = "00:00:00"
min = 0
sec = 0
mil = 0
}

function loop () { 
let newListItem = document.createElement('li');
newListItem.textContent = "digits";

loopi.appendChild(newListItem);

}
