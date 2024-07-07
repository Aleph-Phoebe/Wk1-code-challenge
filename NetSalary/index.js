const readline = readline.createInterface({  // Creates an interface for reading input from the console
  input: process.stdin,
  output: process.stdout
});

// Function to calculate NHIF deduction
function NHIFDeduction(grossSalary) {
  if (grossSalary <= 5999) return 150;
  else if (grossSalary <= 7999) return 300;
  else if (grossSalary <= 11999) return 400;
  else if (grossSalary <= 14999) return 500;
  else if (grossSalary <= 19999) return 600;
  else if (grossSalary <= 24999) return 750;
  else if (grossSalary <= 29999) return 850;
  else if (grossSalary <= 34999) return 900;
  else if (grossSalary <= 39999) return 950;
  else if (grossSalary <= 44999) return 1000;
  else if (grossSalary <= 49999) return 1100;
  else if (grossSalary <= 59999) return 1200;
  else if (grossSalary <= 69999) return 1300;
  else if (grossSalary <= 79999) return 1400;
  else if (grossSalary <= 89999) return 1500;
  else if (grossSalary <= 99999) return 1600;
  else return 1700;
}

// Function to calculate NSSF deduction
function NSSFDeduction(grossSalary) { 
  return grossSalary * 0.06;
}

// Function to calculate PAYE (tax)
function PAYETax(grossSalary) { 
  if (grossSalary <= 24000) return grossSalary * 0.1;
  else if (grossSalary <= 32333) return 2400 + (grossSalary - 24000) * 0.25;
  else return 2400 + 8333 * 0.25 + (grossSalary - 32333) * 0.3;
}

function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const NHIF = NHIFDeduction(grossSalary);
  const NSSF = NSSFDeduction(grossSalary);
  const PAYE = PAYETax(grossSalary);
  
  const netSalary = grossSalary - (NHIF + NSSF + PAYE);
  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`NHIF Deduction: ${NHIF}`);
  console.log(`NSSF Deduction: ${NSSF}`);
  console.log(`PAYE (Tax): ${PAYE}`);
  console.log(`Net Salary: ${netSalary}`);
  
  rl.close();
}
// Please enter any data
rl.question('Enter your basic salary: ', (basicSalary) => {
  rl.question('Enter your benefits: ', (benefits) => {
    basicSalary = parseFloat(basicSalary); // Convert input to a number
    benefits = parseFloat(benefits); // Convert input to a number
    calculateNetSalary(basicSalary, benefits); // Calculate the net salary
  });
});
