/*
//创建一个时间对象
var time = new Date();	//Date为大写D
//输出time
console.log(time);
//控制台
//Sun Dec 05 2021 19:48:45 GMT+0800 (中国标准时间)
//Sun = 周
//Dec = 月
//05  = 日
//2021= 年
//19:48:45 = 时,分,秒
//GMT+0800 = 时区
*/
/*
//创建一个时间对象
var time = new Date(2002,1,23,11,22,18);
//输出time
console.log(time);
//获取时间对象中的年份信息
var a = time.getFullYear();
console.log(a);
//获取时间对象中的月份信息
var b = time.getMonth();
console.log(b);
//获取时间对象中的日期信息
var c = time.getDate();
console.log(c);
//获取时间对象中的小时信息
var d = time.getHours();
console.log(d);
//获取时间对象中的分钟信息
var e = time.getMinutes();
console.log(e);
//获取时间对象中的秒信息
var f = time.getSeconds();
console.log(f);
//获取时间对象中的星期
var g = time.getDay();
console.log(g);
//获取时间对象中的时间戳信息	
var h = time.getTime();
console.log(h);
//控制台输出
//Sat Feb 23 2002 11:22:18 GMT+0800 (中国标准时间)
//2002
//1
//23
//11
//22
//18
//6
//1014434538000
*/
/*
//创建一个时间对象
var time = new Date(2002,1,23,11,22,18);
//输出time
console.log(time);
//设置年份
time.setFullYear(2021);
//设置月份
time.setMonth(0);
//设置日期
time.setDate(1);
//设置小时
time.setHours(0);
//设置分钟
time.setMinutes(0);
//设置秒
time.setSeconds(0);
//输出time
console.log(time);
//控制台输出
//Sat Feb 23 2002 11:22:18 GMT+0800 (中国标准时间)
//Fri Jan 01 2021 00:00:00 GMT+0800 (中国标准时间)
*/
//创建一个时间对象
var time = new Date(2002,1,23,11,22,18);
//输出time
console.log(time);
//设置时间戳
time.setTime(1609430400000);
//输出time
console.log(time);
//输出time
console.log(time);
//控制台输出
//Sat Feb 23 2002 11:22:18 GMT+0800 (中国标准时间)
//Fri Jan 01 2021 00:00:00 GMT+0800 (中国标准时间)