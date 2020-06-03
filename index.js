"use strict";
let message;
console.log(message);
console.log(typeof message);
message = "Hello World";
let msg = 'fhdhj';
console.log(msg);
console.log(message);
console.log(typeof message);
console.log(typeof age);

console.log(typeof true);
console.log(typeof false);
console.log(typeof null);


const object = {
  name: "Ovsanna", // свойство
 // ключ: значение
  age: 11,
  hairColor: "brown"
};
console.log(object);

//arrays
const array = ["Ovsanna", "Vlad"]
console.log(array);

// functions

// function expression
const funcExp = function(a, b, c) {
   //тут объявили функцию
    return console.log(a + b + c);
};
funcExp(3, 2, 1); //

//arrow function 
const arrowFunc = (a, b, c,) => console.log(a + b + c);
arrowFunc(3, 6, 10);

//function declaration
const greet = "Я крутая функция без переменной))"
funcDec();
    function funcDec() {
console.log(greet);
}
//example
const breadPrice = 15;
const milkPrice = 30;
const eggsPrice = 20;
const chikenPrice = 120;
const applesPrice = 40;
const orangesPrice = 30;
const bananasPrice = 30;

const totalPrice = function (popd1, prod2, prod3, prod4, prod5) {
    return console.log(popd1 + prod2 + prod3 + prod4 + prod5);
    //                    30 + 20 + 30 + 30 + 15 = 125
};
totalPrice(milkPrice, eggsPrice, orangesPrice, bananasPrice, breadPrice);
totalPrice(breadPrice, milkPrice, eggsPrice, chikenPrice, applesPrice);
totalPrice(breadPrice, milkPrice);
totalPrice(breadPrice);
totalPrice();

// example 2
const sum = function

// alert('Добро пожаловать в JavaScript!');
// confirm("Вы хотите изучить JavaScript?")
// console.log(answer); //Да = True, Нет = False

// const data = +prompt("");
// console.log(data);  29
// console.log(typeof data);


// function alerts() {
//     alert("1");
//     alert("2")
//     alert("3")
// }
// alerts();

// alert("1");
// alert("2")
// alert("3")

// hhhhhhhhhhhhhhhhh
let crlsRoot = document.querySelector(".ant-carousel");
console.log(crlsRoot);

let crlsList = document.querySelector(".ant-carousel-list");
console.log(crlsList);

let crlsElements = document.querySelectorAll(".ant-carousel-element");
console.log(crlsElements);

let crlsElemFirst = document.querySelector(".ant-carousel-element");
console.log(crlsElemFirst);

let leftArrow = document.querySelector("div.ant-carousel-arrow-left");
console.log(leftArrow);

let rightArrow = document.querySelector("div.ant-carousel-arrow-right");
console.log(rightArrow);

let indicatorDots = document.querySelector(".ant-carousel-dots");
console.log(indicatorDots);

// // ffffffffffffffffffffffffffffffff
let elm;
console.log(elm); // undefined

elm = crlsList.lastElementChild; // <li...
console.log(elm);

let buf;
console.log(buf);// undefined


buf = elm.cloneNode(true);
console.log(buf); // <li...

crlsList.insertBefore(buf, crlsList.firstElementChild);
crlsList.removeChild(elm);

console.log(crlsList);

// // dddddddddddddddddddddddddddddd

// 1
leftArrow.addEventListener("click", leftArrowClick);

function leftArrowClick() {
  alert("СРАБОТАЛ КЛИК НА ЛЕВОЙ СТРЕЛКЕ");
}

rightArrow.addEventListener("click", rightArrowClick);

function rightArrowClick() {
  alert("СРАБОТАЛ КЛИК НА ПРАВОЙ СТРЕЛКЕ");
}

// 2
leftArrow.addEventListener("click", () => {
  alert("IT`S a LEFT PART");
});

rightArrow.addEventListener("click", () => {
  alert("IT`S a RIGHT PART");
});