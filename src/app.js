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

  let excuseMe =
    who[randomNum(who)] +
    " " +
    action[randomNum(action)] +
    " " +
    what[randomNum(what)] +
    " " +
    when[randomNum(when)];
  return (document.querySelector("#excuse").innerHTML = excuseMe);
};

window.reload = function reload() {
  generateExcuse();
};

generateExcuse();
