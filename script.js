// Assignment Code
//"Always start in Laymen Psuedo Code and then actually code"
var generateBtn = document.querySelector("#generate");
var userResults=[];
var numArr=[1,2,3];
var lowerArr=['a','b','c'];
var upperArr=['A','B','C'];
var islower;
var isUpper;
var userLength;
var finalpw="";

//function (formula) return fx (toss the data somewhere)
function generatePassword(){
    // WHEN prompted for the length of the password
         // VALIDATE LATER least 8 characters and no more than 128 characters
   
    //lowercase, need to ask user for lowers (confirm)
    isLower= confirm("do you want lowers?");
    //what should we do? add the lowers to the results (userResults)
    if(isLower==true){
        //userResults.push(lowerArr)
        for(var i=0;i<lowerArr.length;i++){
            userResults.push(lowerArr[i]);
        }
        //i=0=1=2=3
    }

    //uppercase, 


  
    //numeric, and/or 
    
    //special characters
            // LATER VALIDATE should be validated and at least one character type should be selected

    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    


    //ask for user prompts
    //ask confirms() and prompts()
    userlength= prompt("what is the length?");  //this is defaulted as a string, you need to convert to a num ( parseInt() )

    //based on prompts make pw

    //run a forloop based on the userlenght
    //randomly select a value from the result array and add it to your finalpw
    //toss the password out
    return " " ;

}

// Write password to the #password input
function writePassword() {
    // WHEN the password is generated

  var password = generatePassword(); //function call activating it
  //data is caught in the variable called password
    // THEN the password is  written to the page
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
///WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);


//display fx
function mult1(x,y){
    console.log(x*y)

}

mult1(2,3); //console.log 6
mult1(23123,2332);

function mult2(a,b){
    return a*b;
}

//1. console.log()
console.log(mult2(23213,4233));
//2. store it into a variable

var result= mult2(3,4); //12
console.log(result);


