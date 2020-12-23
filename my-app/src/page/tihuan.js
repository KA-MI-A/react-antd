let a1 = 'aaabbbcccbbbffbbb';
let b1 = 'bbb';
let c1 = 'ddd';
 
function find(a,b,c){
	while(true){//直到a中没有b
		let num = a.indexOf(b);//确定a中b的开始下标
		console.log(num)
		if(num != -1){//查找到
			let Aarr = a.split('');//转换成数组
			a = '';
			let count = 0;
			Aarr.map((item,index)=>{
				// console.log(item,index);
				if(index>=num && index<num+b.length){
					if(count == 0){
						a += c;
					}
					count ++;
				}else{
					a += Aarr[index];
				}
			})
		}else{
			return a;
		}
	}
}
let f = find(a1,b1,c1);
console.log(f);
