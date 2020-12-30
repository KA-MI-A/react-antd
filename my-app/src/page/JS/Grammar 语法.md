# 1.基础
- JavaScript 是区分大小写的，并使用 Unicode 字符集。举个例子，可以将单词 Früh （在德语中意思是“早”）用作变量名。
```
var Früh = "foobar";
```
# 2.注释
- Javascript 注释的语法和 C++ 或许多其他语言类似：
```
// 单行注释

/* 这是一个更长的,
   多行注释
*/

/* 然而, 你不能, /* 嵌套注释 */ 语法错误 */
```
# 3.声明
- JavaScript有三种声明方式。
- var：声明一个变量，可选初始化一个值。
- let：声明一个块作用域的局部变量，可选初始化一个值。
- const：声明一个块作用域的只读常量。
# 4.变量
__在应用程序中，使用变量来作为值的符号名。变量的名字又叫做标识符，其需要遵守一定的规则。__

- 一个 JavaScript 标识符必须以字母、下划线（_）或者美元符号（$）开头；后续的字符也可以是数字（0-9）。因为 JavaScript 语言是区分大小写的，所以字母可以是从“A”到“Z”的大写字母和从“a”到“z”的小写字母。
- 合法的标识符示例：Number_hits，temp99，$credit 和 _name。
# 5.声明变量
__你可以用以下三种方式声明变量：__
- 使用关键词 var 。例如 var x = 42。这个语法可以用来声明局部变量和全局变量。
- 直接赋值。例如x = 42。在函数外使用这种形式赋值，会产生一个全局变量。在严格模式下会产生错误。因此你不应该使用这种方式来声明变量。
- 使用关键词 let 。例如 let y = 13。这个语法可以用来声明块作用域的局部变量。參考下方变量的作用域(Variable scope) 。
# 6.变量求值
__用 var 或 let 语句声明的变量，如果没有赋初始值，则其值为 undefined.__

__如果访问一个未声明的变量会导致抛出一个引用错误（ReferenceError）异常:__
```
var a;
console.log("The value of a is " + a); // a 的值是 undefined

console.log("The value of b is " + b);// b 的值是 undefined
var b;
// 在你阅读下面的‘变量声明提升’前你可能会疑惑

console.log("The value of c is " + c); // 未捕获的引用错误： c 未被定义

let x;
console.log("The value of x is " + x); // x 的值是 undefined

console.log("The value of y is " + y);// 未捕获的引用错误： y 未被定义
let y;
```
- 你可以使用 undefined 来判断一个变量是否已赋值。在以下的代码中，变量input未被赋值，因此 if 条件语句的求值结果是 true 。
```
var input;
if(input === undefined){
  doThis();
} else {
  doThat();
}
```
- 数值类型环境中 undefined 值会被转换为 NaN。
```
var a;
a + 2;    // 计算为 NaN
```
- 当你对一个 null 变量求值时，空值 null 在数值类型环境中会被当作0来对待，而布尔类型环境中会被当作 false。例如：
```
var n = null;
console.log(n * 32); // 在控制台中会显示 0
```
# 7.变量的作用域
__在函数之外声明的变量，叫做全局变量，因为它可被当前文档中的任何其他代码所访问。在函数内部声明的变量，叫做局部变量，因为它只能在当前函数的内部访问。__
- ECMAScript 6 之前的 JavaScript 没有 语句块 作用域；相反，语句块中声明的变量将成为语句块所在函数（或全局作用域）的局部变量。例如，如下的代码将在控制台输出 5，因为 x 的作用域是声明了 x 的那个函数（或全局范围），而不是 if 语句块。
```
if (true) {
  var x = 5;
}
console.log(x); // 5
```
- 如果使用 ECMAScript 6 中的 let 声明，上述行为将发生变化。
```
if (true) {
  let y = 5;
}
console.log(y); // ReferenceError: y 没有被声明
```
# 8. 变量提升
- JavaScript 变量的另一个不同寻常的地方是，你可以先使用变量稍后再声明变量而不会引发异常。这一概念称为变量提升；JavaScript 变量感觉上是被“提升”或移到了函数或语句的最前面。但是，提升后的变量将返回 undefined 值。因此在使用或引用某个变量之后进行声明和初始化操作，这个被提升的变量仍将返回 undefined 值。
```
/**
 * 例子1
 */
console.log(x === undefined); // true
var x = 3;


/**
 * 例子2
 */
// will return a value of undefined
var myvar = "my value";

(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();
```
上面的例子，也可写作：
```
/**
 * 例子1
 */
var x;
console.log(x === undefined); // true
x = 3;

/**
 * 例子2
 */
var myvar = "my value";

(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
})();
```
# 9. 函数提升
- 对于函数来说，只有函数声明会被提升到顶部，而函数表达式不会被提升。
```
/* 函数声明 */

foo(); // "bar"

function foo() {
  console.log("bar");
}


/* 函数表达式 */

baz(); // 类型错误：baz 不是一个函数

var baz = function() {
  console.log("bar2");
};
```
# 10.全局变量
- 你可以用关键字 const 创建一个只读的常量。常量标识符的命名规则和变量相同：必须以字母、下划线（_）或美元符号（$）开头并可以包含有字母、数字或下划线。
```
const PI = 3.14;
```
- 常量的作用域规则与 let 块级作用域变量相同。若省略const关键字，则该标识符将被视为变量。
