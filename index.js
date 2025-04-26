function realTime(){

let sydneyElement= document.querySelector("#sydney");
let sydneyDateElement= sydneyElement.querySelector(".date");
let sydneyTimeElement= sydneyElement.querySelector(".time");
let sydneyTime= moment().tz("Australia/Sydney");
sydneyDateElement.innerHTML= moment().format("MMMM Do yyyy");
sydneyTimeElement.innerHTML= sydneyTime.format("h:mm:ss [<small>]A[</small>]");


let tokyoElement= document.querySelector("#tokyo");
let tokyoDateElement= tokyoElement.querySelector(".date");
let tokyoTimeElement= tokyoElement.querySelector(".time");
let tokyoTime= moment().tz("Asia/Tokyo");
tokyoDateElement.innerHTML= moment().format("MMMM Do yyyy");
tokyoTimeElement.innerHTML= tokyoTime.format("h:mm:ss [<small>]A[</small>]");}

realTime();
setInterval(realTime,1000);