/* 
    Prototype

    * prototype-basede language
    * prototype chain
    * __proto___
    
*/


/* 

    Type conversion (typecasting) vs Type coersion

    * Type conversion - vc muda manualmente
    * Type coersion - o JS muda automaticamente

    * Alteração de um tipo de dado para outro tipo


console.log(Number('9') + 5)

*/





// Manipulação de Strings e Numeros

// Transformar String em numero e numeto em string
/*
let string = '123'
console.log(Number(string))

let number = 321 
console.log(String(number))
*/







// Manipulação de Strings e Numeros

// Contar quantos caracteres tem uma palavra e quantos digitos tem um numero
/*
let word = 'sua mae é minha aquela safada'
console.log(word.length)

let number = 1231494894
console.log(String(number).length)
*/






/*
// tranformar um numero quebrado com 2 casas decimais e trocar por virgula
let number = 456123156.256482
console.log(number.toFixed(2).replace('.', ','))
*/



// Transformar letras minusculas em maiusculas. Faça o contrario disso tbm
/*
let word = 'sua mae é minha aquela safada'
console.log(word.toUpperCase())

let word2 = 'SUA MAE É MINHA AQUELA SAFADA'
console.log(word2.toLowerCase())
*/





// Manipulando Strings e Arrays
/*
let frase = 'sua mae e minha aquela safada'
let array = frase.split(' ')
let fraseander = array.join('_')

console.log(fraseander.toUpperCase())
*/






// verificar se o texto contem a palavra vadia
/*
let frase = 'sua mae e minha aquela safada'
console.log(frase.includes('safada'))
*/


// criar array com construtor
/*
let array = new Array ('a', 'b', 'c')
console.log(array)
*/


/*
// contar elementos do array
console.log(['a','b', 'c'].length)
*/



// manipulando array 

// transformando uma cadeia de caracteres em elementos de um array
/*
let word = 'manipulçao'
console.log(Array.from(word))
*/




// manipulando array  

let techs = ['html', 'css', 'js']

//adicionar um item no fim
techs.push('nodejs')

//adicionar no começo
techs.unshift('sql')

// remover do fim
//techs.pop()

// remover do começo
//techs.shift()

// pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))

// remover 1 ou mais itens em qualquer posicao do array
//techs.splice(1, 2)

// encontrar a posicao de um elemento no array
let index = techs.indexOf('html')
techs.splice(index, 1)



console.log(techs)

