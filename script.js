var x = document.getElementsByTagName("ul")[0];
const menuItems = document.querySelectorAll('nav a[href^="#"');

function funcaoMenu() {
    innerWidth < 1024 && ("block" === x.style.display ? x.style.display = "none" : x.style.display = "block")
}

function cta() {
    window.scroll({
        top: document.getElementById("fale-comigo").offsetTop - 80,
        behavior: "smooth"
    })
}

function scrollToIdOnClick(e) {
    e.preventDefault();
    const o = e.target.getAttribute("href"),
        n = document.querySelector(o).offsetTop;
    window.scroll({
        top: n - 80,
        behavior: "smooth"
    })
}

window.addEventListener("mouseup", function(e) {
    innerWidth < 1024 && (x.style.display = "none")
}), menuItems.forEach(e => {
    e.addEventListener("click", scrollToIdOnClick)
});
const navbar = document.querySelector("nav");
window.onscroll = function() {
    window.scrollY >= 100 ? navbar.classList.add("scroll") : navbar.classList.remove("scroll")
};
