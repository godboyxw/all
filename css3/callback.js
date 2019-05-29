var data
function f1(){
   setTimeout(function(){
    console.log('f1');
    data = 111
   },500)
}

function f2(){
    console.log('f2');
    console.log(data); //undefined
}

f1()
f2()


var data
function f1(callback){
   setTimeout(function(){
    console.log('f1');
    data = 111
    callback() //作为回调函数调用
    // f2()  //直接调用
   },500)
}

function f2(){
    console.log('f2');
    console.log(data); //111
}

f1(f2)