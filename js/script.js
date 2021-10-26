const container = document.querySelector(".container");
let gridPoint;

for (let i = 0; i < (16 * 16); i++) {
    gridPoint = document.createElement("div");
    gridPoint.classList.add("grid-point");
    container.appendChild(gridPoint);
}

let gridPointList = document.querySelectorAll(".grid-point");
for (let i = 0; i < gridPointList.length; i++) {
    gridPointList[i].addEventListener("mouseenter", function() {
        gridPointList[i].setAttribute("style", "background-color: red;");
    });
}