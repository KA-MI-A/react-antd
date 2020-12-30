# 1.数据类型
 __最新的 ECMAScript 标准定义了8种数据类型：__
 - 七种基本数据类型:
 - 布尔值（Boolean），有2个值分别是：true 和 false.
- null ， 一个表明 null 值的特殊关键字。 - JavaScript 是大小写敏感的，因此 null 与 Null、NULL或变体完全不同。
- undefined ，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。
- 数字（Number），整数或浮点数，例如： 42 或者 3.14159。
- 任意精度的整数 (BigInt) ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
- 字符串（String），字符串是一串表示文本值的字符序列，例如："Howdy" 。
- 代表（Symbol） ( 在 ECMAScript 6 中新添加的类型).。一种实例是唯一且不可改变的数据类型。
以及对象（Object）。
# 2. 数据类型的转换
- JavaScript是一种动态类型语言(dynamically typed language)。这意味着你在声明变量时可以不必指定数据类型，而数据类型会在代码执行时会根据需要自动转换。因此，你可以按照如下方式来定义变量：
```
var answer = 42;
```
- 然后，你还可以给同一个变量赋予一个字符串值，例如：
```
answer = "Thanks for all the fish...";
```
- 因为 JavaScript 是动态类型的，这种赋值方式并不会提示出错。

- 在包含的数字和字符串的表达式中使用加法运算符（+），JavaScript 会把数字转换成字符串。例如，观察以下语句：
```
x = "The answer is " + 42 // "The answer is 42"
y = 42 + " is the answer" // "42 is the answer"
```
# 3. 字符串转换为数字
__parseInt()和parseFloat()__
-  parseInt 方法只能返回整数，所以使用它会丢失小数部分。另外，调用 parseInt 时最好总是带上进制(radix) 参数，这个参数用于指定使用哪一种进制。
- 将字符串转换为数字的另一种方法是使用一元加法运算符。
```
"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2
// 注意：加入括号为清楚起见，不是必需的。
```
__字面量 (Literals)__
- 在JavaScript中，你可以使用各种字面量。这些字面量是脚本中按字面意思给出的固定的值，而不是变量。

__布尔字面量 (Boolean literals)__
- 布尔类型有两种字面量：true和false。