// let heading = document.getElementById("heading");
// heading.innerHTML =" I am going to miss you all"
// let img = document.getElementById("img");
// img.innerHTML ="<img src='../images/image (4).jpg"


// function changeButtonStyle(){
//     let button = document.querySelector("button")
//     button.style.backgroundColor = "blue";
//    button.style.Color = "green";
//    changeButtonStyle.innerHTML="hello";
// }

// let button = document.querySelector("button")
// button.addEventListener("click", changeButtonStyle);


// function changePaulstyle(){

// }
// let paul =document.querySelector("paul");  
let button =document.querySelector("button");
function openImage() {
    let image = document.querySelector(".img")
    image.style.display = "block"
    let close = document.querySelector(".close")
    close.style.display = "block"
    let button = document.querySelector("button")
    button.style.display = "none"

}
button.addEventListener("click", openImage,);

let close = document.querySelector(".close");
function closeImage(){
    let image = document.querySelector(".img")
    image.style.display = "none"
    let close = document.querySelector(".close")
    close.style.display = "none"
    let button = document.querySelector("button")
    button.style.display = "block"
}

close.addEventListener("click", closeImage);
