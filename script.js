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
//Cricketer.prototype =Object.create(Object.prototype);
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

console.dir(sakib);

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

function mamun(){

}

console.log(mamun());

for(let key in mamun){
	console.log(key);
}
let Man={
   hand:2,
   eys :2,
   walk:function(){
   	  console.log('he is walking ');
   }
}
console.dir(Object.getPrototypeOf([]));
console.dir(sakib);

function Shap(color){
    this.color = color;
}
Shap.prototype.duplicate = function(){
	console.log('duplicate from Shap');
}

function extend(Child,Parent){
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Circle(radius,color){
	Shap.call(this,color)
	this.radius = radius;
}
//Circle.prototype = Object.create(Object.prototype);
extend(Circle,Shap);
Circle.prototype.draw = function(){
	console.log('draw');
}
Circle.prototype.duplicate = function(){
	//Shap.prototype.duplicate.call(this);
	console.log('duplicate from circle');
}

function Square(size){
	this.size = size;
}
extend(Square,Shap);
Square.prototype.duplicate =  function(){
	console.log('duplicate from Square');
}
let c = new Circle(1,'red');
let s = new Shap();
let sq = new Square(10);

const  shapes =[
     new Circle(1,'green'),
     new Square(20)
 ];
 for(let shap of shapes)
 	shap.duplicate();
