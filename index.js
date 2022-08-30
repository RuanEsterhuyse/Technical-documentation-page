let header = document.getElementById("header");
console.log(header);
header.addEventListener("click", changeColor);

function changeColor(){
header.classList.add("myheader");
header.style.color ="white";

}



