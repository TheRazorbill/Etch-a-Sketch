let container = document.getElementById('container');
let button = document.getElementById('btn');

function createGrid(size) {
    container.innerHTML = '';
    
    let totalSquares = size * size;
    
    let sizeSquares = 960 / size;

    for (let index = 0; index < totalSquares; index++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute("class", "grid-square");
        
        newDiv.style.height = `${sizeSquares}px`;
        newDiv.style.width = `${sizeSquares}px`;
        
        container.appendChild(newDiv);
        
        newDiv.addEventListener('mouseover', (event) => {
            const square = event.target;


            if (!square.style.backgroundColor) {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                
                square.style.opacity = 0.1;
                
                square.setAttribute('data-opacity', 0.1);

            } else {
                let currentOpacity = parseFloat(square.getAttribute('data-opacity'));
                
                if (currentOpacity < 1) {
                    let newOpacity = currentOpacity + 0.1;
                    square.style.opacity = newOpacity;
                    square.setAttribute('data-opacity', newOpacity);
                }
            }
        });
    }
}

button.addEventListener('click', () => {
    let newSize = prompt('How many squares per side? (Máx: 100)');

    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Please, enter a number between 1 and 100.');
    }
});

createGrid(16);