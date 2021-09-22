var agora = new Date()
var hora = 24
console.log(`agora sao ${hora} hrs.`)

if (hora < 6) {
    console.log('boa madrugada')
} else if (hora < 12) {
    console.log('bom dia')
} else if (hora < 19) {
    console.log('boa tarde')
} else if (hora <= 23) {
    console.log('boa noite sua vadia')
} else if (hora >= 24) {
    console.log('ERRO')
}
