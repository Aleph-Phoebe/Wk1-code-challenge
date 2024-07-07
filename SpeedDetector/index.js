const readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Function to check speed
function speedDetector() { 

  rl.question("What is your speed?: ", (speed) => {
    speed = parseInt(speed); 

    if(isNaN(speed)){  // Check if speed entered is a number  
      console.log("Enter a valid Number")
      speedDetector();
    } else if (speed <= 70) {
      console.log("Ok");
      rl.close();
    } else {  //  Calculation
      const highSpeed = speed - 70;
      const demeritPoints = Math.floor(highSpeed / 5);
  
    //Check if the demeritPoints are more than 12
      if(demeritPoints > 12) {
        console.log("license suspended");
        rl.close();
      } else {
        console.log(`Points: ${demeritPoints}`);
        rl.close();
      }
    }
  });
}

