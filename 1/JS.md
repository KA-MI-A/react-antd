# 1. if()语句
解释：只有当指定条件为 true 时，使用该语句来执行代码
```
if (condition)
{
    当条件为 true 时执行的代码
}
```


# 2.数据类型
解释：值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
引用数据类型：对象(Object)、数组(Array)、函数(Function)。
```
var x;               // x 为 undefined
var x = 5;           // 现在 x 为数字
var x = "John";      // 现在 x 为字符串
```
1.数字
```var y=123e5;      // 12300000
   var z=123e-5;     // 0.00123
   ```
2.布尔  
布尔（逻辑）只能有两个值：true 或 false。

3.数组  
```
var cars=new Array();  
cars[0]="Saab";  
cars[1]="Volvo";  
cars[2]="BMW";  
或者var cars=new Array("Saab","Volvo","BMW");```  

for (i=0;i<cars.length;i++){
document.write(cars[i] + "<br>");
}
```
# 3.对象
在 JavaScript中，几乎所有的事物都是对象。
```
以下代码为;[[]变量 car 设置值为 "Fiat" :  
var car ="Fiat"[]';
对象也是一个变量，但对象可以包含多个值（多个变量）。
var car={type:"fiat",model:500,color:"white"};
```
1. 对象定义  
可以使用字符来定义和创建 JavaScript 对象:
```
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};
<value id="demo">
document.getElementById("demo").innerHTML =
	person.firstName + " 现在 " + person.age + " 岁。";
    console.log(person.firstName + " 现在 " + person.age + " 岁。")
```
2.访问对象属性  
 你可以使用 .property 或 ["property"]

3.对象方法  
对象方法作为一个函数定义存储在对象属性中。
``` 
 var person={
     firstName:"jhon",
     lastName:Doe",
     id:5566,
     fullName:function()
     {
         return this.firstName+""+this.lastName;
     }
 };
 document.getElement
 ```
```
var data = [{id:1,name:'yi'},{id:1,name:'yi'}]  //数组对象
var data1 = {[id:1,name:'yi'],[id:1,name:'yi']}  //对象数组
```
```
function myFunction()
{
    alert("Hello World!");
}

```

```
if (1+1=3){
    console.log("Good day");
}else if(1+1=4){
    console.log("Good dayGood dayGood dayGood day");
}else if(1+1=2){
    console.log("Good dayGood dayGood dayGood day");
}

```

```
for (var i=0;i<cars.length;i++)
{ 
    document.write(cars[i] + "<br>");
}
```
cars=["BMW","Volvo","Saab","Ford"];   
cars[i]=cars[0],cars[1],cars[2],cars[3]
# 4.作用域
1. 局部作用域  
变量在函数内声明，变量为局部作用域。  
局部变量：只能在函数内部访问。
```
function myFunction() {
var carName = "Volvo";
```
2.全局变量  
变量在函数外定义，即为全局变量。  
全局变量有 全局作用域: 网页中所有脚本和函数均可使用。 
```
var carName = " Volvo";

// 此处可调用 carName 变量
function myFunction() {
    // 函数内可调用 carName 变量
}
```
# 5.事件
当在 HTML 页面中使用 JavaScript 时， JavaScript 可以触发这些事件。  
```
按钮元素中添加了 onclick 属性 (并加上代码):
<button onclick="displayDate()">现在的时间是?</button>
```
# 6.字符串
JavaScript 字符串用于存储和处理文本。
可以在字符串添加转义字符来使用引号：
```
var x = 'It\'s alright';
var y = "He is called \"Johnny\"";
``` 
1.字符串长度  
可以使用内置属性 length 来计算字符串的长度：
```
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
```

# 7. 运算符
运算符 = 用于给 JavaScript 变量赋值。

算术运算符 + 用于把值加起来。

# 8.比较 和 逻辑运算符
比较和逻辑运算符用于测试 true 或者 false  
1. 逻辑运算符
```
&&	and	(x < 10 && y > 1) 为 true
||	or	(x==5 || y==5) 为 false
!	not	!(x==y) 为 true
```
# 9.语句
1. if()语句  
解释：只有当指定条件为 true 时，使用该语句来执行代码
```
if (condition)
{
    当条件为 true 时执行的代码
}
``` 
2. if...else语句  
请使用 if....else 语句在条件为 true 时执行代码，在条件为 false 时执行其他代码。
 ```
 if (condition)
{
    当条件为 true 时执行的代码
}
else
{
    当条件不为 true 时执行的代码
}
```
3. if...else if...else 语句  
```
if (condition1)
{
    当条件 1 为 true 时执行的代码
}
else if (condition2)
{
    当条件 2 为 true 时执行的代码
}
else
{
  当条件 1 和 条件 2 都不为 true 时执行的代码
}
```
# 10.switch语句
工作原理：首先设置表达式 n（通常是一个变量）。随后表达式的值会与结构中的每个 case 的值做比较。如果存在匹配，则与该 case 关联的代码块会被执行。请使用 break 来阻止代码自动地向下一个 case 运行。
```
switch(n)
{
    case 1:
        执行代码块 1
        break;
    case 2:
        执行代码块 2
        break;
    default:
        与 case 1 和 case 2 不同时执行的代码
}
```
1. default 关键词  
使用 default 关键词来规定匹配不存在时做的事情：
     ```
    default:  
    x="期待周末";
    ```
# 11.for循环
循环可以将代码块执行指定的次数。
```
for (语句 1; 语句 2; 语句 3)
{
    被执行的代码块
}

for (var i=0;i<cars.length;i++)
{ 
    document.write(cars[i] + "<br>");
}
```
for/in循环
```
var person={fname:"Bill",lname:"Gates",age:56}; 
 
for (x in person)  // x 为属性名
{
    txt=txt + person[x];
}       
```                                                        
# 12.while 循环
while 循环会在指定条件为真时循环执行代码块。  
```
while (条件)
{
    需要执行的代码
}
```
1. do/while 循环  
do/while 循环是 while 循环的变体。该循环会在检查条件是否为真之前执行一次代码块，然后如果条件为真的话，就会重复这个循环。
```
do
{
    需要执行的代码
}
while (条件);
```
# 13.break 和 continue 语句  
1. break语句  
break 语句可用于跳出循环。  
break 语句跳出循环后，会继续执行该循环之后的代码（如果有的话）：
```
for (i=0;i<10;i++)
{
    if (i==3)
    {
        break;
    }
    x=x + "The number is " + i + "<br>";
}
```
2. continue语句  
continue 语句中断循环中的迭代，如果出现了指定的条件，然后继续循环中的下一个迭代。 该例子跳过了值 3：
```
for (i=0;i<=10;i++)
{
    if (i==3) continue;
    x=x + "The number is " + i + "<br>";
}
```
3. JavaScript 标签  
      continue 语句（带有或不带标签引用）只能用在循环中。

      break 语句（不带标签引用），只能用在循环或 switch 中。

     通过标签引用，break 语句可用于跳出任何 JavaScript 代码块：
# 14.typeof, null, 和 undefined  
1. typeof 操作符  
使用 typeof 操作符来检测变量的数据类型。
```
typeof "John"                // 返回 string   
typeof 3.14                  // 返回 number  
typeof false                 // 返回 boolean  
typeof [1,2,3,4]             // 返回 object  
```
注释：在JavaScript中，数组是一种特殊的对象类型。 因此 typeof [1,2,3,4] 返回 object。

2. null  
null是一个只有一个值的特殊类型。表示一个空对象引用。  
```
var person = null;           // 值为 null(空), 但类型为对象
```
3. undefined  
undefined 是一个没有设置值的变量。
```
var person;                  // 值为 undefined(空), 类型是undefined
```
4. undefined 和 null 的区别  
null 和 undefined 的值相等，但类型不等：
```
typeof undefined             // undefined
typeof null                  // object
null === undefined           // false
null == undefined            // true
```  
# 15.类型转换  
Number() 转换为数字， String() 转换为字符串， Boolean() 转换为布尔值。
1. typeof 操作符  
你可以使用 typeof 操作符来查看 JavaScript 变量的数据类型。
```
typeof "John"                 // 返回 string 
typeof 3.14                   // 返回 number
typeof NaN                    // 返回 number
typeof false                  // 返回 boolean
typeof [1,2,3,4]              // 返回 object
```
注意：
NaN 的数据类型是 number  
数组(Array)的数据类型是 object  
日期(Date)的数据类型为 object  
null 的数据类型是 object  
未定义变量的数据类型为 undefined    

如果对象是 JavaScript Array 或 JavaScript Date ，我们就无法通过 typeof 来判断他们的类型，因为都是 返回 object。  

2. constructor 属性  
你可以使用 constructor 属性来查看对象是否为数组 (包含字符串 "Array"):
```
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}
```
3. 类型转换  
通过使用 JavaScript 函数  
通过 JavaScript 自身自动转换  

4. 将数字转换为字符串  
该方法可用于任何类型的数字，字母，变量，表达式：
```
String(x)         // 将变量 x 转换为字符串并返回
String(123)       // 将数字 123 转换为字符串并返回
String(100 + 23)  // 将数字表达式转换为字符串并返回
```
Number 方法 toString() 也是有同样的效果。  
5. 将布尔值转换为字符串  
全局方法 String() 可以将布尔值转换为字符串。
```
String(false)        // 返回 "false"
String(true)         // 返回 "true"
```
Boolean 方法 toString() 也有相同的效果。
```
false.toString()     // 返回 "false"
true.toString()      // 返回 "true"
```
6. 将日期转换为字符串  
Date() 返回字符串。  
Date 方法 toString() 也有相同的效果。
```
obj = new Date()
obj.toString()   // 返回 Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)
```
7. 将字符串转换为数字  
全局方法 Number() 可以将字符串转换为数字。
```
Number("3.14")    // 返回 3.14
Number(" ")       // 返回 0 
Number("")        // 返回 0
Number("99 88")   // 返回 NaN
```
8. 一元运算符+  
Operator + 可用于将变量转换为数字：
```
var y = "5";      // y 是一个字符串
var x = + y;      // x 是一个数字
```
如果变量不能转换，它仍然会是一个数字，但值为 NaN (不是一个数字):
9. 将布尔值转换为数字
```
Number(false)     // 返回 0
Number(true)      // 返回 1
```
10. 将日期转换为数字
日期方法 getTime() 也有相同的效果。
```
d = new Date();
d.getTime()        // 返回 1404568027739
```