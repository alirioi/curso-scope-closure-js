// Hoisting en una variable
//var nameOfDog; // undefined

console.log(nameOfDog);
var nameOfDog = 'Elmo';
console.log(nameOfDog);

// Hoisting en funciones

// var elmo; // undefined
nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';