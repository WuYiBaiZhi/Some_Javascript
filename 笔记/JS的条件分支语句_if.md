**if 语句**

```javascript
if () {...}
if () {...} else {...}
if () {...} else if () {...}
if () {...} else if () {...} else {...}
//()里面书写条件
//{}里面书写符合条件满足时执行的代码
```

if () {...}

```javascript
var $ = 10000;
//满足条件就执行不满足就不执行
if ($>=5000) {console.log('去餐厅吃饭')}
//控制台输出
//去餐厅吃饭
```

if () {...} else {...}

```javascript
var $ = 4000;
if ($>=5000) {
    //不满足条件执行else下的代码
    console.log('去餐厅吃饭')
}
else {
    console.log('回家吃饭')
}
//控制台输出
//回家吃饭
```

if () {...} else if () {...}

```javascript
var $ = 4000;
	//满足else if并执行以下代码
if ($>=5000) {
    console.log('去餐厅吃饭')
}
else if ($ >= 800) {
    console.log('我可以吃快餐')
};
//控制台输出
//我可以吃快餐
```

if () {...} else if () {...} else {...}

```javascript
var $ = 600;
	//不满足if 和 else if 的条件执行 else以下的代码
if ($>=5000) {
    console.log('去餐厅吃饭')
}
else if ($ >= 800) {
    console.log('我可以吃快餐')
}
else {
    console.log('回家吃饭')
};
//控制台输出
//回家吃饭
```

