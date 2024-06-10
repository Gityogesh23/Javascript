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

//for-in
let student={
    fname:"yogesh patil",
    age:29,
    cgpa:8.5,
    isPass:true

};
for (let key in student){
    console.log("key=", key, " value= ",student[key]);
}