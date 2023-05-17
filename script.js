// store number of squares in a variable
let numberOfSquares = 16;

// set square dimension based on numberOfSquares
const squareDimension = 400 / Math.sqrt(numberOfSquares);

// Create grid
const container = document.querySelector('#container');

for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', i+1);
    square.classList.add('square');
    square.style = `width: ${squareDimension}px; height: ${squareDimension}px;`;
    container.appendChild(square);
  }


// Assign CSS style - calculate height and width based on number of squares
