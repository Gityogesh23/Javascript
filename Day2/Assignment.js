//que 1:Get user to input a number using prompt("Enter a number:") check if the number is multiple of 5 or Not?
/* 
let num=prompt("enter the number:")


 if(num % 5==0){
    console.log("number is multiple of 5");
 }else{
    console.log("number is Not a multiple of 5");
 }
*/
/* Que2.Write a code which can give grades to students according to their score.
80-100=>A
70-79=>B
60-69=>C
50-59=>D
<40=>E

*/
let score=prompt("Enter the score :");
let grade;

 
if(score>=80 && score<=100){
    console.log("grade A");
}
else if(score>=70 && score<=79){
    console.log("greade B");
}
else if(score>=60 && score<=69){
    console.log("grade C");

}
else if(score>=50 && score <=59){
    console.log("grade D");
}
else{
    console.log("grade E");
}
