// creates initial grid at initialization

const container = document.querySelector(".container");
let gridPoint;
let gridPointList;

function renderGrid(scale) {
    container.setAttribute("style", `grid-template-columns: repeat(${scale}, 1fr); grid-template-rows: repeat(${scale}, 1fr);`)

    for (let i = 0; i < (scale * scale); i++) {
        gridPoint = document.createElement("div");
        gridPoint.classList.add("grid-point");
        container.appendChild(gridPoint);
    };

    // adds color to gridpoints after cursor enters div area

    gridPointList = document.querySelectorAll(".grid-point");
    for (let i = 0; i < gridPointList.length; i++) {
        gridPointList[i].addEventListener("mouseenter", function() {
            let redValue = Math.floor(Math.random() * 256);
            let greenValue = Math.floor(Math.random() * 256);
            let blueValue = Math.floor(Math.random() * 256);
            gridPointList[i].setAttribute("style", `background-color: rgb(${redValue}, ${greenValue}, ${blueValue});`);
        });
    };
}


// when this runs the gui breaks, need to fix
function addRandomColor(block) {
    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);
    block.setAttribute("style", "background-color: red;");
}
// end of problem function

renderGrid(16);

// renders reset button at the top of the page

const body = document.querySelector("body");
body.setAttribute("style", "display: flex; flex-flow: column nowrap; justify-content: center; align-items: center; background-color: navy;");
const resetBtn = document.createElement("button");
resetBtn.textContent = "Click to reset sketchpad";
body.prepend(resetBtn);
resetBtn.setAttribute("style", "margin: 2em auto; background-color: black; color: white; padding: 1.3em; width: 20vw; border-radius: 50px 50px 50px 50px;");

function clearGrid() {
    for (let i = 0; i < gridPointList.length; i++) {
        if (container.firstChild) {
            container.removeChild(container.firstChild);
        };
    };
}

function resetGrid() {
    clearGrid();
    scale = prompt("Please enter desired grid area (1-100)", "e.g. '64' will result in a 64x64 grid");
    if (isNaN(scale) || scale > 100 || scale < 1) {
        alert("ERROR: Please make sure that you only enter a number between 1 and 100 when reseting sketchpad!");
    } else {
      renderGrid(scale);
    }
}

resetBtn.addEventListener("click", resetGrid);