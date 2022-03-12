// Initializing some vars
const wrapper = document.querySelector(".wrapper");
let gridSize = Math.pow(16,2);

// This func draws the grid. 
const drawGrid = function(gridSize) {
    let gridWidth = Math.sqrt(gridSize);
    for (let i = 0; i < gridSize; i++) {
        wrapper.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
        const element = document.createElement('div');
        element.innerHTML = "X";
        wrapper.appendChild(element);
    // This parts colors divs when hovered over
    };
    const divsInGrid = document.querySelectorAll(".wrapper>div");
    divsInGrid.forEach( elem => {
        elem.addEventListener('mouseout', () => { 
            elem.style.backgroundColor = "red";
        })
    })
};
// Initial grid 16x16
drawGrid(gridSize)

// Get button and onclick promt for grid size, clears wrapper, invokes drawGrid. 
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    wrapper.innerHTML="";
    gridSize = prompt("Gridsize?");
    let maxGridSize = 100; 
    if (gridSize > maxGridSize){
        gridSize = Math.pow(maxGridSize,2); 
    }
    else{
        gridSize = Math.pow(gridSize,2)
    }
    drawGrid(gridSize);
    console.log(gridSize);
    
})