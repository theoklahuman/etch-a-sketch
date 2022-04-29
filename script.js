const container = document.querySelector("#container");
let div;
const button = document.querySelector("button");

/*
    for (let i = 0; i < 256; i++) {
        div = document.createElement("div");
        div.style.width = "20px";
        div.style.height = "20px";
        container.appendChild(div);
        hover(div);
        clearPad(div);
    };

    */

    function hover(div) {
        div.addEventListener("mouseover", function(event){
            div.style.background = "black";
        })
    }


function clearPad(div) {
    button.addEventListener("click", function(event) {
        div.style.background = "white";
    })
}

function makeGrid(num) {
    for (let i = 0; i < (num * num); i++) {
        div = document.createElement("div");
        div.style.width = "10px";
        div.style.height = "10px";
        container.appendChild(div);
        container.style.width = `${num * 10}px`;
        container.style.height = `${num * 10}px`;
        hover(div);
        clearPad(div);
}
}