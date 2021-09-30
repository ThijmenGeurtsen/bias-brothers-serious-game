// var (globally you don't want to use this anymore) , let, const
// let you can change const not
// Strings, numbers, boolean, null, undefined
// const name = 'Amanda'
// const age = 29;
// const rating = 4.5;
// const isCool = true;
// const x = null; //you can't change
// const y = undefined;
// let z; //is undefined but you can change it

// Concatenation
// console.log('My name is ' + name + ' and I am ' + age); // old way
// Template String
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

// const s = 'Hello World';
// console.log(s.substring(0,5).toUpperCase());
// Split
// const k = 'technology, computers, it, code';
//console.log(s.split(', '))

// Arrays
// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);
// new way
// const fruits = ['appels', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// push method instead to add value to the end
// fruits.push('mangos');
// push method to add value to the beginning
// fruits.unshift('strawberries');
// delete last item of array
// fruits.pop()
// check in array
// console.log(Array.isArray('hello'));
// console.log(fruits.indexOf('oranges'));
// console.log(fruits);

// Object literals
// const person = {
//     firstName: 'Amanda',
//     lastName: 'Schoonhoven',
//     age: 29,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: 'straat 45-C',
//         city: 'Amsterdam',
//         state: 'MA',
//    }}
// console.log(person.hobbies[1]);
// pulling out / destructure
// const { firstName, lastName, address: {city}} = person;
// person.email = 'ahjl92@gmail.com';
// console.log(person);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: true
    },
]
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

/*
// for loop
for (let i = 0; i < 10; i++){
    console.log(`For Loop Number: ${i}`);
}
 */
/*
// while loop
let i=0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++
}
 */
/*
for (let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for (let todo of todos){
    console.log(todo)
}
*/
/*
// forEach, map, filter
 todos.forEach(function (todo){
    console.log(todo.text);})
 const todoCompleted = todos.map(function (todo){
    return todo.isCompleted == true;
 }).map(function (todo) {
     return todo.text; //functional programming
 });
console.log(todoCompleted);
 */
/*
const x = 6;
const y = 10;

if (x === 10) {
    console.log('x is 10');
}
else if (x > 5 || y >10 ) { //   || = OR && = AND
    console.log('x is greater than 5 or y is more than 10');
}
else {
    console.log('x is less than 10')
}
 */
/*
const x = 11;
const color = x > 10 ? 'red' : 'blue';

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'bue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}
 */
// Functions
/*
function addNums(num1 = 1, num2 = 1){
     return num1 + num2;
}
console.log(addNums(5,5));
 */
/*
const addNums = (num1 = 1, num2 = 1) => num1 + num2
console.log(addNums(5,5));

const addNumsShort = num1 => num1 + 5;
console.log(addNumsShort(5));
 */
/*
// Object oriented
// Constructor function
function Person(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);

}
// Instantiate object
const person1 = new Person('Amanda', 'Schoonhoven', '10-01-1992');
const person2 = new Person('Rob', 'Schoonhoven', '23-06-1959');
Person.prototype.getBirthYear = function () {
    return this.birthday.getFullYear();
}
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
console.log(person2);
console.log(person1.getFullName());
 */
/*
// Class
class Person {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(birthday);
    }

    getBirthYear() {
        return this.birthday.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName};`
    }
}
// Instantiate object
const person3 = new Person('Amanda', 'Schoonhoven', '10-01-1992');
const person4 = new Person('Rob', 'Schoonhoven', '23-06-1959');

console.log(person3.getFullName());
console.log(person4.getBirthYear());
*/
