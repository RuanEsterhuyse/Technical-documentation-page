let header = document.getElementById("header");
console.log(header);
header.addEventListener("click", changeColor);

function changeColor(event){
event.target.classList.toggle("myheader");

}

