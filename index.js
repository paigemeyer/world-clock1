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


function updateCity(event){
   let cityTimeZone= event.target.value;
if(cityTimeZone==="current"){
    cityTimeZone=moment.tz.guess();
}


   let cityName= cityTimeZone.split("/")[1];
   let cityTime=moment().tz(cityTimeZone);
   let citiesElement= document.querySelector("#cities");
   citiesElement.innerHTML=
   `<div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do yyyy")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
</div>`
}

realTime();
setInterval(realTime,1000);


let citiesSelectElement= document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
