# 1.let 和 const 命令
## 1. let命令  
基本用法：  
ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
```
{
  let a = 10;
  var b = 1;
}
```
* for循环的计数器，就很合适使用let命令。
```
for (let i = 0; i < 10; i++) {
  // ...
}

console.log(i);
```
* 如果使用let，声明的变量仅在块级作用域内有效，最后输出的是 6。
```
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```
* for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
```
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
```
* 暂时性死区   ：
 + 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
 ```
 var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
- 上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。
*  不允许重复声明  ：
* let不允许在相同作用域内，重复声明同一个变量。
```
function func() {
  let a = 10;
  var a = 1;
}
```
 ## 2. 块级作用域：
 * 第一种场景，内层变量可能会覆盖外层变量。
 ```
 var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
```
* 第二种场景，用来计数的循环变量泄露为全局变量。
```
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
```
* ES6的块级作用域：  

* let实际上为 JavaScript 新增了块级作用域。
```
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
```
* ES6 允许块级作用域的任意嵌套。
```
{{{{
  {let insane = 'Hello World'}
  console.log(insane); // 报错
}}}};
```
+ 内层作用域可以定义外层作用域的同名变量。
```
{{{{
  let insane = 'Hello World';
  {let insane = 'Hello World'}
}}}};
```
* 块级作用域写法
```
{
  let tmp = ...;
  ...
}
```
## 3.const命令
* 基本用法：
+ const声明一个只读的常量。一旦声明，常量的值就不能改变。
```
const PI = 3.1415;
PI // 3.1415

PI = 3;
```
* const的作用域与let命令相同：只在声明所在的块级作用域内有效。
```
if (true) {
  const MAX = 5;
}
MAX
```
* const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
* const声明的常量，也与let一样不可重复声明。

* 本质:  
const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。

* 将对象冻结，应该使用Object.freeze方法
```
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
```
## 4.ES6 声明变量的六种方法 
* var命令和function命令  
* let和const命令  
* import命令和class命令  

## 5.顶层对象的属性
* 顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象
```
window.a = 1;
a // 1

a = 2;
window.a // 2
```
```
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined
```
* 上面代码中，全局变量a由var命令声明，所以它是顶层对象的属性；全局变量b由let命令声明，所以它不是顶层对象的属性，返回undefined。
## 6.globalThis 对象
* ES2020 在语言标准的层面，引入globalThis作为顶层对象。也就是说，任何环境下，globalThis都是存在的，都可以从它拿到顶层对象，指向全局环境下的this。

* 垫片库global-this模拟了这个提案，可以在所有环境拿到globalThis。
# 2.变量的解构赋值
## 1.数组的解构赋值
- 基本用法：
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构  
```
let [a, b, c] = [1, 2, 3];
```
- 这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。  
```
let [foo] = [];
let [bar, foo] = [1];
```
* 如果解构不成功，变量的值就等于undefined。
```
let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4
```
- 另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。

- 事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
```
function* fibs() {
  let a = 0;
  let b = 1;
  ```
  - 上面代码中，fibs是一个 Generator 函数（参见《Generator 函数》一章），原生具有 Iterator 接口。解构赋值会依次从这个接口获取值。
  * 默认值：解构赋值允许指定默认值。
  ```
  let [foo = true] = [];
  foo // true

  let [x, y = 'b'] = ['a']; // x='a', y='b'
  let [x, y = 'b'] = ['a', undefined]; // x='a',    y='b'
   ```
 *  注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
```
  let [x = 1] = [undefined];
   x // 1

   let [x = 1] = [null];
   x  // null
```
* 上面代码中，如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。
## 2.对象的解构赋值
## 简介：
- 解构不仅可以用于数组，还可以用于对象。
```
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"
```
- 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
```
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' };
baz // undefined
```
- 如果解构失败，变量的值等于undefined。

- 默认值：  
对象的解构也可以指定默认值。