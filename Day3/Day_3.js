//Loops
// for(let count=0;count<=10;count++){
//     console.log("javascript,love you")
// }
//to cal sum of 1 to 3
let  sum=0;
for(let i=1;i<=3;i++){
sum=sum+i;
console.log("sum= "+sum);
}
//infinite loop
//for(;;); <=never ever run

// while loop
let j=1;
while(j<=3){
    console.log("j= "+j);
    j++;
}
//do while=runs at least one
let j1=1;
do{
    console.log("j1="+j1);//1
    j1++;//2
    j1=j1+1; //3
    console.log("j1="+j1)
}while(j1<=2);

//for-of
let str="patil";//directly iterate string
//iterator->character
for(let i of str){
console.log("i=",i);
}
//cal length of string
let size=0;
for(let val of str){
    console.log("value = ",val);
    size++;
}
console.log("string size =",size);

//for-in loop
let student={
    fname:"yogesh patil",
    age:29,
    cgpa:8.5,
    isPass:true

};
//to access students  fields using fo-in
for (let key in student){
    console.log("key=", key, " value= ",student[key]);
};

//String in js
let Str1="myString"
console.log("string length=",str.length);
for(let i=0;i<str.length;i++){
    console.log(str[5]);
//console.log(str.charAt(i));
}

const obj={
    item:'pen',
    price:15
};
console.log("The cost of",obj.item,"is",obj.price);//instead below
let output=`item is ${obj.pen} and its price is ${obj.price}`;//with template literal.
console.log(output);

//template Literals=>to avoid to write such
//legthy stat=>console.log("The cost of",obj.item,"is",obj.price);
let specialString=`This is a template literal`;
console.log(typeof specialString);

//String interpolation=>in template we can write string along with expression.
//
const a=10;
const b=5;
console.log(`fifteen is ${a+b} \n not ${2*a+b}`);
 
//Methods in JS
let str2="india";
new_str2=str2.toUpperCase();//or
console.log(str2);
console.log(new_str2);

//console.log("karanataka".toUpperCase());
 let str3="  maharashtra ";
 console.log(str3.trim());//removes white spaces  before first and after last character

 //str.slice(start,end?)
let str4="abcdefg";
console.log(str4.slice(1,5));

//str1.concat(str2)
let str5="yog";
let str6="kavi";
let result=str5+str6;
console.log("result= ",result);//one way
console.log(str5.concat(str6));//2nd way
console.log("yog"+"kavi");//3rd way

//str.replace(searchVal,newVal)
let str7="hello";
console.log(str7.replace("h","y"));
console.log(str7.replace("hel","we"));

//str.charAt(index)
let str8="i Love Js";
console.log(str8.charAt(5));
//to print value at specific index
console.log(str8[7]);
//we can't directly change the value at specific index
//not allow=>str[0]="S" solution is below
console.log(str8.replace("i","y"));//y love Js





