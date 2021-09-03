 // 1. declare uma variavel de nome weigth
 //let weigth 

 // 2. que tipo de dado é a variavel acima?
 //console.log(typeof weigth)

 /* 
    3. declare uma variavel e atribua valores para cada uma dos dados:
    * name: string
    * age: number (integer)
    * stars: number (float)
    * isSubscribed: boolean
 */
    //let name = gerosn
    //let age = 24 
    //let stars = 3.5
    //let isSubscribed = true

// 4. atribua as mesmas propriedades da questao 3 para o objet abaixo
    /* let student = {
        name: "gerosn",
        age: 24, 
        stars: 3.5,
        isSubscribed: true
    }

    console.log(student)
    */

/* 4.1 mostre no conosle a seguinte menssgem 
    <name> de idade <age> pesa <weight> pelos valores de cada propriedade do objeto
*/
   
    let student = {
        name: "gerson",
        age: 24, 
        weight: 68.8,
        isSubscribed: true
    }
    
   
    /*
    console.log(`${student.name} de idade anos ${student.age} pesa atualmente ${student.weight} kg.`)*/
    

// 5. declare uma variavel do tipo array, de nome students e atribua a ela nenum valor, ou seja somento o array vazio

    let students = []

// 6. reatribua o valor para a variavel acima, colocando dentro dela o objeto student da questao 4

     students = [
        student
    ]

    console.log(students)

// 7. coloque no console a posção 0 acima

    //console.log(students[0])

// 8. crie um novo student e coloque na posição 1 do array students

    const robson = {
        name: "robson",
        age: 33,
        weight: 82.6,
        isSubscribed: true
    } 

    students[1] = robson
    console.log(students)


