// callback function

function sayMyName(name) {
    console.log('antes da callback')

    name()

    console.log('depois da callback')
}

// aceita todos os tipos de dados

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
