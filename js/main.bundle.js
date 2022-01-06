"use strict";

var color = document.querySelector("#color");
var out = document.querySelector("#out");
color.addEventListener("input", function () {
  var seleccionar = color.value;
  out.innerHTML = seleccionar;
  out.style.background = seleccionar;
  out.style.color = "#fff";
});