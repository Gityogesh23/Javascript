/*These que are first executed  in Day_3.js file and then paste here. b'z to reduce overhead of 
creating new html file.and link this js to it.
*/

/* 1) to print even  and odd numbers alternately  from 0 to 100 

for(let i=0;i<=100;i++){
    if(i%2===0){
    console.log("even number ="+i);
    }
    else if(i%2 !==0){
        console.log("odd number :"+i)
    }
}
*/

//same que as above by accepting input and check whether the number is odd/even
let even=prompt("enter the number");
if(even%2===0){
    console.log("The number is even ");
}
else{
    console.log("The number is odd ");
}

/*craete a game where you strat with any random game number ask the  user to keep guessing
the game number until user enters coorect value.

*/
/*
let gameNum=25;
let userNum=prompt("guess the game number: ");
console.log(userNum);
//prompt will always returns string =>so string and number will not able to match.
while(userNum != gameNum){
 userNum=prompt("you entered wrong number ,guess again : ");
}
console.log("Congratulation !! You Are Eligible Reward");
*/

/*
to print username in format =>by accepting it from user
format=>@yogesh6=>length at last
ans:
let fullName=prompt("Enter your name without spaces");
let username="@"+fullName+fullName.length;

console.log(username);
*/
