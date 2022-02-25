//1. object literal
const student = {
    name: 'Rabby islam',
    job: 'web developer',
}
//2. object constractor 
const person = new Object(null);
console.log(student);

// 3.
const human = Object.create(student);
console.log(human.job);

// 4. class called is syntacticale suger 
class People { //inside the class ectually working sytem is like function 
    constructor(name, age) { //constructor
        this.name = name;
        this.age = age;
    }

}
const peop = new People('Manus', 12)
console.log(peop);

// 5.function 
function Manush(name, age) {
    this.name = name;
    this.age = age;
}
const man = new Manush('Rabby islam', 23);
console.log(man);
// creating object ---------------