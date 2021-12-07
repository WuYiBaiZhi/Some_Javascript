//调用
/*
var n = 100;
function a () {		//a函数的私有变量
    //var n = 200;
    function b () {		//在a函数以下的b函数
        //var n = 300;
        console.log(n);
    };
    b()		//调用b变量
};
function c () {		//c 函数的私有变量
    var n =400;
};
a ()	//调用a变量
//控制台输出
//300
*/
//赋值
var n = 100;
function a () {		//a函数的私有变量
    var n = 200;
    function b () {		//在a函数以下的b函数
        var n = 300;
        n = 114514
        console.log(n);
    };
    b()		//调用b变量
};
function c () {		//c 函数的私有变量
    var n =400;
};
a ()	//调用a变量
//控制台输出
//300