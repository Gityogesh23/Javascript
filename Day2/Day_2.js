alert("Hello Javascript Lovers ");

let a=40;
let b=20;
//console.log("sum = "+(a+b));or take let c=a+b then we can print c directly.
console.log("a+b= ",a+b);//60
// console.log("a-b=",a-b);//20
// console.log("a*b=",a*b);//800
// console.log("a/b=",a/b);//2
// console.log("a%b",a%b);//0
// console.log("a**b",a**b);//1.099511627776e+32
// console.log("a =", ++a ," b = ", ++b);

console.log("a =",a);
console.log("post increment val of a =", a++ );//post increment value of 41 remain,becauseit changes on next line.observe
console.log("after post increment on next line value of a =", a);

a-=5;
console.log(" value of a =a-5 =>", a);//36
a**=4;
console.log("value of a with exponantila opr= ", a);//1679616
console.log("40==20=>", a==b);//false
console.log("40!=20=>", a!=b);//true
//but
console.log("value of a =>" ,a);
let c="40";
let d=40;
console.log("40=='40'=>", c==d);//it gives  true in js.

//solution to that is strickter versions are used
console.log("40==='40'=>", c===d);//false
console.log("40!=='40'=>", a!==b);//true
//similarly .,<,>=,<= we know
//then logical opr
let e=50;
let f=60;
let cond1=e>f;
let cond2=e!=f;
console.log("Logical AND =>",cond1 && cond2);//false
console.log("Logical OR =>",cond1 || cond2);//true
console.log("Logical OR =>",!(cond1 || cond2));

//conditional statement
//multiple if statements can also allowed.
let age=16;
if(age>=18){
    console.log("you can vote");
}

if(age<18){
    console.log("you CANNOT VOTE");
}
//second example of if
let mode="light";
let color;
if(mode==="dark"){
    color="black";
}
if(mode==="light"){
    color="white";
}
console.log(color);

//if-else =>no need to write if repeatively.
 mode= "dark";
if(mode==="dark"){
    color="black";
}else{
    color="white"
}
console.log(color);

//write ood &even number logic using if-else
let num1=10;
if(num1 % 2===0){
    console.log("is Even_Number");
}else{
    console.log(num1,"is Odd_Number")
}
//else-if statements=>where we want to must com pare more mstatements.
mode="dark"; //cannot redeclared as above already declared.
if(mode==="dark"){
    color="black";
}else if(mode==="blue"){
    color="blue";

}else if(mode=="pink"){
    color="pink";
}else{
    color="white";
}
console.log(color);

//ternary operator

console.log(age>18 ? "Adult":"Not Adult");
//switch case statements
const expr="papayas";
switch(expr){
    case 'oranges':
        console.log('oranges are 180 rs.per kg');
    break;
    case 'Mango':
        console.log('Mango are 300 rs.per kg');
        break;
        case 'papayas':
            console.log('papayas are 80 rs.per kg');
        break;
        default:
            console.log('Sorry,we are out of ${expr}.');

}
