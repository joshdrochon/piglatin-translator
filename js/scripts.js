var vowels = ['a','e','i','o','u'];
$(document).ready(function(){
  $("#form1").submit(function(event){
    event.PreventDefault();

    var doEverything = function(){
      //takes user input
      var userInput = $("#input").val();
      /*   console.log(userInput); */
      var final = addSuffix(userInput);
      //clear form
      $("#input").val(' ');
  }

var addSuffix = function(userInput){
//est. new String
  var newString = "";
//est. boolean variable
  var isConsonant = true;
//loops through vowels array and compares the first character of the string to determine vowel or consonant
  for (var i = 0; i<vowels.length; i++){
    if (userInput[0]===vowels[i]){
      //if first character is a vowel
      newString = userInput + "way";
      console.log(newString);
      isConsonant = false;
    }

    console.log(isConsonant);
  }

var temp;
var remaining;
//first character is a consonant
    if (isConsonant === true){
    //iterates through string
      for (var i = 1; i<userInput.length; i++){
      //iterates through vowel array
        for (var j = 1; j<vowels.length; j++){
          if (userInput[i]===vowels[j]){
            //holds the first part of the string
            temp = userInput.slice(0,i);
            //concatenate pieces of the string together
              remaining = userInput.slice(i, userInput.length);
              console.log(remaining);
              newstring = remaining + temp + "ay";
              console.log(newstring);
              return newstring;
          }
        }
      }
    }
  return newstring;
}

doEverything();
  });
});
