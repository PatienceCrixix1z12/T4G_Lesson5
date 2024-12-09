// let heading = document.getElementById("heading");
// heading.innerHTML =" I am going to miss you all"
// let img = document.getElementById("img");
// img.innerHTML ="<img src='../images/image (4).jpg"


function changeButtonStyle(){
    let button = document.querySelector("button")
    button.style.backgroundColor = "blue";
   button.style.Color = "green";
   changeButtonStyle.innerHTML="hello";
}

let button = document.querySelector("button")
button.addEventListener("click", changeButtonStyle);