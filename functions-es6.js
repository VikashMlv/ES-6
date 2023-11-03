// variables var , let , const

var x = 10;
let y = 20;
const z = 30;

function f1() {
    let y = 100;
    console.log(y);

}
f1();


//Hoisting support by the var keyword in javascript 


console.log(foo); // undefined

var foo = 'bar';

console.log(foo); // "bar"


//Template Literals & String Literals Handling Strings


var classBy = "welcome to the javascript classes by the nisha singla";
var city = "Bangalore";
var classtype = "free Class";

var Description  = `${classBy} ${city} ${classtype}`;
console.log(Description);


//Arrow Functions ES-6


