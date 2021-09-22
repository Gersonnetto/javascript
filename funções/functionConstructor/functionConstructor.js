/*
function constructor
    * expressao new
    * criar um novo objeto
    * this keyword - moldar o objeto

*/

function Person (name) {
    this.name = name
    this.walk = function() {
        return this.name + ' esta andando'
    }
}
const gerson = new Person('gerson')
const farias = new Person('farias')
console.log(gerson.walk())
console.log(farias.walk())
