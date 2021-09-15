
function validacao() {
    var txt1 = window.document.getElementById('txt1')
    var res = window.document.getElementById('res')

    var nac = String(txt1.value)
    var bra = ('brasileiro')
    

    res.innerHTML = (`Sua nacionalidade é <strong>${nac}</strong> `)

    if (nac = bra) {
        res.innerHTML += (`Sua nacionalidade é <strong>brasileiro</strong> `)
    }
}