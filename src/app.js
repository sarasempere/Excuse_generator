/* eslint-disable */
import "bootstrap";
import "./style.css";
import "/workspace/vanillajs-hello/src/app.js";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let randomNum = arr => {
  let rand = Math.floor(Math.random() * arr.length);
  return rand;
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoRand = randomNum(who);
  if (whoRand == 0) {
    document.getElementById("prueba").innerHTML =
      '<img src="https://i.pinimg.com/originals/b0/c5/26/b0c5260755c8da4d1fd75cc7783807c5.png" />';
  } else if (whoRand == 1) {
    document.getElementById("prueba").innerHTML =
      '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRZIjd7PoUldz_eHHPDL1eiOyejtJqBZ7pA&usqp=CAU" />';
  } else if (whoRand == 2) {
    document.getElementById("prueba").innerHTML =
      '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3OyP_PiIU_6DBuGsDU0R37LJt7VT9VNC_w&usqp=CAU" />';
  } else {
    document.getElementById("prueba").innerHTML =
      '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoB2SKNynuYvutw8aGnrOoTuhscmmIW_Dxw&usqp=CAU" />';
  }

  let excuseMe =
    who[whoRand] +
    " " +
    action[randomNum(action)] +
    " " +
    what[randomNum(what)] +
    " " +
    when[randomNum(when)];
  return (document.querySelector("#excuse").innerHTML = excuseMe);
};

generateExcuse();

window.reload = function reload() {
  generateExcuse();
};
