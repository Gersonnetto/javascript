function carregar() {
    var msg = document.getElementById('horas')
    var img = document.getElementById('imagem')
    var data = new Date() 
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} hrs.`

    if ( hora >= 0 && hora < 12 ) {
        img.src = 'morning.jpg'
        document.body.style.background = '#FE9A00'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'after.png'
        document.body.style.background = '#f47032'
    } else {
        img.src = 'night.jpg'
        document.body.style.background = '#152D5D'
    }
}