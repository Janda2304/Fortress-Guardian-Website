document.addEventListener('DOMContentLoaded', function()
{
   let accelerusButton = document.getElementById('accelerus-button');
   let askisButton = document.getElementById('askis-button');
   let underglowButton = document.getElementById('underglow-button');
   let fgButton = document.getElementById('fg-button');


    accelerusButton.addEventListener('click', function()
    {
         window.location.href = "https://turtledave501.itch.io/accelerus";
    });

    askisButton.addEventListener('click', function()
    {
         window.location.href = "https://turtledave501.itch.io/askis-temporal-tangle";
    });

    underglowButton.addEventListener('click', function()
    {
         window.location.href = "https://turtledave501.itch.io/underglow";
    });

    fgButton.addEventListener('click', function()
    {
         window.location.href = "about-game.html";
    });


    fetch("../data/aboutus.json").then(response => response.json()).then(data => {
        let aboutUsTitle = document.getElementById("aboutusTitle");
        let aboutUsText = document.getElementById("aboutusText")

        aboutUsTitle.innerHTML = data.title;
        aboutUsText.innerHTML = data.text;

    });
});