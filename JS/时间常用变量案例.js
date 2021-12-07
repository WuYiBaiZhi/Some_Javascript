var open = window.confirm('确认打开窗口吗');
console.log(open);
if (open == false) {
    window.close()
}
setInterval(function() {
var Now_Time = new Date();
var BooM_Time = new Date(2021,11,16,0,0,0);
var Now_Time_ms = Now_Time.getTime();
var BooM_Time_ms = BooM_Time.getTime();
var Time = ((BooM_Time_ms-Now_Time_ms)/1000);
//换算天
var day = Math.trunc(Time/(60*60*24));
//换算小时
var hor = Math.trunc(Time % (60*60*24)/(60*60));
//换算分钟
var min =  Math.trunc((Time %(60*60*24)) % (60*60)/60);
//换算秒
var set =  Math.trunc((Time %(60*60*24)) % (60*60)%60);
var a = {day:day,hor:hor,min:min,set:set}
console.log(a);
var day_text = document.querySelector('.day')
day_text.innerText = day
var hor_text = document.querySelector('.hor')
hor_text.innerText = hor
var min_text = document.querySelector('.min')
min_text.innerText = min
var set_text = document.querySelector('.set')
set_text.innerText = set
}
,1000);