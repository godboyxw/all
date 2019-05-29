function f2(){
    console.log('f2');
}


function f1(callback) {
    setTimeout(function () {
        // f1的任务代码
        console.log('f1');
        // callback();
    }, 1000);
    callback();
}
f1(f2);







function title(value){//这是回调函数！！！！
    console.log(value);
}
function main(title, value){//这个主函数:在参数列表中，title作为一个参数传递进来，也就是上文说的 参数化函数；然后value这个值正是title（）函数中所需要的。
    console.log("我是主函数");
    title(value);//结果为：'我是回调函数'。——————然后在这行这个title()，它就是回调函数咯。
}
main(title,"我是回调函数");//title参数加上()后，就会变回一个函数，并会被执行一次。
//PS:看清楚，调用的是main()函数，意味着先执行main()，这时已经执行了主函数，title()被main()在函数体中执
