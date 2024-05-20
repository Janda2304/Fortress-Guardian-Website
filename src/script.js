let hamburger = document.getElementById("hamburger-menu-icon");
let menu = document.getElementById("navigation");
let headerBackground = document.getElementsByClassName("header-container")[0];
let isOpen = false;

let screenWidth = window.matchMedia("(min-width: 768px)");

hamburger.addEventListener("click", toggleMenu);


function resetStyling()
{
    menu.removeAttribute("style");
    headerBackground.removeAttribute("style");
    hamburger.classList.remove('fa-times');
    hamburger.classList.add('fa-bars');
    isOpen = false;
}

function toggleMenu()
{
    if (!isOpen)
    {
        menu.style.display = "flex";
        menu.style.animation = "slide-in 0.4s ease-in-out";
        headerBackground.style.borderBottomLeftRadius = "0";
        headerBackground.style.borderBottomRightRadius = "0";
        isOpen = true;
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-times');
    }
    else
    {
        let computedStyle = window.getComputedStyle(menu);
        let currentPosition = computedStyle.getPropertyValue("transform");

        menu.style.animation = "slide-out 0.4s ease-in-out";
        menu.style.transform = currentPosition;
        headerBackground.style.borderBottomLeftRadius = "2.5vw";
        headerBackground.style.borderBottomRightRadius = "2.5vw";
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
        setTimeout(() =>
        {
            menu.style.display = "none";
            isOpen = false;
        }, 750);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let backToTopButton = document.getElementById('back-to-top');

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.getElementById('navigation').getElementsByClassName('play-button-container')[0].getElementsByClassName('button')[0].addEventListener('click', function()
    {
        window.location.href = "/src/about-game.html";
    });

    screenWidth.addEventListener("change", resetStyling);
});
