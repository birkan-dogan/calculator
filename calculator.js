// taking sections to show values
const prevDisp = document.getElementById("top");
const currDisp = document.getElementById("show");

// for holding value
let currOperand = ""; // this will hold the top section
let previousOperand = ""; // this will hold the show section
let operation = ""; // to hold operate

// for capturing method, the main container of buttons is taking
const btnContainer = document.getElementById("crunch");

btnContainer.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (e.target.classList.contains("number")) {
    // console.log(e.target.textContent);
    appendNumber(e.target.textContent);
    updateDisplay();
  }
  if (e.target.classList.contains("operation")) {
    chooseOperator(e.target.textContent);
    updateDisplay();
  }
});

const appendNumber = (num) => {
  //   console.log(num);
  if (num === "0" && currOperand === "0") return; // to avoid serial zeros when currOperand = 0
  if (num === "." && currOperand.includes(".")) return; // to avoid serial decimals like `...`

  if (currOperand.length > 9) return; // to avoid overflow from div

  currOperand += num;
};

const updateDisplay = () => {
  currDisp.textContent = currOperand;
  prevDisp.textContent = `${previousOperand} ${operation}`;
};

const chooseOperator = (op) => {
  //   console.log(op);
  if (previousOperand) {
    calculate();
  }
  // if only have one number, don't run calculate()

  // variable swaping
  operation = op;
  previousOperand = currOperand;
  currOperand = "";
};

const calculate = () => {
  let calculation = 0;
  const prev = Number(previousOperand);
  const current = Number(currOperand);

  switch (operation) {
    case "+":
      calculation = prev + current;
      break;
    case "-":
      calculation = prev - current;
      break;
    case "*":
      calculation = prev * current;
      break;
    case "/":
      calculation = prev / current;
      break;
    default:
      break;
  }
  console.log(calculation);
  currOperand = calculation;
};
