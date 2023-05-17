// Store number of squares in grid to a variable
let numberOfSquares = Math.pow(16, 2)

// Set square dimension based on numberOfSquares
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


// Add hover effect
  const gridSquares = document.querySelectorAll('.square');

gridSquares.forEach((square) => {

    square.addEventListener('mouseover', () => {
        square.classList.add('hover');
    })
});
