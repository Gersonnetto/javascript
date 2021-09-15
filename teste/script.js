function somar() {
    var txt1 = window.document.getElementById('txt1')
    var txt2 = window.document.getElementById('txt2')
    var res = window.document.getElementById('res')

    var n1 = Number(txt1.value)
    var n2 = Number(txt2.value)

    var s = n1 + n2

    res.innerHTML = `A soma ${n1} + ${n2} = ${s} `
}