window.onscroll = function () { myFunction() };

let navbar1 = document.getElementById('navbar');
function myFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 350) {
        navbar1.style.backgroundImage = "linear-gradient(to left, rgb(106, 171, 56), white)";
    }
    else {
        navbar1.style.backgroundImage = "none";
    }
}
let menu = document.getElementById('menu');
let notescontent = document.getElementById('notescontent');
let videocontent = document.getElementById('videocontent');
let shopcontent = document.getElementById('shopcontent');
let dresscontent = document.getElementById('dresscontent');
let crosstabnotes = document.getElementById('crosstabnotes');
let crosstabvideo = document.getElementById('crosstabvideo');
let crosstabshop = document.getElementById('crosstabshop');
let crosstabdress = document.getElementById('crosstabdress');
let sidetabnotes = document.querySelector('.sidetabnotes');
let sidetabvideo = document.querySelector('.sidetabvideo');
let sidetabshop = document.querySelector('.sidetabshop');
let sidetabdress = document.querySelector('.sidetabdress');
let nav = document.getElementById('nav_Id');

menu.addEventListener('click', () => {
    if (nav.style.display == 'none') {
        nav.style.display = 'block';
        menu.classList.add('fa-xmark');
    }
    else {
        nav.style.display = 'none';
        menu.classList.remove('fa-xmark');
    }
})

notescontent.addEventListener("click", () => {
    sidetabnotes.style.display = "block"
})
videocontent.addEventListener("click", () => {
    sidetabvideo.style.display = "block"
})
shopcontent.addEventListener("click", () => {
    sidetabshop.style.display = "block"
})
dresscontent.addEventListener("click", () => {
    sidetabdress.style.display = "block"
})
crosstabnotes.addEventListener("click", () => {
    sidetabnotes.style.display = "none";
})
crosstabvideo.addEventListener("click", () => {
    sidetabvideo.style.display = "none";
})
crosstabshop.addEventListener("click", () => {
    sidetabshop.style.display = "none";
})
crosstabdress.addEventListener("click", () => {
    sidetabdress.style.display = "none";
})