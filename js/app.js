const menu = document.getElementById("menu");
const showBtn = document.getElementById("show-btn");
const hideBtn = document.getElementById("hide-btn");
const navbar = document.getElementById("nav-bar");
const menuText = document.getElementsByClassName("menu-link");
const menuImg = document.getElementsByClassName("menu-bckg");
const transparentBtn = document.getElementsByClassName("btn-transparent");
const btnLine = document.getElementsByClassName("btn-line");
const scrollLine = document.getElementById("scroll-line")
const instaImg = document.getElementsByClassName("insta-img");
const footerSocials = document.getElementsByClassName("social");
const buttons = document.getElementsByClassName("btn");
const faqWrap = document.getElementsByClassName("faq-question-wrap");
const faqQuestions = document.getElementsByClassName("faq-question");

// Event Listeners
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
for (i = 0; i < instaImg.length; i++) {
    instaImg[i].addEventListener("mouseenter", instagramImgOverlay);
}
for (i = 0; i < instaImg.length; i++) {
    instaImg[i].addEventListener("mouseleave", instagramImgOverlayRemove);
}
for (i = 0; i < footerSocials.length; i++) {
    footerSocials[i].addEventListener("mouseenter", footerSocialsBackground);
}
for (i = 0; i < footerSocials.length; i++) {
    footerSocials[i].addEventListener("mouseleave", footerSocialsBackgroundRemove);
}
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseenter", mouseCircleSize);
}
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseleave", mouseCircleSizeBack);
}
for (i = 0; i < faqWrap.length; i++) {
    faqWrap[i].addEventListener("click", answerState);
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

function instagramImgOverlay(e) {
    const overlay = e.target.getElementsByClassName("insta-img-overlay")[0];
    const icon = e.target.getElementsByClassName("insta-icon")[0];
    overlay.style.opacity = "1";
    icon.style.animation = "show-insta-icon .3s"
}

function instagramImgOverlayRemove(e) {
    const overlay = e.target.getElementsByClassName("insta-img-overlay")[0];
    const icon = e.target.getElementsByClassName("insta-icon")[0];
    overlay.style.opacity = "0";
    icon.style.animation = "hide-insta-icon .3s"
}

function footerSocialsBackground(e) {
    const overlay = e.target.getElementsByClassName("social-overlay")[0];
    overlay.style.width = "100%";
    overlay.style.height = "100%";

}
function footerSocialsBackgroundRemove(e) {
    const overlay = e.target.getElementsByClassName("social-overlay")[0];
    overlay.style.width = "0%";
    overlay.style.height = "0%";
}

let circle = document.getElementById('mouse-circle');
const onMouseMove = (e) => {
    setTimeout(() => {
        circle.style.left = `${e.clientX - 20}px`;
        circle.style.top = `${e.clientY - 5}px`;
    },40);

}
document.addEventListener('mousemove', onMouseMove);

function mouseCircleSize(e) {
    circle.style.width = "25px";
    circle.style.height = "25px";
}
function mouseCircleSizeBack(e) {
    circle.style.width = "14px";
    circle.style.height = "14px";
}

function answerState(e) {
    const ans = e.target.parentNode.getElementsByClassName("answer")[0];
    const ansState = ans.classList[1];
    const ansId = parseInt(ans.id.substr(-1));
    if (ansState == "answer-hide") {
        ans.classList.replace("answer-hide", "answer-show");
    } else {
        ans.classList.replace("answer-show", "answer-hide");
    }

    for (i = 0; i < faqQuestions.length; i++) {
        let eId = parseInt(faqQuestions[i].getElementsByClassName("answer")[0].id.substr(-1));
        if (eId != ansId) {
            faqQuestions[i].getElementsByClassName("answer")[0].classList.replace("answer-show", "answer-hide");
        }
    }
}
