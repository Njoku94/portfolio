let nightBtnText = document.getElementById("nightBtnText");
let btn = document.getElementById("nightBtn");

var clicked = sessionStorage.getItem('clicked');
if(clicked == null){
    clicked = false;
}

//convert to bool
if(clicked === "true"){
    clicked = true;
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    nightBtnText.innerText = "Day Mode: 🌞";
}
else {
    clicked = false;
    nightBtnText.innerText = "Night Mode: 🌜";
}

btn.addEventListener("click", () => {
    clicked = !clicked;
    if(clicked){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        nightBtnText.innerText = "Day Mode: 🌞";
        sessionStorage.setItem('clicked', true);
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        nightBtnText.innerText = "Night Mode: 🌜";
        sessionStorage.setItem('clicked', false);
    }
});

function navFunction() {
    var x = document.getElementById("myNavBar");
    if (x.className === "navBar") {
    x.className += " respond";
    } else {
    x.className = "navBar";
    }
}