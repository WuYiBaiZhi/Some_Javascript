**数组**

数组是一个有序的数据集合

语法: var arr = []

var a = [1,true,'Hello Word']

###### 序号      0     1            2

序号(索引)是从0开始

```javascript
//创建一个数组
var a = [1,true,'Hello Word'];
//输出数组a
console.log(a);
//控制台输出
//0: 1
//1: true
//2: "Hello Word"
//length: 3
//[[Prototype]]: Array(0)
```



​										获取长度  *语法:数组名.lenght

​					长度的操作

​										设置长度 *数组名.lenght =数字

数组的操作

​										获取数据 *数组名[索引数]					

​					数据的操作

​										设置数据 *数组名[索引数] = 值



长度操作

```javascript
//创建一个数组
var a = [100,200,300,400];
//输出a
console.log(a);
//获取数组的长度
console.log(a.length);
//浏览器输出
//(4) [100, 200, 300, 400]
//4
//修改数组的长度
a.length = 3;
//输出a
console.log(a);
//浏览器输出
//(4) [100, 200, 300, 400]
//4
//(3) [100, 200, 300]
//修改数组的长度
a.length = 5;
//输出a
console.log(a);
//浏览器输出
//(4) [100, 200, 300, 400]
//4
//(3) [100, 200, 300,Null]
```

修改数组

当修改长度不够时会从后往前删除

当修改长度超出时会添加一个Null



数据的操作

```javascript
var a = [100,200,300,400];
//输出a
console.log(a);
//输出数组索引2的数据
console.log(a[2]);
//浏览器输出
//(4) [100, 200, 300, 400]
//300

//创建一个数组
var a = [100,200,300,400];
//输出a
console.log(a);
//输出数组索引2的数据
console.log(a[2]);
//浏览器输出
//(4) [100, 200, 300, 400]
//300
//修改数组中索引为2的数据
a[2] = 114514;
//输出a
console.log(a);
//输出数组索引2的数据
console.log(a[2]);
//浏览器输出
//(4) [100, 200, 300, 400]
//300
//(4) [100, 114514, 300, 400]
//114514
```

数组的遍历

```javascript
//创建一个数组
var a = [100,200,300,400];
//输出a
console.log(a);
//定义循环
for (i =0;
    i <a.length;
    i = i+1) {
        console.log(i);
        console.log(a[i]);
    }
//浏览器输出
//(4) [100, 200, 300, 400]
//0
//100
//1
//200
//2
//300
//3
//400
```

