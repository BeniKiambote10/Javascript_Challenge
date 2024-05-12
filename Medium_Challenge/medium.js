// MEDIUM: Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared evenly. 
// The function should return an interpolated string like Each person gets 4.00 slices of pizza; from our 8-slice pizza x being a decimal in case 
// there is no way to split the pizza evenly.




function sharePizza(totalSlices, numOfPeople) {

    //the totalslices divded by the num of people//
    const slicesPerPerson = totalSlices / numOfPeople;
  
    // collect the result to two decimal places .tofixed(2) makes sure the value is rounded to two decimal places //
    const collectSlices = slicesPerPerson.toFixed(2);
  
    // Return the interpolated string/template literals
    return `Each person gets ${collectSlices} slices of pizza; from our ${totalSlices} slice pizza`;
  }
  
//call the function sharePizza and put arguments in the parenthesis 
  console.log(sharePizza(8, 2)); 
  console.log(sharePizza(8, 3)); 
  console.log(sharePizza(21, 20));
  console.log(sharePizza(10, 3)); 
  

  function calculate() {
    //this is a function to display the sharePizza result on the screen when the button is clicked 
    const totalSlices = parseInt(document.getElementById("totalSlices").value);//used parsent to make sure that the string is changed to a integar else it will put NAN
    const totalPeople = parseInt(document.getElementById("totalPeople").value);
  
    const slicesPerPerson = totalSlices / totalPeople;
    const collectSlices = slicesPerPerson.toFixed(2);
  
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Each person gets ${collectSlices} slices of pizza from our ${totalSlices} slice pizza`;
  }
  