//Write one function that can dynamically print the value of the exercise for the day //
//factory function with the name exerciseOfTheDay
//closure is an function within another function an outer function and a inner function 
function exerciseOfTheDay(){

  let todayExercise = ""; //holds the value for the exercise 


//created a inner function and within that inner function 
//make a if else statement to return today exercise 
//closure function the inner function has access to everything in the outer function
return function (exerciseName){
  if(exerciseName) {
      todayExercise = exerciseName;
      console.log(`Today's Exercise: ${todayExercise}`);
  }else {
      console.log(`Today's Exercise: ${todayExercise}`)
       return todayExercise
  }
};
}
const exercise = exerciseOfTheDay();

console.log(exercise("Running")); 
console.log(exercise("Swimming"));
console.log(exercise("Dancing")); 
console.log(exercise("Fencing")); 


  

//function to display today's exercise when the name of the button is pushed 
function setExercise(exerciseName){
  document.getElementById("exerciseResult").textContent = "Today's Exercise: " + exerciseName;
}