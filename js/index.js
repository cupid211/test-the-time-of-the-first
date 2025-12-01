const menuWrapper = document.getElementById("menu-wrapper");
const headerNav = document.getElementById("header-nav");
const menu = document.querySelector('#menu');
let timeout;

menuWrapper.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    menu.checked = true;
    headerNav.style.backgroundColor = '#1F1F1F';
});

menuWrapper.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
        headerNav.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        menu.checked = false;
    }, 700);
});

menu.addEventListener('change', () => {
    if (menu.checked) {
        headerNav.style.backgroundColor = '#1F1F1F';
    } else {
        headerNav.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }
});