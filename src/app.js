/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};


let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racon", "dog", "driver", "comedian"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possetions = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let possetionsIndx = Math.floor(Math.random() * possetions.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actionIndx] +
    " " +
    possetions[possetionsIndx] +
    " " +
    where[whereIndx]
  );
};
