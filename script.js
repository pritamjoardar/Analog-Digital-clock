
let sc=document.getElementById("sc");
let mn=document.getElementById("mn");
let hr=document.getElementById("hr");



setInterval(() => {
let day=new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss =day.getSeconds() * 6; 

hr.style.transform = `rotateZ(${hh+(mm/12)}deg) ` ;
mn.style.transform = `rotateZ(${mm}deg) ` ;
sc.style.transform = `rotateZ(${ss}deg) ` ;


// digital clock

let hour = document.getElementById("hour");
let minites = document.getElementById("minutes");
let second = document.getElementById("second");
let ampm = document.getElementById("ampm");

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h>=12 ? "PM" : "AM" ;

// ampm


// 24hours clock to 12
if(h ==0){
    h = 12;
}
if(h > 12){
    h = h-12;
}

h = (h < 10) ? "0" + h : h
m = (m < 10) ? "0" + m : m
s = (s < 10) ? "0" + s : s


hour.innerHTML = h;
minites.innerHTML = m;
second.innerHTML = s;
ampm.innerHTML = am;
// setInterval('window.location.reload()', 4000);

});




