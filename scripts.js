const accordion_H1 = document.querySelector("#accordion-flush-heading-1");
const accordion_B1 = document.querySelector("#accordion-flush-body-1");
const btn_1 = document.querySelector("#btn1");
function change1(params) {
  accordion_B1.classList.toggle("hidden");
  btn_1.classList.toggle("hidden");
}
accordion_H1.addEventListener("click", change1);

const accordion_H2 = document.querySelector("#accordion-flush-heading-2");
const accordion_B2 = document.querySelector("#accordion-flush-body-2");
const btn_2 = document.querySelector("#btn2");
function change2(params) {
  accordion_B2.classList.toggle("hidden");
  btn_2.classList.toggle("hidden");
}
accordion_H2.addEventListener("click", change2);

const accordion_H3 = document.querySelector("#accordion-flush-heading-3");
const accordion_B3 = document.querySelector("#accordion-flush-body-3");
const btn_3 = document.querySelector("#btn3");
function change3(params) {
  accordion_B3.classList.toggle("hidden");
  btn_3.classList.toggle("hidden");
}
accordion_H3.addEventListener("click", change3);

const accordion_H4 = document.querySelector("#accordion-flush-heading-4");
const accordion_B4 = document.querySelector("#accordion-flush-body-4");
const btn_4 = document.querySelector("#btn4");
function change4(params) {
  accordion_B4.classList.toggle("hidden");
  btn_4.classList.toggle("hidden");
}
accordion_H4.addEventListener("click", change4);
