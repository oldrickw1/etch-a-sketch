// Initialize grid
const wrapper = document.querySelector(".wrapper");
let amount = Math.pow(16,2);
for (let i = 0; i < amount; i++) {
    const element = document.createElement('div');
    element.innerHTML = "X";
    wrapper.appendChild(element);
}

// Set different bg-color when hovered over for all divs in grid
const divsInGrid = document.querySelectorAll(".wrapper>div");
divsInGrid.forEach( elem => {
    elem.addEventListener('mouseout', () => { 
        elem.setAttribute('style', "background-color:red;")
    })
})