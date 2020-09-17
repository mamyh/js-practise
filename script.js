function Person(name, age){
	this.name = name;
	this.age = age;
}
Person.prototype.play=function(){
	console.log(`${this.name} is playing`);
}
function Cricketer(type,name,age){
	Person.call(this,name,age);
   this.type = type;
}

Cricketer.prototype = Object.create(Person.prototype);

/*class Person{
	constructor(name,age){
		this.name =name;
		this.age = age;
	}
	static play(){
		console.log(`${this.name} is playing`);
	}
}*/

let sakib = new Cricketer('allRouder','sakib',35);

console.dir(sakib.name);

//recursion function in javascript

// f(n-1)+ n = f(n)

function sum(n){
	if(n=== 0){
		return 0;
	}else{

	   return sum(n-1)+n;
	}
}

console.log(sum(3));


