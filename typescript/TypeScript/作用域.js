var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 类变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
        console.log(local_num) //14      //局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用
        console.log('哈哈') //哈哈
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num); // 全局变量为: 12
console.log(Numbers.sval); // 静态变量    // 10
var obj = new Numbers();
console.log("类变量: " + obj.num_val); // 类变量: 13
var obj2 = new Numbers();
//console.log('局部变量：' + obj2.local_num)  //局部变量：undefined
console.log('局部变量：' + obj2.storeNum()) //14    //哈哈         //局部变量：undefined