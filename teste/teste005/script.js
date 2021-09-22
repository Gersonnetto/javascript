function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var tano = document.getElementById('txtAno')
    var res = document.getElementById('res')

    if (tano.value == 0 || tano.value > ano) {
        window.alert ('ERRO ano inscorreto')
    } else {
        var tsex = document.getElementById('sex')
        var idade = ano - (tano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
    
        if (tsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src' , 'children men.png')    
            } else if (idade <= 21) {
                img.setAttribute('src' , 'teen men.png')
            } else if (idade <= 40) {
                img.setAttribute('src' , 'men.png')
            } else {
                img.setAttribute('src' , 'old men.png')
            }
        }

        else if (tsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src' , 'children woman.png')    
            } else if (idade <= 21) {
                img.setAttribute('src' , 'teen woman.png')
            } else if (idade <= 40) {
                img.setAttribute('src' , 'woman.png')
            } else {
                img.setAttribute('src' , 'old woman.png')
            }
        }

        res.innerHTML = `${genero} com ${idade} anos de idade.`
        res.appendChild(img)       
    }
}