// store number of squares in a variable
let numberOfSquares = 16;

// Create div square
// your JavaScript file
const container = document.querySelector('#container');

// create # of squares in a loop 
for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }



// Assign CSS style - calculate height and width based on number of squares
