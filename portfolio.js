const folios = [
    {img:"./Cymera2666.JPG",
    title:"Web Developer(Frontend)",
    proficiency:"HTML CSS JAVASCRIPT NODE REACT"},
     {img:"./pictures/fashionpreneur2.jpg",
    title:"Clothier",
    proficiency:"Highly skilled in the use of softwares such as ARTCUT and COREL-DRAW to create vinyl designs/vector images for t-shirt print"}
];
const image1 = document.getElementById("img");
const job = document.querySelector(".job");
const info = document.querySelector(".info");
const btn = document.querySelector("#btn");


let count = 0;
const runSlide = () =>{
const currentImagIndex = count%folios.length;

let item = folios[currentImagIndex];

image1.src = item.img;
info.textContent = item.proficiency
job.textContent = item.title

}
 btn.addEventListener("click", ()=>{
     count++
     runSlide()
 })  

const timer = document.querySelector(".timer");
const items = document.querySelectorAll("div h4");
//TEMPORARY DATE
const tempDate = new Date();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();
const tempHour = tempDate.getHours();
const tempMinute = tempDate.getMinutes();
const tempSeconds = tempDate.getSeconds()

//FUTURE DATE
const futureDate = new Date(2021,tempMonth,tempDay+3,tempHour,tempMinute,tempSeconds);
const futureYear = futureDate.getFullYear();
const futureMonth = futureDate.getMonth();
const futuredate = futureDate.getDate();
const futureDay = futureDate.getDay();
const futureHour = futureDate.getHours();
const futureMinutes = futureDate.getMinutes();
const futureSeconds = futureDate.getSeconds();

console.log(tempDay);



function getRemainingTime(){

const todayDate = new Date().getTime();
const futureTime = futureDate.getTime();
const t = futureTime - todayDate;


const oneDay = 24*60*60*1000;
const oneHour = 60*60*1000;
const oneMinute = 60*1000;
const oneSecond = 1000;

const days = Math.floor(t/oneDay);
const hours = Math.floor((t%oneDay)/oneHour); 
const minutes = Math.floor((t%oneHour)/oneMinute);
const seconds = Math.floor((t%oneMinute)/oneSecond);
 const values = [days,hours,minutes,seconds];

 function format(item){
     if(item<10){
         return `0${item}`
     }
     else{
         return item
     }
 }
 items.forEach((item,index)=>{
     item.textContent = format(values[index]);
 })

}
const change = setInterval(getRemainingTime, 1000);
getRemainingTime();

const lists = document.querySelectorAll(".list")

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", ()=>{
    lists.forEach(li=>{
        li.classList.toggle("show")
    })
})