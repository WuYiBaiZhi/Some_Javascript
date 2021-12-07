/*
//创建一个值
var stu = {
    name:'小明',
    old:16,
    sex:'man'

};
//输出stu看一下
console.log(stu);
*/
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
//控制台输出
//{}
//{name: '无意白纸', old: 18, sex: 'man'}
/*
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
//[sex:man];
*/
/*
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
*/
//访问对象的键值对
//语法一
console.log(stu.name);
//语法二
console.log(stu['old']);