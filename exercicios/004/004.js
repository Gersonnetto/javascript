const lig = document.getElementById('ligar')
const des = document.getElementById('desligar')
const lamp = document.getElementById('lamp')

function on() {
    if (!isBroken ()){
    lamp.src = './img/lampadaLigada.jpg'
    }
}

lig.addEventListener('click', on)

function off() {
    if (!isBroken ()){
    lamp.src = './img/lampada.jpg'
    }
}

des.addEventListener('click', off)

function broken() {
    lamp.src = './img/lampadaQuebrada.jpg'
    
}

lamp.addEventListener('dblclick', broken)

function isBroken() {
    return lamp.src.indexOf ('lampadaQuebrada') > -1
}
