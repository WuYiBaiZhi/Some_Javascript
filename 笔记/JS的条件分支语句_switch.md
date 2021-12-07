switch (已知条件) {

case 选项1:

​	符合条件的代码

​	break

case 选项2:

​	符合条件的代码

​	break

}

*default

当所有条件都不符合的情况下执行以下的代码

*break

表示结束当前的Switch //如果没有break如果符合条件会继续执行下边的代码直到碰见break

```javascript
var foot = 37;
switch (foot) {
    case 37:
        console.log ('买一双 37 号的鞋子')
        break
    case 40:
        console.log ('买一双 40 号的鞋子')
        break
    case 43:
        console.log ('买一双 43 号的鞋子')
        break
    default:
        console.log ('我去别的地方看看')
};
//控制台输出
//买一双 37 号的鞋子
//**当foot等于43**
//控制台输出
//买一双 43 号的鞋子
//**当foot等于99**
//控制台输出
//我去别的地方看看

```

