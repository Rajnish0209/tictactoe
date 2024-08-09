// Select buttons by their class names and store them in variables
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");

// Store the button elements in an array for easy iteration
let btns = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

// Select control buttons and the paragraph element
let btn10 = document.querySelector(".btn10"); // Button for 'X'
let btn11 = document.querySelector(".btn11"); // Reset button
let btn12 = document.querySelector(".btn12"); // Button for 'O'
let para = document.querySelector("p"); // Paragraph (not used in this code)

// Variable to store the current selected value ('X' or 'O')
let val;

// Event listener for btn10 (X button)
btn10.addEventListener("click", () => {
  val = btn10.innerText; // Set val to 'X'
});

// Event listener for btn12 (O button)
btn12.addEventListener("click", () => {
  val = btn12.innerText; // Set val to 'O'
});

// Add event listeners to each button in the game grid
for (let btn of btns) {
  btn.addEventListener("click", () => {
    // If a value ('X' or 'O') is selected and the button is empty
    if (val) {
      btn.innerText = val; // Set the button's text to the selected value
      check(); // Check if there is a winner
    }
  });
}

// Event listener for the reset button (btn11)
btn11.addEventListener("click", refreshPage);

// Function to check if there is a winner
function check() {
  // Check all possible winning combinations for 'X' or 'O'
  if (
    (btn1.innerText === "X" &&
      btn2.innerText === "X" &&
      btn3.innerText === "X") ||
    (btn1.innerText === "O" && btn2.innerText === "O" && btn3.innerText === "O")
  ) {
    alert(`${val} is Win`); // Announce the winner
    refreshPage(); // Reload the page
    return;
  } else if (
    (btn4.innerText === "X" &&
      btn5.innerText === "X" &&
      btn6.innerText === "X") ||
    (btn4.innerText === "O" && btn5.innerText === "O" && btn6.innerText === "O")
  ) {
    alert(`${val} is Win`);
    refreshPage();
    return;
  } else if (
    (btn7.innerText === "X" &&
      btn8.innerText === "X" &&
      btn9.innerText === "X") ||
    (btn7.innerText === "O" && btn8.innerText === "O" && btn9.innerText === "O")
  ) {
    alert(`${val} is Win`);
    refreshPage();
    return;
  } else if (
    (btn1.innerText === "X" &&
      btn4.innerText === "X" &&
      btn7.innerText === "X") ||
    (btn1.innerText === "O" && btn4.innerText === "O" && btn7.innerText === "O")
  ) {
    alert(`${val} is Win`);
    refreshPage();
    return;
  } else if (
    (btn2.innerText === "X" &&
      btn5.innerText === "X" &&
      btn8.innerText === "X") ||
    (btn2.innerText === "O" && btn5.innerText === "O" && btn8.innerText === "O")
  ) {
    alert(`${val} is Win`);
    refreshPage();
    return;
  } else if (
    (btn3.innerText === "X" &&
      btn6.innerText === "X" &&
      btn9.innerText === "X") ||
    (btn3.innerText === "O" && btn6.innerText === "O" && btn9.innerText === "O")
  ) {
    alert(`${val} is Win`);
    refreshPage();
    return;
  } else if (
    (btn1.innerText === "X" &&
      btn5.innerText === "X" &&
      btn9.innerText === "X") ||
    (btn1.innerText === "O" && btn5.innerText === "O" && btn9.innerText === "O")
  ) {
    alert(`${val} is Win`);
    refreshPage();
    return;
  } else if (
    (btn3.innerText === "X" &&
      btn5.innerText === "X" &&
      btn7.innerText === "X") ||
    (btn3.innerText === "O" && btn5.innerText === "O" && btn7.innerText === "O")
  ) {
    alert(`${val} is Win`);
    refreshPage();
    return;
  }

  // If no winner, the function just returns
  return;
}

// Function to refresh the page, effectively resetting the game
function refreshPage() {
  window.location.reload();
}
