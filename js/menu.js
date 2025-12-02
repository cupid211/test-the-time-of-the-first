/*Menu ---------------------------------- */

const menuWrapper = document.getElementById("menu-wrapper");
const headerNav = document.getElementById("header-nav");
const menu = document.querySelector('#menu');
const goBack = document.querySelector('#btn-go-back');
const mobileMenu = document.querySelector('#mobile-menu');
const headerDiv = document.getElementById("header-div");
const headerInfo = document.getElementById("header-info");

const checkbox = Array.from(menuWrapper.querySelectorAll('input[type="checkbox"]'));


let mobileListenersAdded = false;
let desktopListenersAdded = false;

let desktopMouseEnter, desktopMouseLeave;
let desktopMenuChange;

export function Menu() {
    const mediaQuery = window.matchMedia("(max-width: 1200px)");

    function handleResize(e) {
        if (e.matches) {
            // MOBILE
            resetDesktopStyles();
            initMobile();
        } else {
            // DESKTOP
            resetMobileStyles();
            initDesktop();
        }
    }

    handleResize(mediaQuery);
    mediaQuery.addEventListener("change", handleResize);
}


//    MOBILE

function initMobile() {
    if (!mobileListenersAdded) {
        mobileMenu.addEventListener('change', onMobileMenuChange);
        mobileListenersAdded = true;
    }

    if (headerDiv.contains(headerInfo)) {
        headerDiv.removeChild(headerInfo);
        headerNav.appendChild(headerInfo);
    }

    goBack.addEventListener('click', () => {
        menu.checked = false;
    })
}

function onMobileMenuChange() {
    if (mobileMenu.checked) {
        headerDiv.style.backgroundColor = '#1F1F1F';
        document.body.style.overflow = 'hidden';
        headerNav.style.overflowY = 'scroll';
    } else {
        resetMobileStyles();
        checkbox.forEach(element => {
            element.checked = false
        });
    }
}

function resetMobileStyles() {
    mobileMenu.checked = false;
    document.body.style.overflow = '';
    headerNav.style.overflowY = '';
    headerDiv.style.backgroundColor = '';

}



//    DESKTOP

let timeout;
function initDesktop() {
    if (!desktopListenersAdded) {
        desktopMouseEnter = () => {
            clearTimeout(timeout);
            menu.checked = true;
            headerNav.style.backgroundColor = '#1F1F1F';
        };

        desktopMouseLeave = () => {
            timeout = setTimeout(() => {
                menu.checked = false;
                headerNav.style.backgroundColor = '';
            }, 700);
        };

        desktopMenuChange = () => {
            headerNav.style.backgroundColor = menu.checked ? '#1F1F1F' : '';
        };

        menuWrapper.addEventListener("mouseenter", desktopMouseEnter);
        menuWrapper.addEventListener("mouseleave", desktopMouseLeave);
        menu.addEventListener("change", desktopMenuChange);
        desktopListenersAdded = true;
    }


    if (headerNav.contains(headerInfo)) {
        headerNav.removeChild(headerInfo);
        headerDiv.appendChild(headerInfo);
    }
}

function resetDesktopStyles() {
    menu.checked = false;
    headerNav.style.backgroundColor = '';
    checkbox.forEach(element => {
        element.checked = false
    });
    if (desktopListenersAdded) {
        menuWrapper.removeEventListener("mouseenter", desktopMouseEnter);
        menuWrapper.removeEventListener("mouseleave", desktopMouseLeave);
        menu.removeEventListener("change", desktopMenuChange);
        desktopListenersAdded = false;
    }
}
