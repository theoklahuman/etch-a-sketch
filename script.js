const container = document.querySelector("#container");

let div;

    for (let i = 0; i < 256; i++) {
        div = document.createElement("div");
        div.style.width = "20px";
        div.style.height = "20px";
        container.appendChild(div);
        hover(div);
    };

    function hover(arg) {
        arg.addEventListener("mouseover", function(event){
            arg.style.background = "black";
        })
    }
