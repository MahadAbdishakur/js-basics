
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Welcome to the password validator tool")
reader.question("type in you best password", function(answer){
  if(answer.length >= 10){
    console.log("success, your password meets the requirements")
  }else{
    console.log("your password doesnt meet the requirments");
  }
});