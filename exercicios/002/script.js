function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtAno')
    var res = document.getElementById('res')

    if (fano.value == 0 || fano.value > ano) {
        window.alert('ERRO-verifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        
        if (fsex[0].checked) {
          genero = 'Homem'  
          if (idade >=0 && idade < 10) {
              //children
              img.setAttribute('src' , 'children men.png')
          } else if (idade <= 21) {
              //teen
              img.setAttribute('src' , 'teen men.png')
          } else if (idade < 50 ) {
              // men
              img.setAttribute('src' , 'men.png')
          } else {
              //idoso
              img.setAttribute('src' , 'old men.png')
          }


        } else if (fsex[1].checked) {
            genero = 'Mulher'  
            if (idade >=0 && idade < 10) {
                //children
                img.setAttribute('src' , 'children woman.png')
            } else if (idade <= 21) {
                //teen
                img.setAttribute('src' , 'teen woman.png')
            } else if (idade < 50 ) {
                // woman
                img.setAttribute('src' , 'woman.png')
            } else {
                //idoso
                img.setAttribute('src' , 'old woman.png')
            }  
        }

        res.innerHTML = `${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}