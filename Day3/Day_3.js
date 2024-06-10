//Loops
// for(let count=0;count<=10;count++){
//     console.log("javascript,love you")
// }
//to cal sum of 1 to 5
let sum=0;
for(let i=1;i<=5;i++){
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
let string="patil";
for(let i of string){
console.log(i);
}
