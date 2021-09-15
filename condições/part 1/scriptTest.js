function calcular() {
    var txtvel = window.document.getElementById('txtvel')
    var res = window.document.getElementById('res')
    var vel = Number(txtvel.value)
    
    res.innerHTML = (`Sua velocidade foi de <strong>${vel}</strong> Km/h `)
    if (vel > 60) {
        res.innerHTML += (`<p><strong>execesso de velocidade, sujeito a multa</strong></p>`)
    }
    else {
        res.innerHTML += (`<p><strong>velocidade permitida</p>`)
    }

    res.innerHTML += (`<p><strong>use sempre cinto de segurança</strong></p>`)
    
}