const readline = require('readline'); // Readline for reading inputs

const rl = readline.createInterface( // Reading input from the console
{
  input: process.stdin,
  output: process.stdout
});

// Give grade based on marks entered
function gradeGenerator() {
  rl.question("Input your Marks:",(Marks) => {
    if(isNaN(Marks) || Marks === ' ' ) {
      console.log("Wrong Input!");
      // Give an error message
      return gradeGenerator()
    }

    if (Marks > 79) {
      console.log("Your Grade is: A");
    } else if(Marks >= 60 && Marks <= 79) {
      console.log("Your Grade is: B" )
    } else if(Marks >= 49 && Marks <= 59) {
      console.log("Your Grade is: C" )
    } else if(Marks >= 40 && Marks <= 49) {
      console.log("Your Grade is: D" )
    } else {
      console.log("Your Grade is: E")
    }
    rl.close() //Close the readline

  })
}

gradeGenerator() // Start the generating process