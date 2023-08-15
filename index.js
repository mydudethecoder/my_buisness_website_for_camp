const button = document.querySelector("#button1")
const text = document.querySelector("#text1")
const link = document.querySelector("#link")
function buttonClick() {
    alert("the link")
    text.innerText = "Wrong"
}
function reset() {
    text1.innerText = "Hi I am Lev, I am making a buisness here to sell websites this is a website to showcase my buisness. Hope you enjoy."
}
button1.onclick = buttonClick;
link.onclick = reset;