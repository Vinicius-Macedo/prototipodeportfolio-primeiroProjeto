var x = document.getElementsByTagName("ul")[0];
const menuItems = document.querySelectorAll('nav a[href^="#"');

function funcaoMenu() {
    innerWidth < 1024 && ("block" === x.style.display ? (document.getElementsByTagName("body")[0].style.overflow = "visible", x.style.display = "none") : (x.style.display = "block", document.getElementsByTagName("body")[0].style.overflow = "hidden"))
}

function cta() {
    window.scroll({
        top: document.getElementById("fale-comigo").offsetTop - 80,
        behavior: "smooth"
    })
}

function scrollToIdOnClick(e) {
    document.getElementsByTagName("body")[0].style.overflow = "visible", innerWidth < 1024 && (x.style.display = "none"), e.preventDefault();
    const t = e.target.getAttribute("href"),
        o = document.querySelector(t).offsetTop;
    window.scroll({
        top: o - 80,
        behavior: "smooth"
    })
}
window.addEventListener("mouseup", function(e) {
    innerWidth < 1024 && e.target != document.getElementsByTagName("nav")[0] && e.target.parentNode != document.getElementsByTagName("nav")[0] && (document.getElementsByTagName("body")[0].style.overflow = "visible", x.style.display = "none")
}), menuItems.forEach(e => {
    e.addEventListener("click", scrollToIdOnClick)
});
const navbar = document.querySelector("nav");
window.onscroll = function() {
    window.scrollY >= 100 ? navbar.classList.add("scroll") : navbar.classList.remove("scroll")
};
