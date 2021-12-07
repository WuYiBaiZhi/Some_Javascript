**算数运算符**

​									当符号两边都是数字或者是布尔的时候,会进行数学运算

+:进行加法运算

​									只要符号任意一边是字符串的时候,就会进行字符串的拼接

-:进行减法运算

*:进行乘法运算

/:进行除法运算

%:进行求余运算

```javascript
var n1 = 10;
var n2 = 20;
console.log(n1+n2);
//控制台输出
//30
var n3 = '10';
var n4 = 20;
console.log(n3+n4);
//控制台输出
//1020
```



```javascript
console.log (20-10);
console.log (20*10);
console.log (20/10);
console.log (10%3);
//控制台输出
//10
//200
//2
//1
```

**赋值运算符**

=:进行赋值操作

+=:加等于运算符

-=:减等于运算符

*=:乘等于运算符

/=:除等于运算符

%=:取余等于运算符

```javascript
var n1 = 10;
console.log(n1);
var n2 = 10;
n2 += 10;
console.log(n2);
var n3 = 10;
n3 -= 10;
console.log(n3);
var n4 =10;
n4 *= 10;
console.log(n4);
var n5 = 10;
n5 /= 10;
console.log(n5);
var n6 = 10;
n6 %= 10;
console.log(n6);
//控制台输出
//10
//20
//0
//100
//1
//0
```

**比较运算符**
$$
> :大于比较
< :小于比较
>= :大于等于
<= :小于等于
$$

```javascript
console.log(200>100);
console.log(100<200);
console.log(100>=100);
console.log(100<=100);
console.log(100>200);
//控制台输出
//true
//true
//true
//true
//false
```

== :比较等于

=== :全比较等于

!= :不等于比较

!== :不全等于比较 

*全等于比较数值和数据类型/普通等于只比较值

```javascript
console.log(100 == '100');
console.log(100 === '100');
console.log(100 === 100);
console.log(100 != 100);
console.log(100 != '100');
console.log(100 != 101);
console.log(100 !== '100');
console.log(100 !== 101);
//控制台输出
//true
//false
//true
//false
//false
//true
//true
//true
```

**逻辑运算符**

&&: 与 运算

|| : 或 运算

! : 非 运算

```javascript
//&&与运算两边为True时返回true 否则返回结果为false
console.log (true && true);
console.log (true && false);
console.log (false && true);
console.log (false && false);
//控制台输出
//true
//false
//false
//false
//||或运算两边为false时返回false 否则返回true
console.log (true || true);
console.log (true || false);
console.log (false || true);
console.log (false || false);
//控制台输出
//true
//true
//true
//false
//反运算符会转换布朗结果
console.log (! true);
console.log (! false);
//控制台输出
//false
//true
```

**自增自减运算符**

++: 自增运算符

​							前置++		后置++

​							++变量		变量++

```javascript
var n1 = 6;
//先运行++n1=7
console.log (1 + ++n1);
var n2 = 6;
//先运行1+6=7
console.log (1 + n1++);
//控制台输出
//8
//8
```

-- :自减运算符

​							前置--		后置--

​							--变量		变量--

```javascript
var n1 = 6;
//先运行--n1=6
console.log (1 + --n1);
var n2 = 6;
//先运行1+6=7
console.log (1 + n1--);
//控制台输出
//6
//6
```

