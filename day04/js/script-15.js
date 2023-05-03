// querySelector eşleşen ilk elemanı seçer
const headEl = document.querySelector("h1");
console.log(headEl);

const aboutUsEl = document.querySelector("#aboutUs");
console.log(aboutUsEl);

const spanEl = document.querySelector("#aboutUs span");
console.log(spanEl);

const menuEl = document.querySelector("ul.menu");
console.log(menuEl);

const menuItem3El = document.querySelector("ul.menu li:nth-child(3)");
console.log(menuItem3El);

headEl.innerText = "Hello Javascript";

// querySelectorAll eşleşen tüm elemanları getirir
const spanEls = document.querySelectorAll("#aboutUs > span");
console.log(spanEls);
spanEls[0].innerText = "HELLO";


//!innerText
//bir elementin icindeki yaziyi okumak ve de degistirmek icin kullanilir
//bit html icindeki yaziyi innerText ile alabiliriz


//listenin ikinci elemanini alip son elemanina ekleyen kodu yaziniz

const listItemText= document.querySelector(".menu li:nth-child(2)").innerText;

console.log(listItemText)

document.querySelector(".menu li:last-child").innerText+=` ${listItemText}`;


//!innerHTML
//lisedeki 4.elemanin yerine koyu renkte hello yazan kodu yaziniz
const listItem4El=document.querySelector(".menu li:nth-child(4)");
listItem4El.innerHTML="<b>Hello</b>"