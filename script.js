// Initalize grid size and generate default grid
let usrInputGridSize = 16;
draw(usrInputGridSize);

// Ask user for grid size. Max is capped to 100
const button = document.querySelector('button');
button.addEventListener('click', () => {
    usrInputGridSize = prompt('How many squares in grid u wants?');

    if (usrInputGridSize > 100) {
        usrInputGridSize = prompt('Sorry, cannot be more than 100');
    } else {
        document.querySelectorAll('.square').forEach(e => e.remove());
        draw(usrInputGridSize);
    }
});

// Function to generate grid and hover effect
function draw(usrInputGridSize) {

    let numberOfSquares = Math.pow(usrInputGridSize, 2)

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

}