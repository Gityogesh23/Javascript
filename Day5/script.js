//Functions in js
function myFunction(msg){ // single parameter fun
    //console.log("i love functions inside javascript");
    console.log(msg);

}
function myFunction(msg1,msg2){
    console.log(msg1+ " "+ msg2);
}
myFunction("love you js");
myFunction("love you",100);

function sum(x,y){ 
 //fun params are always local variables=> are x and y for funtion sum.
 //i.e x and y are of having blocks scope 
 s=x+y;
    return s;
}
let val=sum(3,4);
console.log(val);