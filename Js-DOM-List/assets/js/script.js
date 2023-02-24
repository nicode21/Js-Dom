"use strict";


// {/* <div class="list-group-item d-flex justify-content-between mt-5 item">
//           <p class="m-0 text">Salam</p>
//           <i class="fa-regular fa-circle-xmark d-flex align-items-center"></i>
//         </div> */}


let input = document.querySelector("#list-maker .for-center input");
let btn = document.querySelector("#list-maker .for-center button");
let ul = document.querySelector("#list-maker ul");


btn.addEventListener("click", function () {

  if (!!!input.value) {
    alert("Please don't empty the input");
    return;
  }

  let text = document.querySelectorAll("#list-maker ul div p");

  for (const item of text) {
    if (item.innerText == input.value) {
      alert("this text already exists");
      return;
    }
  }

  let div = document.createElement("div");
  div.className = "list-group-item d-flex justify-content-between mt-2 item";
  let p = document.createElement("p");
  p.innerText = input.value;
  p.className = "m-0 text";
  let i = document.createElement("i");
  i.className = "fa-regular fa-circle-xmark d-flex align-items-center pointer";
  div.append(p);
  div.append(i);
  ul.append(div);
  input.value = "";

  let remove = document.querySelectorAll("#list-maker ul div i");

  for (var a = 0; a < remove.length; a++) {
    remove[a].addEventListener("click", function () {
      this.parentElement.remove();
    })
  }
})

