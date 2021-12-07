//定义一个数组
var Num = [9,5,7,8,4,6,3,1,2];
//输出Num
console.log(Num);
//循环
for (I=0;I<Num.length;I++) {
    for (i=0;i<Num.length;i++){
        if (Num[i] > Num[i+1]) {
            Num_test = Num[i]
            Num[i] = Num[i+1]
            Num[i+1] = Num_test
        }
    };
};
//输出Num
console.log(Num);
Top_back.onclick = function () {
    window.scrollTo({
        left:300,
        top:400,
        behavior:"smooth"

    });
};