//ARRAY AND ITS METHOD's

//in javascript array is dynamic and it can store diffrent kind of data.
//we can modify array in js .
let marks=[89,45,60,70];
console.log(marks);
console.log(marks.length);
let heroes=["hulk","captain usa","shaktiman"];
console.log(heroes);
console.log(typeof(heroes));//object
//Array indices and
//Looping over Array
console.log(marks[3]);
for(let i of marks){
    console.log(i);
}
marks[2]=100;//only possible in array not in strings=>b'z strings are immutable but array is mutable
console.log(marks[2]);

// for(let i of marks){ // print using for-of loop
//     console.log(i);
//}
for(let j=0;j<heroes.length;j++){
console.log(heroes[j]);
}
 let cities=["pune","mumbai","delhi","hyderabad"];
 for(let city of cities){
console.log(city.toUpperCase());

 }

 


