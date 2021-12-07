**JS函数**

语法: function 函数名 (行参) {

在函数内的代码

}

调用: 函数名 (实参)



```javascript
function fn() {
console.log('test')
}
fn()
//控制台输出
//test
```

**形参,实参**

```javascript
function fn(a,b) {
console.log('test')
};
fn()
//控制台输出
//test
//undefined
//undefined
//定义一个函数,添加两个形参
function fn(a,b) {
console.log('test')
};
//调用一个函数,添加两个实参
fn(10,20)
//控制台输出
//test
//10
//20
//定义一个函数,添加两个形参
function fn(a,b) {
	console.log('test')
	console.log(a)
	console.log(b)
};
//调用一个函数,添加两个实参
fn(10,20);
//第二次调用函数
fn(100,200);
//控制台输出
//test
//10
//20
//100
//200
function num(n) {
    //函数中的代码
    var num = 1
    while (n >= 1) {
        num *= n
        n = n-1
    }
    console.log (num);
};
//调用函数实参10
num(10);
//调用函数实参12
num(12);
//控制台输出
//3628800
//479001600
function num(n) {
	//函数中的代码
    var num = 1
    while (n >= 1) {
        num *= n
        n = n-1
    }
    //返回值给num
    return num
};
//将函数num(10)的值赋值给r1变量
var r1 = num(10);
//将函数num(12)的值赋值给r2变量
var r2 = num(12);
document.write (r1);
console.log(r2);
console.log(r1,r2)
//html输出
//3628800
//控制台输出
//479001600
//3628800 479001600
```