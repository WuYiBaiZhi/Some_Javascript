//定义变量来存储年份
var year = 2020;
//使用if语句判断是否是闰年
if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
    console.log (year+'是闰年')
}
else {
    console.log (year+'不是闰年')
};