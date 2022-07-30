const currentTime=document.querySelector("h1");
selectMenu=document.querySelectorAll("select");
setAlarm=document.getElementById('alarm');
subscribe=document.getElementById('sub');
console.log("hello World");
for (let i=12; i>0 ;i--){
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}

for (let i=59;i>0;i--){
  i=i<10 ? "0"+i:i;
  let option= `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}

for (let i=2;i>0;i--){
  let ampm=i==1? "AM":"PM";
  let option= `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option);
}
for (let i=2;i>0;i--){
  i=i<10 ? "0"+i:i;
  let option= `<option value="${i}">SLOT_${i}</option>`;
  selectMenu[3].firstElementChild.insertAdjacentHTML("afterend",option);
}

setInterval(() => {
  let date=new Date(),
  h=date.getHours(),
  m=date.getMinutes(),
  s=date.getSeconds(),
  ampm='AM';

  if (h>=12){
    h=h-12;
    ampm='PM'
  }
  h=h==0 ? h=12 :h;
  h=h<10?"0"+h:h;
  m=m<10?"0"+m:m;
  s=s<10?"0"+s:s;

  currentTime.innerText=`${h}:${m}:${s} ${ampm}`;
},1000);

function setAlarmtime(){
  let time=`${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`;
  let slot=`${selectMenu[3]}`
  if (time.includes("Hour")||time.includes("Minute")||time.includes("AM/PM")||time.includes("SLOT")){
    return alert("Please , select a valid time to set the appointment")
  }
  else {
    return alert(`${slot} set at ${time}`)
  }
  console.log(time)
}

function unsubscribe(){
  subscribe.innerText='Unsubscibe'
}
setAlarm.addEventListener("click",setAlarmtime)
subscribe.addEventListener("click",unsubscribe)
