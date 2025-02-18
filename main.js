const lamp = document.getElementById("lamp")
const off_button = document.getElementById("off_btn")
const on_button = document.getElementById("on_btn")
console.log(off_button, on_button, lamp);

on_button.addEventListener("click", turnOn);
off_button.addEventListener("click", turnOff);

function turnOn() {
    lamp.classList.add("on")
    lamp.classList.remove("off")

    if (lamp.classList.contains("on")) {
        off_button.style.backgroundColor = 'rgba(255, 0, 0, 0.25)'
        on_button.style.backgroundColor = 'lime'
        lamp.src = './img/yellow_lamp.png'
        on_button.innerText = ""
        off_button.innerText = "Turn OFF"
    }
}

function turnOff() {
    lamp.classList.remove("on")
    lamp.classList.add("off")

    if (lamp.classList.contains("off")) {
        off_button.style.backgroundColor = 'red'
        on_button.style.backgroundColor = 'rgba(0, 255, 0, 0.25)'
        lamp.src = './img/white_lamp.png'
        off_button.innerText = ""
        on_button.innerText = "Turn ON"
    }
}