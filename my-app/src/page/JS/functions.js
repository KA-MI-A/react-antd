function map(f, a) {
    let result = []; // 创建一个数组
    let i; // 声明一个值，用来循环
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const f = function(x) {
     return x * x * x;
  }
  let numbers = [0,1, 2, 5,10];
  let cube = map(f,numbers);
  console.log(cube);