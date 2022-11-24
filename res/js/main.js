const myDiv = document.getElementById("myDiv");
const myDiv2 = document.getElementById("myDiv2");
const myP = document.getElementById("myP");
const myP2 = document.getElementById("myP2");

const changeColor = (div, color) => {
    myDiv.style.backgroundColor =  color;
}
const changeTextColor = (p, color) => {
    p.style.color = color;
}
myDiv.onclick = () => {
    changeColor(myDiv, "pink")
}
myDiv2.onclick = () => {
    changeColor(myDiv2, "black")
}
myP.onclick = () => {
    changeTextColor(myP, "red")
}
myP2.onclick = () => {
    changeTextColor(myP2, "blue")
}