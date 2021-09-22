function contador() {
     var ini = document.getElementById('iNumber')
     var fim = document.getElementById('fNumber')
     var pass = document.getElementById('pNumber')  
     var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0 ) {
        window.alert('ERRO - preencher todos os campos')
    } else {
        res.innerHTML = 'contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        
        if (i < f) {
        for (var cont = i; cont <= f; cont += p) {
            res.innerHTML += `${cont}  `
        }
        } else {
            for (var cont = i; cont >= f; cont -= p) {
                res.innerHTML += `${cont}  `
            }
        } 
    }
}