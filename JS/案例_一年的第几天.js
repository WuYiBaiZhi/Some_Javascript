//定义一个变量来计算天数
var how_day = 0;
var year = 2008;
var month = 8;
var day = 8;
//使用switch计算出月份的天数
switch (month) {
    case 12:
        how_day = how_day+30
    case 11:
        how_day = how_day+31
    case 10:
        how_day = how_day+30
    case 9:
        how_day = how_day+31
    case 8:
        how_day = how_day+31
    case 7:
        how_day = how_day+30
    case 6:
        how_day = how_day+31
    case 5:
        how_day = how_day+30
    case 4:
        how_day = how_day+31
    case 3:
        if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
            how_day = how_day+29
        }
        else {
            how_day = how_day+28
        };
    case 2:
        how_day = how_day+31
};
how_day = how_day+day;
console.log (year+'年'+month+'月'+day+'日是本年的第'+how_day+'天');

