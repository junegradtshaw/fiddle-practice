//============APP.JS================
//Sum of all numbers to a given max number

//Ids for the HTML
var maxNumId=document.getElementById("maxNum");
var submitId=document.getElementById("submit");
var resultNumId = document.getElementById("resultMaxNum");
var resultId=document.getElementById("resultNum");
var resultMsgId=document.getElementById("resultMsg");
var errorMsgId=document.getElementById("errorMsg");

//Register a listener for a submit click
submitId.addEventListener("click", function() {

  //If negative maximum number, warn the user.
  var maxNum=Number(maxNumId.value);
  if (maxNum<0) {
    errorMsgId.setAttribute("style", "visibility:visible");
    resultMsgId.setAttribute("style", "visibility:hidden");
  }
  
  //Else, display the resulting sum.
  else {
    resultNumId.innerHTML = maxNumId.value;
    resultId.innerHTML = calculateSum(Number(maxNumId.value));
    resultMsgId.setAttribute("style", "visibility:visible");
    errorMsgId.setAttribute("style", "visibility:hidden");
  }
});
