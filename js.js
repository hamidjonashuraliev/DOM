"use strict";

// const box = document.querySelector("#box");
// const buttons = document.querySelectorAll("button");
// const circles = document.querySelectorAll(".circle");
// const circle = document.querySelector(".circle");
// const hearts = document.querySelectorAll(".heart");
// const circleWrapper = document.querySelector(".circle__wrapper");

// box.style.cssText = "background-color: red; width: 100px; height: 100px";

// buttons[0].style.width = "100px";
// circles[1].style.backgroundColor = "yellow";
// circle.style.backgroundColor = "yellow";

// // for (let i = 0; i < hearts.length; i++) {
// //   hearts[i].style.backgroundColor = 'green'
// // }

// // hearts.forEach((item) => {
// //   item.style.backgroundColor = 'gray'
// // })

// const btn = document.createElement("button");
// // const text = document.createTextNode('I am text')

// document.body.append(btn);

// const myCircle = document.createElement("div");

// myCircle.classList.add("circle");

// // circleWrapper.append(myCircle)
// // circleWrapper.before(myCircle)
// // circleWrapper.after(myCircle)
// // circles[0].after(myCircle)
// // circles[1].remove()
// // circles[1].replaceWith(myCircle)
// // circleWrapper.append(myCircle)
// // myCircle.innerHTML = '<pre>E</pre>'
// // myCircle.textContent = 'E'
// // circleWrapper.insertAdjacentHTML('beforeend', '<pre>E</pre>')


const box = document.querySelector('#box')
const buttons = document.querySelectorAll('button')
const circles = document.querySelectorAll('.circle')
const hearts = document.querySelectorAll('.heart')

box.style.cssText = 'background-color: red; width: 100px; height: 100px'

buttons[0].style.width = '100px'
circles[2].style.backgroundColor = 'yellow'

// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue'
// }

hearts.forEach((item) => {
    item.style.backgroundColor = 'yellow'
})