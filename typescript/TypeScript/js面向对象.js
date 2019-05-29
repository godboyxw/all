//js面向对象，用于需要产生大批量的具有不同状态、行为的对象实例时用到的方法，此时比面向过程好用！
function Bubble(x,y) { //构造函数  
	this.x =x
	this.y=y
}

Bubble.prototype.name = function () { //原型链
  console.log('i am god')
}

var tom = new Bubble(1,2) //new实例化对象

tom.name() //调用原型链上的name方法  //i am god

console.log(tom)  //Bubble { x: 1, y: 2 }



function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);

console.log(p.toString())  //(1, 2)

console.log(p)  //Point { x: 1, y: 2 }



class Dot {
  constructor(x, y) { //constructor方法，这就是构造方法，而this关键字则代表实例对象。也就是说，ES5 的构造函数Point，对应 ES6 的Point类的构造方法。
    this.x = x;
    this.y = y;
  }

  toString() { //还定义了一个toString方法。注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var p =new Dot(1,2)  //使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致
console.log(p.toString())  //(1, 2)
console.log(p)   //Dot { x: 1, y: 2 }