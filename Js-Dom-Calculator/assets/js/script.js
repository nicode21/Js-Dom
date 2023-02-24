"use strict";


let input1 = document.querySelector('#calculator .calc-body .inputs .input1');
let input2 = document.querySelector('#calculator .calc-body .inputs .input2');
let plus = document.querySelector('#calculator .calc-body .operations .plus');
let minus = document.querySelector('#calculator .calc-body .operations .minus');
let divide = document.querySelector('#calculator .calc-body .operations .divide');
let multiple = document.querySelector('#calculator .calc-body .operations .multiple');
let result = document.querySelector('#calculator .calc-body .result p');



plus.addEventListener("click", function () {
  if (!!!input1.value || !input2.value) {
    alert("Please don't empty the input");
    input1.value = "";
    input2.value = "";
    return;
  } else {
    result.innerText = Number(input1.value) + Number(input2.value);
    input1.value = "";
    input2.value = "";
  }


})

minus.addEventListener("click", function () {
  if (!!!input1.value || !input2.value) {
    alert("Please don't empty the input");
    input1.value = "";
    input2.value = "";
    return;
  } else {
    result.innerText = Number(input1.value) - Number(input2.value);
    input1.value = "";
    input2.value = "";
  }
})

divide.addEventListener("click", function () {
  if (!!!input1.value || !input2.value) {
    alert("Please don't empty the input");
    input1.value = "";
    input2.value = "";
    return;
  } else {
    result.innerText = Number(input1.value) / Number(input2.value);
    input1.value = "";
    input2.value = "";
  }
})

multiple.addEventListener("click", function () {
  if (!!!input1.value || !input2.value) {
    alert("Please don't empty the input");
    input1.value = "";
    input2.value = "";
    return;
  } else {
    result.innerText = Number(input1.value) * Number(input2.value);
    input1.value = "";
    input2.value = "";
  }
})










