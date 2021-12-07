**对象数据模型**

对象是一个数据类型

对象数据类型像一个书架子,里面能放哼多的书

对象就是一个可以装很多数据的盒子

创建:

语法:var 对象名 = {}

```javascript
//创建一个值
var stu = {
    name:'小明',
    old:16,
    sex:'man'

};
//输出stu看一下
console.log(stu);
//控制台输出
/*Object
name: "小明"
old: 16
sex: "man"
[[Prototype]]: Object
*/
```

对象的操作

对象内 键值对 的操作

**增** 向对象内添加一个 键值对

```javascript
//创建一个空对象
var stu = {};
//输出stu
console.log(stu);
//增加一个 键值对
//语法一
stu.name = '无意白纸';
//语法二
stu['old'] = 18;
//输出stu
console.log(stu);
//控制台输出
//{}
//{name: '无意白纸', old: 18}
```

**删** 删除对象内的一个 键值对

```javascript
//创建一个空对象
var stu = {};
//输出stu
console.log(stu);
//增加一个 键值对
//语法一
stu.name = '无意白纸';
//语法二
stu['old'] = 18;
//输出stu
console.log(stu);
//控制台输出
//{}
//{name: '无意白纸', old: 18}

//添加一个键值对
stu.sex = 'man';
//删除一个键值对
//语法一
delete stu.name;
//语法二
delete stu['old'];
//输出stu
console.log(stu);
//控制台输出
//{}
//{name: '无意白纸', old: 18,sex:man}
//[sex:man]
```

**改** 修改对象内的一个 键值对 中的值

```javascript
var stu = {};
//输出stu
console.log(stu);
//增加一个 键值对
//语法一
stu.name = '无意白纸';
//语法二
stu['old'] = 18;
//添加一个键值对
stu.sex = 'man';
//输出stu
console.log(stu);
//修改对象中的一个键值对的值
//语法一
stu.name = '巨鹏';
//语法二
stu['old'] = 17;
//输出stu
console.log(stu);
//控制台输出
//{}
//{name: '无意白纸', old: 18, sex: 'man'}
//{name: '巨鹏', old: 17, sex: 'man'}
```

**查** 访问对象中的一个 键值对

```javascript
//创建一个空对象
var stu = {};
//输出stu
console.log(stu);
//增加一个 键值对
//语法一
stu.name = '无意白纸';
//语法二
stu['old'] = 18;
//添加一个键值对
stu.sex = 'man';
//输出stu
console.log(stu);
//访问对象的键值对
//语法一
console.log(stu.name);
//语法二
console.log(stu['old']);
//控制台输出
//{}
//{name: '无意白纸', old: 18, sex: 'man'}
//无意白纸
//18

```