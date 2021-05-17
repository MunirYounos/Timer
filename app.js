//Anodyne Time Counter
const timeIdFind = document.getElementById('time');
if(timeIdFind){
let today = new Date();
weekDayNames(today);
function weekDayNames(now){
weekday = now.getDay(),
dayslabel = ["Son", "Man", "Tir", "Ons", "Tor", "Fri", "Lor"],
weekday = dayslabel[now.getDay()]; 
//switcher
switch (weekday) {
case 'Fri':
FDay(13,0,0,now);
break;
case 'Lor':
EDay(14,0,0,now);
break;
case 'Son':
SDay(0,0,0,now);
break;
default:
EDay(14,0,0,now);
}
}
//Workday do this
function EDay(hour, min , sec, now){
let start = now;
after = new Date(), // change to new date after 14 hours
idag = start.setHours( hour, min, sec), // 14 hours
midnat = after.setHours(23,59,59); //24 hours
function addZero(num) {
return ("0" + parseInt(num)).substr(-2);
}
function tick() {
let now = new Date();
if (now <= idag ) { 
let remain = ((start - now) / 1000),
hours = addZero((remain / 60 / 60) % 60),
min = addZero((remain / 60) % 60),
sec = addZero(remain % 60);
document.getElementById('time').innerHTML=`Levering i morgen - bestil inden <br><span class="time-go"><span class="time-hour"> ${hours}</span> : <span class="time-min"> ${min}</span> : <span class="time-sec"> ${sec}</span> </span>`;
setTimeout(tick, 1000);
} else if (now < midnat ){
if (now >= after) { // too late, go to tomorrow
after.setDate(after.getDate() + 1);
}
let remain = ((after - now) / 1000),
hours = addZero((remain / 60 / 60) % 60),
min = addZero((remain / 60) % 60),
sec = addZero(remain % 60);
document.getElementById('time').innerHTML = `Vi sender i morgen - bestil inden <br><span class="time-up"  ><span class="time-hour"> ${hours}</span> : <span class="time-min"> ${min}</span> : <span class="time-sec" > ${sec}</span> </span>`;
setTimeout(tick, 1000);
}
} 
document.addEventListener('DOMContentLoaded', tick);
}
//Friday do this
function FDay(hour, min , sec, now){
let start = now;
let idag = start.setHours(hour, min, sec); // 11pm
function addZero(num) {
return ("0" + parseInt(num)).substr(-2);
}
function tick() {
let now = new Date();
if (now <= idag ) { 
let remain = ((start - now) / 1000),
hours = addZero((remain / 60 / 60) % 60),
min = addZero((remain / 60) % 60),
sec = addZero(remain % 60);
document.getElementById('time').innerHTML =`Levering i morgen - bestil inden <br><span class="time-go"><span class="time-hour"> ${hours}</span> : <span class="time-min"> ${min}</span> : <span class="time-sec"> ${sec}</span> </span>`;
setTimeout(tick, 1000);
} else if (now > idag ){
document.getElementById('time').innerHTML = '<span class="time-seperator"></span>';
setTimeout(tick, 1000);
}
} 
document.addEventListener('DOMContentLoaded', tick);
}
//Saturday do this
function LDay(){
document.getElementById('time').innerHTML = '<span class="time-seperator"></span>';
}
//Sunday do this
function SDay(hour, min, sec,now){
let start = now,
idag = start.setHours( hour, min, sec); // 11pm
function addZero(num) {
return ("0" + parseInt(num)).substr(-2);
}
function tick() {
let now = new Date();
if (now <= idag ) { 
document.getElementById('time').innerHTML = '<span class="time-seperator"></span>';
setTimeout(tick, 1000);
} else if (now > idag ){
if (now >= start) { // too late, go to tomorrow
start.setDate(start.getDate() + 1);
}
let remain = ((start - now) / 1000),
hours = addZero((remain / 60 / 60) % 60),
min = addZero((remain / 60) % 60),
sec = addZero(remain % 60);
document.getElementById('time').innerHTML =`Vi sender i morgen - bestil inden <br><span class="time-up"  ><span class="time-hour"> ${hours}</span> : <span class="time-min"> ${min}</span> : <span class="time-sec" > ${sec}</span> </span>`;
setTimeout(tick, 1000);
}
} 
document.addEventListener('DOMContentLoaded', tick);
}
}



