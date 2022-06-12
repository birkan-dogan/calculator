// taking sections to show values
const prevDisp = document.getElementById("top");
const currDisp = document.getElementById("show");

// for holding value
let currOperand = ""; // this will hold the top section
let previousOperand = ""; // this will hold the show section

// for capturing method, the main container of buttons is taking
const btnContainer = document.getElementById("crunch");

btnContainer.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (e.target.classList.contains("number")) {
    // console.log(e.target.textContent);
    appendNumber(e.target.textContent);
    updateDisplay();
  }
});
const appendNumber = (num) => {
  //   console.log(num);
  if (num === "0" && !currOperand) return; // to avoid serial zeros when currOperand = 0
  if (num === "." && currOperand.includes(".")) return; // to avoid serial decimals like `...`

  currOperand += num;
};

const updateDisplay = () => {
  currDisp.textContent = currOperand;
};
