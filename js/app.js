let menuIcon = document.querySelector(".menu-img");
let onButton = false;
let mainContainer = document.querySelector(".main");

function menuOnOff(btn) {
    btn ? document.querySelector(".navigation").style.display = "block" : document.querySelector(".navigation").style.display = "none"
}

menuIcon.onmouseover = () => {
    menuIcon.style.visibility ="hidden";
    onButton = true;
    menuOnOff(onButton);
}

mainContainer.onmouseover = () => {
    console.log("out");
    menuIcon.style.visibility = "visible";
    onButton = false;
    menuOnOff(onButton);
}