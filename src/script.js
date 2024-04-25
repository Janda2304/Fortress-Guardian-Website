let hamburger = document.getElementById("hamburger-menu-icon");
let menu = document.getElementById("navigation");
let isOpen = false;

hamburger.addEventListener("click", toggleMenu);

function toggleMenu()
{
    if (!isOpen)
    {
        menu.style.display = "flex";
        menu.style.animation = "slide-in 0.75s ease-in-out";
        isOpen = true;
    }
    else
    {
        let computedStyle = window.getComputedStyle(menu);
        let currentPosition = computedStyle.getPropertyValue("transform");

        menu.style.animation = "slide-out 0.75s ease-in-out";
        menu.style.transform = currentPosition;
        setTimeout(() =>
        {
            menu.style.display = "none";
            isOpen = false;
        }, 750);
    }
}