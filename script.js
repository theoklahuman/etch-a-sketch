const container = document.querySelector("#container");
const buttonClear = document.querySelector("#btn");
const newGrid = document.querySelector("#make-grid");
let div;

for (let i = 0; i < 256; i++) {
        div = document.createElement("div");
        div.style.width = "10px";
        div.style.height = "10px";
        container.appendChild(div);
        container.style.width = "160px";
        container.style.height = "160px";
        hover(div);
        clearPad(div);
    };


    function hover(div) {
        div.addEventListener("mouseover", function(event){
            div.style.background = "black";
        })
    }

function clearPad(div) {
    buttonClear.addEventListener("click", function(event) {
        div.style.background = "white";
    })
}

function makeGrid(num) {
    if (num > 100 || num < 0) {
        alert("please choose minimum of 1 and maximum of 100");
        defaultGrid();
    } else {
        for (let i = 0; i < (num * num); i++) {
        div = document.createElement("div");
        div.style.width = "10px";
        div.style.height = "10px";
        container.appendChild(div);
        container.style.width = `${num * 10}px`;
        container.style.height = `${num * 10}px`;
        hover(div);
        clearPad(div);
};
}
}

newGrid.addEventListener("click", function(event) {
    removeAllSquares(container);
    makeGrid(prompt("how many squares per side?"));
})

function removeAllSquares(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function defaultGrid() {
    for (let i = 0; i < 256; i++) {
        div = document.createElement("div");
        div.style.width = "10px";
        div.style.height = "10px";
        div.id = "squares";
        container.appendChild(div);
        container.style.width = "160px";
        container.style.height = "160px";
        hover(div);
        clearPad(div);
    };
}