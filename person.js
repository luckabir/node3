/*const person = {
    name: 'John Doe',
    age: 30
};
module.exports = person;
*/

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`Jsem ${this.name} a je mi ${this.age}.`)
    }
}

module.exports = Person;
