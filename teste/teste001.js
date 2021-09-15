var idade = 6

if (idade < 16) {
    console.log('nao vota')
    /*
     pq nao usei o && - pois um dos valores n foi ativado, para usar o && os dois valores deviam ser true e ativados ao msm tempo
     */
} else if (idade <=17 || idade >= 65) {
    console.log('voto opcional')
} else {
    console.log('voto obrigatorio')
}