import '../css/style.css';
import '../css/style.scss';

import {
  dosmt
} from './switch';

import {
  dosmt1
} from './cards';

import {
  dosmt2
} from './mainPage';

import {
  dosmt3
} from './toolBar';

console.log("hello");

document.body.onload = addElement;

function addElement() {


const CARD = document.getElementById("card");
const CONTAINER = document.getElementById("cards-container");
const newCARD = document.createElement("div");
for (let i=0;i<7;i++){
CONTAINER.appendCh(newCARD);
}
// document.body.insertBefore("newCARD", "CONTAINER");


}
