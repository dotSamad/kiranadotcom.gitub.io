
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
   items.classList.add("active");
   menuBtn.classList.add("hide");
   searchBtn.classList.add("hide");
   cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
   items.classList.remove("active");
   menuBtn.classList.remove("hide");
   searchBtn.classList.remove("hide");
   cancelBtn.classList.remove("show");
   form.classList.remove("active");
   cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = () => {
   form.classList.add("active");
   searchBtn.classList.add("hide");
   cancelBtn.classList.add("show");
}
let countDate = new Date('November 15, 2023 00:00:00').getTime();

function CountDown() {

   let now = new Date().getTime();
   gap = countDate - now;

   let second = 1000;
   let minute = second * 60;
   let hour = minute * 60;
   let day = hour * 24;

   let d = Math.floor(gap / (day));
   let h = Math.floor((gap % (day)) / (hour));
   let m = Math.floor((gap % (hour)) / (minute));
   let s = Math.floor((gap % (minute)) / (second));

   document.getElementById('day').innerText = d;
   document.getElementById('hour').innerText = h;
   document.getElementById('minute').innerText = m;
   document.getElementById('second').innerText = s;

}

setInterval(function () {
   CountDown();
}, 1000)