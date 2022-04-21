const container = document.querySelector("#container");

let div = document.createElement("div");
div.style.background = "blue";


function makeDiv() {
    for (let i = 0; i < 256; i++) {
        div = document.createElement("div");
        div.style.backgroundColor = "red";
        div.textContent = "1";
        div.style.width = "20px";
        div.style.height = "20px";
        container.appendChild(div);   
    };
}

