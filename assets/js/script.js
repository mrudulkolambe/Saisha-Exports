let mobile = document.getElementById('mobile');
let body = document.querySelector("body");
function toggleNav(){
    mobile.classList.add("shift");
    mobile.classList.remove("unshift");
    // body.style.overflowY = "hidden";
}
function hideNav(){
    mobile.classList.add("unshift");
    mobile.classList.remove("shift");
    body.style.overflowY = "scroll";
}