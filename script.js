let background = document.querySelector("#background");

let body = document.querySelector("body");

background.addEventListener("click", function() {

    let randomIndex = Math.floor(Math.random() * 4);
    body.style.backgroundColor = colors[randomIndex];

});

let colors = [
    "#A8B5A2",
    "#7D8B6A",
    "#D8C7A3",
    "#B7A99A"
]