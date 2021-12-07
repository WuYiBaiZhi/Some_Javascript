数值类型 Number

字符串类型 String

布尔类型 Boolean //true和false

空类型 Undefined/Null

```javascript
//typeof #检查是那种数据类型
```

转数值类型 Number();

语法:Number(要转换的内容);

结果:转换好的数据类型的结果

*parseInt是从第一位开始转换遇到abc等停止转换

```javascript
            var s1 = '100';
            var s2 = Number(s1);
            console.log (s2);
            console.log (typeof s2)
//控制台输出
//>100
//>number
			var s1 = '100abc';
            var s2 = Number(s1);
            console.log (s2);
            console.log (typeof s2)
//控制台输出
//>NaN
//>number
```

语法:parseInt(要转换的值);

结果:转换好的数据类型的结果

```javascript
           var s1 = '100';
           var s2 = parseInt(s1);
           console.log(s2);
           console.log(typeof s2);
//控制台输出
//>100
//>number
           var s1 = '100abc';
           var s2 = parseInt(s1);
           console.log(s2);
           console.log(typeof s2);
//控制台输出
//>100
//>number
           var s1 = 'abc';
           var s2 = parseInt(s1);
           console.log(s2);
           console.log(typeof s2);
//控制台输出
//>NaN
//>number
```

语法:parseFloat(要转换的内容);

结果:转换好的数据类型的结果

```javascript
          var s1 = '100.234'
          var s2 = parseInt (s1);
          var s3 = parseFloat (s1);
          console.log (s2);
          console.log (s3);
          console.log (typeof s2);
          console.log (typeof s3);
//控制台输出
//>100
//>100.234
//>number
//>number
```

语法:String(要转换的内容);

结果:转换好的数据类型的结果

```javascript
         var s1 = true;
         console.log (s1);
         console.log (typeof s1);
         var s2 = String (s1);
         console.log (s2);
         console.log (typeof s2);
//控制台输出
//>true
//boole
//true
//string
//>
```

语法:要转换的内容.toString();

结果:转换好的数据类型的结果

```javascript
        var s1 = true;
        console.log (s1);
        console.log (typeof s1);
        var s2 = s1.toString()
        console.log (s2)
        console.log (typeof s2);
//控制台输出
//>true
//boole
//true
//string
//>
```

语法:Boolean(要转换的内容);

结果:转换为True Or False

*在JS中共有5个内容会被转为False

false: 0 NaN /空字符串/'' Null undefined

True: 除以上5种所有都会转换为True

```javascript
        var s1 = 1;
        console.log (s1);
        console.log (typeof s1)
        var s2 = 0;
        console.log (s2);
        console.log (typeof s2)
        var s3 = Boolean(s1);
        console.log (s3);
        console.log (typeof s3)
        var s4 = Boolean(s2);
        console.log (s4);
        console.log (typeof s4)
//控制台输出
//1
//number
//0
//number
//true
//boolean
//false
//boolean
        console.log (Boolean(0))
        console.log (Boolean(NaN))
        console.log (Boolean(null))
        console.log (Boolean(undefined))
        console.log (Boolean(''))
//控制台输出
//False*5
```

