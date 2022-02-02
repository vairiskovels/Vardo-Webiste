const menu = document.getElementById("menu");
const showBtn = document.getElementById("show-btn");
const hideBtn = document.getElementById("hide-btn");
const navbar = document.getElementById("nav-bar");
const menuText = document.getElementsByClassName("menu-link");
const menuImg = document.getElementsByClassName("menu-bckg");
const transparentBtn = document.getElementsByClassName("btn-transparent");
const btnLine = document.getElementsByClassName("btn-line");
const scrollLine = document.getElementById("scroll-line")

document.getElementById("menu-btn").addEventListener('click', popUpMenu);
for (i = 0; i < menuText.length; i++) {
    menuText[i].addEventListener("mouseenter", changeMenuBackground);
}
for (i = 0; i < menuText.length; i++) {
    menuText[i].addEventListener("mouseleave", changeMenuBackgroundBack);
}
let j = 0;
for (i = 0; i < transparentBtn.length; i++) {
    transparentBtn[i].addEventListener("mouseenter", animateBtnLine.bind(null, i));
}
for (i = 0; i < transparentBtn.length; i++) {
    transparentBtn[i].addEventListener("mouseleave", animateBtnLineBack.bind(null, i));
}

// Function that pops-up the menu
function popUpMenu(e) {
    const menuShowStage = menu.classList[1];
    const menuBtnStage = showBtn.classList[1];

    // If menu is hidden and the btn is pressed, then menu pops up
    if (menuShowStage == "hide") {
        menu.classList.remove("hide");
        menu.classList.add("show");
        navbar.style.background = "none";
        for (i=0;i<5;i++) {
            menuText[i].classList.add("animate-text");
            menuText[i].classList.replace("hide", "show");
        }
    // Else menu hides
    } else {
        menu.classList.remove("show");
        menu.classList.add("hide");
        navbar.style.background = "#12141d";
        for (i=0;i<5;i++) {
            menuText[i].classList.remove("animate-text");
            menuText[i].classList.replace("show", "hide");
        }
    }

    // If menu btn is shown, then it hides
    if (menuBtnStage == "show-b") {
        showBtn.classList.remove("show-b");
        showBtn.classList.add("hide-b");
        hideBtn.classList.remove("hide-b");
        hideBtn.classList.add("show-b");
    // else it pops up
    } else {
        showBtn.classList.remove("hide-b");
        showBtn.classList.add("show-b");
        hideBtn.classList.remove("show-b");
        hideBtn.classList.add("hide-b");
    }

    e.preventDefault();
};

// Function that changes menu background back to dark blue
function changeMenuBackgroundBack(e) {
    menuImg[0].classList.replace("show-img", "hide-img");
    menuImg[1].classList.replace("show-img", "hide-img");
    menuImg[2].classList.replace("show-img", "hide-img");
    menuImg[3].classList.replace("show-img", "hide-img");
    menuImg[4].classList.replace("show-img", "hide-img");
}

// Function that changes menu background to according image
function changeMenuBackground(e) {
    let eId = e.target.id;

    if (eId == "menu-home") {
        menuImg[0].classList.replace("hide-img", "show-img");
    }
    if (eId == "menu-project") {
        menuImg[1].classList.replace("hide-img", "show-img");
    }
    if (eId == "menu-about") {
        menuImg[2].classList.replace("hide-img", "show-img");
    }
    if (eId == "menu-blog") {
        menuImg[3].classList.replace("hide-img", "show-img");
    }
    if (eId == "menu-contact") {
        menuImg[4].classList.replace("hide-img", "show-img");
    }

}

function animateBtnLine(i) {
    btnLine[i].style.width = "100%";
}
function animateBtnLineBack(i) {
    btnLine[i].style.width = "0%";
}

document.addEventListener("scroll", function(){
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    let scrollLineWidth = parseInt((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
    scrollLine.style.width = `${scrollLineWidth}%`
});
